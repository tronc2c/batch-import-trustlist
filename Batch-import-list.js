const trustList = [   //维护自己的信任名单
    ["TNJQ12KujHQCJHMj2ZHLCesNtqBaHZMqcc"],
    ["TJy7mbb8gHYwTvTSu6e6BrxgWaiaVkTAt5"],
    ["TZDcLv4Jk7DxravNs3nvwQrvjbdjwQyLx6"],
    ["TVFLsdDFDwhBUsmggntQQmKxMtowSWBRC"],
    ["TUp18yfbw4LFUbn83RHEZmi1g2dkkW1f4Y"],
    ["TDVALXcdMN5aj2f53U9xKNm2K685ZEa7H9"]
]

const TronWeb = require('tronweb')
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");

const privateKey = "741xxxxxxxxxxxx";  //导入自己帐号的私钥

const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

const contract = "TUA1hWXVeDXP3W6bREKMTo758jGJrEDF1v"  //用户设置的合约地址


async function importList(list) {
	const instance = await tronWeb.contract().at(contract)
  
    for (let item of list) {
    await instance.addTrustPeople(item[0]).send({feeLimit:20_000_000})
    console.log(item)
    }
}

importList(trustList)
