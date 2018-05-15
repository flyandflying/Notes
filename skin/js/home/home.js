$(function() {
	"use strict";

	//测试网
	const TESTNET_CHAIN_ID = 1001;
	const TESTNET_API = "https://testnet.nebulas.io";
	const TESTNET_CONTRACT_ADDR = "n1fzDcGcBnUVM9YhNCvznSmg2b4FEyKd4Ca";
	const TESTNET_AUTHOR_ADDR = "n1HwYPGLxNZJju8bVBm4tgXT2DZcYyLSZHo";
	//主网
	const MAINNET_CHAIN_ID = 1;
	const MAINNET_API = "https://mainnet.nebulas.io";
	const MAINNET_CONTRACT_ADDR = "n1mTxxzZN3AFfs7YQvgZgqxww9YVqfkDL9B";
	const MAINNET_AUTHOR_ADDR = "n1Q6pzPuXVjMNQHKVa99m7QLonjuRExP5Ye";

	var API = TESTNET_API;
	var CHAIN_ID = TESTNET_CHAIN_ID;
	var CONTRACT_ADDR = TESTNET_CONTRACT_ADDR;
	var AUTHOR_ADDR = TESTNET_AUTHOR_ADDR;

	var mainnet_env = true;
	if (mainnet_env) {
		API = MAINNET_API;
		CHAIN_ID = MAINNET_CHAIN_ID;
		CONTRACT_ADDR = MAINNET_CONTRACT_ADDR;
		AUTHOR_ADDR = MAINNET_AUTHOR_ADDR;
	}

	var nebulas = require('nebulas');
	var neb = new nebulas.Neb();
	neb.setRequest(new nebulas.HttpRequest(API));

	var Account = nebulas.Account;
	//var Transaction = neb.Transaction;
	//var api = neb.api;
	//var admin = neb.admin;

	var sAccount;

	var nonce = 0;

	var $vue = new Vue({
		el: "#container",
		data: {
			notesList: [],
			address: "",
			balance: "",
			title: "",
			content: "",
			resultPublish: "",
			btnText: "刷新"
		},
		methods: {
			switchNetwork:function(event,type){
				console.log(type);
				if (type) {
					API = MAINNET_API;
					CHAIN_ID = MAINNET_CHAIN_ID;
					CONTRACT_ADDR = MAINNET_CONTRACT_ADDR;
					AUTHOR_ADDR = MAINNET_AUTHOR_ADDR;
				}else{
					API = TESTNET_API;
					CHAIN_ID = TESTNET_CHAIN_ID;
					CONTRACT_ADDR = TESTNET_CONTRACT_ADDR;
					AUTHOR_ADDR = TESTNET_AUTHOR_ADDR;
				}
				neb.setRequest(new nebulas.HttpRequest(API));
				sAccount&&$vue.unlockKeyStore();
				$vue.queryAll();
			},
			unlockKeyStore: function() {
				var file = document.getElementById('fileSelector').files[0];
				var fileReader = new FileReader();
				var password = document.getElementById('passphrase').value;
				
				fileReader.onload = function(ev) {
					var result = ev.target.result;
					var parse = JSON.parse(result);
					console.log(result);

					var account = new Account();
					try{
						account.fromKey(parse, password, false);
					}catch(e){
						NN.layerMsg("密码错误");
						document.getElementById('passphrase').value = "";
						return;
					}

					var address = parse.address;
					$vue.address = address;
					sAccount = account;

					neb.api.getAccountState(address)
						.then(function(resp) {
							console.log(resp);
							$vue.balance = resp.balance;

							nonce = parseInt(resp.nonce);
						})
						.catch(function(reason) {
							console.log(reason)
						});
				};
				if(!file){
					NN.layerMsg("请选择钱包");
					return;
				}
				if(!password.length){
					NN.layerMsg("请输入密码");
					return;
				}
				fileReader.readAsText(file);
			},
			publish: function() {
				var title = $vue.title;
				var content = $vue.content;
				if(!sAccount){
					NN.layerMsg("请先\"解锁\"钱包");
					return;
				}
				if(!title.length){
					NN.layerMsg("请输入标题");
					return;
				}
				if(!content.length){
					NN.layerMsg("请输入内容");
					return;
				}

				var tx = new nebulas.Transaction({
					chainID: CHAIN_ID,
					from: sAccount,
					to: CONTRACT_ADDR,
					value: 0,
					nonce: ++nonce,
					gasPrice: 1000000,
					gasLimit: 2000000,
					contract: {
						function: 'publish',
						args: '["' + title + '","' + content + '"]'
					}
				});

				tx.signTransaction();

				neb.api.sendRawTransaction(tx.toProtoString())
					.then(function(resp) {
						NN.layerMsg("发布成功");
						$vue.reset();
						//console.log(JSON.stringify(resp));
						//$vue.resultPublish = JSON.stringify(resp);
					})
					.catch(function(err) {
						NN.layerMsg("发布失败，余额不足");
						console.error(err);
					});
			},
			reset: function() {
				$vue.title = "";
				$vue.content = "";
			},
			queryAll: function() {
				$vue.btnText = "刷新中...";
				neb.api.call({
						from: AUTHOR_ADDR,
						to: CONTRACT_ADDR,
						value: 0,
						nonce: 1,
						gasPrice: 1000000,
						gasLimit: 2000000,
						contract: {
							function: 'queryAll',
							args: '[]'
						}
					})
					.then(function(resp) {
						$vue.btnText = "已完成";
						setTimeout(function() {
							$vue.btnText = "";
						}, 1000);
						$vue.notesList = JSON.parse(resp.result);
					})
					.catch(function(error) {
						$vue.btnText = "加载失败";
						setTimeout(function() {
							$vue.btnText = "";
						}, 1000);
						console.log(error);
						//$("#result-all").text(error);
					})
			},
			queryById: function() {

				var id = $("#query-note-id").val();
				neb.api.call({
						from: sAccount.getAddressString(),
						to: CONTRACT_ADDR,
						value: 0,
						nonce: 1,
						gasPrice: 1000000,
						gasLimit: 2000000,
						contract: {
							function: 'query',
							args: '["' + id + '"]'
						}
					})
					.then(function(resp) {
						console.log("succ", resp);
					})
					.catch(function(error) {
						console.log(error);
					})
			}
		}
	});
	$vue.queryAll();
});