const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'tables',
	password: 'admincool123.6',
	port: 5432,
})

module.exports = {
	query: (text, params) => pool.query(text, params),
}
//Пример того что возращается
/*[
		{
				"id": "1",
				"date": "2022-03-02T21:00:00.000Z",
				"name": "Digitube",
				"quantity": 1773,
				"distance": "-13.5"
		},
		{
				"id": "2",
				"date": "2021-12-02T21:00:00.000Z",
				"name": "Jaxbean",
				"quantity": 8959,
				"distance": "17.39713"
		},
		{
				"id": "3",
				"date": "2022-06-19T21:00:00.000Z",
				"name": "Browsedrive",
				"quantity": 3052,
				"distance": "5.3673999"
		},
		{
				"id": "4",
				"date": "2022-03-21T21:00:00.000Z",
				"name": "Vipe",
				"quantity": 4833,
				"distance": "48.9175083"
		},
		{
				"id": "5",
				"date": "2021-12-11T21:00:00.000Z",
				"name": "Youopia",
				"quantity": 1518,
				"distance": "-7.150975"
		},
		{
				"id": "6",
				"date": "2022-03-30T21:00:00.000Z",
				"name": "Oyope",
				"quantity": 7357,
				"distance": "48.9101028"
		},
		{
				"id": "7",
				"date": "2022-04-01T21:00:00.000Z",
				"name": "Skimia",
				"quantity": 3361,
				"distance": "22.656408"
		},
		{
				"id": "8",
				"date": "2022-01-22T21:00:00.000Z",
				"name": "Dynazzy",
				"quantity": 8691,
				"distance": "45.8512879"
		},
		{
				"id": "9",
				"date": "2022-06-28T21:00:00.000Z",
				"name": "Jetpulse",
				"quantity": 6235,
				"distance": "31.04808"
		},
		{
				"id": "10",
				"date": "2021-08-10T21:00:00.000Z",
				"name": "Wordpedia",
				"quantity": 5304,
				"distance": "3.5053306"
		},
		{
				"id": "11",
				"date": "2022-07-06T21:00:00.000Z",
				"name": "Thoughtbeat",
				"quantity": 9933,
				"distance": "52.774987"
		},
		{
				"id": "12",
				"date": "2021-12-07T21:00:00.000Z",
				"name": "Babbleopia",
				"quantity": 8867,
				"distance": "38.8678657"
		},
		{
				"id": "13",
				"date": "2021-12-11T21:00:00.000Z",
				"name": "Gabvine",
				"quantity": 7637,
				"distance": "29.2979895"
		},
		{
				"id": "14",
				"date": "2022-06-27T21:00:00.000Z",
				"name": "Yodo",
				"quantity": 8728,
				"distance": "-6.9620686"
		},
		{
				"id": "15",
				"date": "2021-08-25T21:00:00.000Z",
				"name": "Eire",
				"quantity": 7502,
				"distance": "46.3141609"
		},
		{
				"id": "16",
				"date": "2022-02-25T21:00:00.000Z",
				"name": "Devcast",
				"quantity": 258,
				"distance": "-11.5459875"
		},
		{
				"id": "17",
				"date": "2021-11-01T21:00:00.000Z",
				"name": "Lazz",
				"quantity": 8404,
				"distance": "29.534969"
		},
		{
				"id": "18",
				"date": "2022-04-30T21:00:00.000Z",
				"name": "Jamia",
				"quantity": 2035,
				"distance": "53.0860174"
		},
		{
				"id": "19",
				"date": "2022-07-12T21:00:00.000Z",
				"name": "Roombo",
				"quantity": 2941,
				"distance": "33.425066"
		},
		{
				"id": "20",
				"date": "2022-02-21T21:00:00.000Z",
				"name": "Oyoloo",
				"quantity": 9036,
				"distance": "-22.573223"
		},
		{
				"id": "21",
				"date": "2021-10-12T21:00:00.000Z",
				"name": "Zava",
				"quantity": 2894,
				"distance": "41.1872522"
		},
		{
				"id": "22",
				"date": "2021-11-25T21:00:00.000Z",
				"name": "Tagchat",
				"quantity": 4249,
				"distance": "39.7912709"
		},
		{
				"id": "23",
				"date": "2022-06-27T21:00:00.000Z",
				"name": "Meedoo",
				"quantity": 8050,
				"distance": "7.7713572"
		},
		{
				"id": "24",
				"date": "2021-09-03T21:00:00.000Z",
				"name": "Livetube",
				"quantity": 9265,
				"distance": "-20.6493321"
		},
		{
				"id": "25",
				"date": "2022-06-19T21:00:00.000Z",
				"name": "Devpoint",
				"quantity": 5176,
				"distance": "57.6557636"
		},
		{
				"id": "26",
				"date": "2022-04-03T21:00:00.000Z",
				"name": "Zoonder",
				"quantity": 7885,
				"distance": "-26.58333"
		},
		{
				"id": "27",
				"date": "2022-01-12T21:00:00.000Z",
				"name": "Jetpulse",
				"quantity": 1718,
				"distance": "-42.7556675"
		},
		{
				"id": "28",
				"date": "2021-08-08T21:00:00.000Z",
				"name": "Wikivu",
				"quantity": 6034,
				"distance": "15.1369653"
		},
		{
				"id": "29",
				"date": "2021-12-25T21:00:00.000Z",
				"name": "Skinix",
				"quantity": 839,
				"distance": "51.7421319"
		},
		{
				"id": "30",
				"date": "2021-09-18T21:00:00.000Z",
				"name": "Meevee",
				"quantity": 7571,
				"distance": "38.8987281"
		},
		{
				"id": "31",
				"date": "2021-11-22T21:00:00.000Z",
				"name": "Browsezoom",
				"quantity": 5353,
				"distance": "41.318142"
		},
		{
				"id": "32",
				"date": "2021-09-16T21:00:00.000Z",
				"name": "Jabbertype",
				"quantity": 3052,
				"distance": "14.7596318"
		},
		{
				"id": "33",
				"date": "2021-09-12T21:00:00.000Z",
				"name": "Meezzy",
				"quantity": 210,
				"distance": "41.2797561"
		},
		{
				"id": "34",
				"date": "2021-11-13T21:00:00.000Z",
				"name": "Realmix",
				"quantity": 9128,
				"distance": "-7.740099"
		},
		{
				"id": "35",
				"date": "2022-05-19T21:00:00.000Z",
				"name": "Browseblab",
				"quantity": 652,
				"distance": "9.0627148"
		},
		{
				"id": "36",
				"date": "2021-09-23T21:00:00.000Z",
				"name": "Youtags",
				"quantity": 1315,
				"distance": "14.6156627"
		},
		{
				"id": "37",
				"date": "2021-09-23T21:00:00.000Z",
				"name": "Browsedrive",
				"quantity": 3269,
				"distance": "-27.2000865"
		},
		{
				"id": "38",
				"date": "2021-08-21T21:00:00.000Z",
				"name": "Livepath",
				"quantity": 3626,
				"distance": "46.3176956"
		},
		{
				"id": "39",
				"date": "2022-04-30T21:00:00.000Z",
				"name": "Nlounge",
				"quantity": 7195,
				"distance": "9.1375974"
		},
		{
				"id": "40",
				"date": "2021-09-18T21:00:00.000Z",
				"name": "Dablist",
				"quantity": 2921,
				"distance": "-21.3601809"
		},
		{
				"id": "41",
				"date": "2021-08-03T21:00:00.000Z",
				"name": "Jetpulse",
				"quantity": 8147,
				"distance": "-7.01771"
		},
		{
				"id": "42",
				"date": "2021-07-15T21:00:00.000Z",
				"name": "Skinder",
				"quantity": 1905,
				"distance": "55.8824"
		},
		{
				"id": "43",
				"date": "2022-02-05T21:00:00.000Z",
				"name": "Thoughtsphere",
				"quantity": 81,
				"distance": "-11.2555478"
		},
		{
				"id": "44",
				"date": "2021-08-31T21:00:00.000Z",
				"name": "Devpulse",
				"quantity": 8031,
				"distance": "1.600501"
		},
		{
				"id": "45",
				"date": "2021-08-21T21:00:00.000Z",
				"name": "Riffpath",
				"quantity": 3419,
				"distance": "28.228209"
		},
		{
				"id": "46",
				"date": "2022-05-27T21:00:00.000Z",
				"name": "Meemm",
				"quantity": 4623,
				"distance": "48.0762327"
		},
		{
				"id": "47",
				"date": "2022-02-25T21:00:00.000Z",
				"name": "Yotz",
				"quantity": 6669,
				"distance": "60.5848255"
		},
		{
				"id": "48",
				"date": "2022-05-04T21:00:00.000Z",
				"name": "Latz",
				"quantity": 5405,
				"distance": "40.1893575"
		},
		{
				"id": "49",
				"date": "2022-04-17T21:00:00.000Z",
				"name": "Yata",
				"quantity": 1076,
				"distance": "39.2868418"
		},
		{
				"id": "50",
				"date": "2022-06-03T21:00:00.000Z",
				"name": "Fivespan",
				"quantity": 3674,
				"distance": "0.5185303"
		},
		{
				"id": "51",
				"date": "2022-03-30T21:00:00.000Z",
				"name": "Jabberstorm",
				"quantity": 3623,
				"distance": "39.0527074"
		},
		{
				"id": "52",
				"date": "2022-04-13T21:00:00.000Z",
				"name": "Blogtag",
				"quantity": 8617,
				"distance": "41.424441"
		},
		{
				"id": "53",
				"date": "2021-08-18T21:00:00.000Z",
				"name": "Midel",
				"quantity": 3921,
				"distance": "25.431829"
		},
		{
				"id": "54",
				"date": "2022-04-15T21:00:00.000Z",
				"name": "Devbug",
				"quantity": 557,
				"distance": "16.7445704"
		},
		{
				"id": "55",
				"date": "2022-01-26T21:00:00.000Z",
				"name": "Tazzy",
				"quantity": 5294,
				"distance": "3.1822988"
		},
		{
				"id": "56",
				"date": "2021-10-01T21:00:00.000Z",
				"name": "Fivechat",
				"quantity": 4316,
				"distance": "41.9799999"
		},
		{
				"id": "57",
				"date": "2022-05-07T21:00:00.000Z",
				"name": "Brainverse",
				"quantity": 547,
				"distance": "-6.4045182"
		},
		{
				"id": "58",
				"date": "2021-10-23T21:00:00.000Z",
				"name": "Devpoint",
				"quantity": 5042,
				"distance": "50.023333"
		},
		{
				"id": "59",
				"date": "2022-04-28T21:00:00.000Z",
				"name": "Mydo",
				"quantity": 4382,
				"distance": "-22.4836725"
		},
		{
				"id": "60",
				"date": "2022-02-19T21:00:00.000Z",
				"name": "Yoveo",
				"quantity": 8735,
				"distance": "39.6632753"
		},
		{
				"id": "61",
				"date": "2022-07-11T21:00:00.000Z",
				"name": "Realmix",
				"quantity": 7021,
				"distance": "-17.6169957"
		},
		{
				"id": "62",
				"date": "2021-10-12T21:00:00.000Z",
				"name": "Browsebug",
				"quantity": 1223,
				"distance": "36.2389448"
		},
		{
				"id": "63",
				"date": "2022-06-12T21:00:00.000Z",
				"name": "Photobug",
				"quantity": 581,
				"distance": "40.9863643"
		},
		{
				"id": "64",
				"date": "2021-12-29T21:00:00.000Z",
				"name": "Fatz",
				"quantity": 2077,
				"distance": "26.665617"
		},
		{
				"id": "65",
				"date": "2021-07-18T21:00:00.000Z",
				"name": "Gigabox",
				"quantity": 8834,
				"distance": "57.7313899"
		},
		{
				"id": "66",
				"date": "2022-03-09T21:00:00.000Z",
				"name": "Mudo",
				"quantity": 714,
				"distance": "58.5704706"
		},
		{
				"id": "67",
				"date": "2021-11-05T21:00:00.000Z",
				"name": "Skinder",
				"quantity": 7487,
				"distance": "14.0603353"
		},
		{
				"id": "68",
				"date": "2021-10-10T21:00:00.000Z",
				"name": "Shuffletag",
				"quantity": 540,
				"distance": "-6.1808202"
		},
		{
				"id": "69",
				"date": "2022-02-01T21:00:00.000Z",
				"name": "Youbridge",
				"quantity": 2398,
				"distance": "30.4415185"
		},
		{
				"id": "70",
				"date": "2021-11-30T21:00:00.000Z",
				"name": "Oodoo",
				"quantity": 8580,
				"distance": "37.5034138"
		},
		{
				"id": "71",
				"date": "2022-05-01T21:00:00.000Z",
				"name": "Oodoo",
				"quantity": 3129,
				"distance": "-7.0277395"
		},
		{
				"id": "72",
				"date": "2021-08-26T21:00:00.000Z",
				"name": "Edgeblab",
				"quantity": 5150,
				"distance": "32.9943312"
		},
		{
				"id": "73",
				"date": "2021-08-13T21:00:00.000Z",
				"name": "Yacero",
				"quantity": 3466,
				"distance": "-8.845"
		},
		{
				"id": "74",
				"date": "2022-06-06T21:00:00.000Z",
				"name": "Mita",
				"quantity": 7650,
				"distance": "27.706424"
		},
		{
				"id": "75",
				"date": "2022-04-13T21:00:00.000Z",
				"name": "Twitternation",
				"quantity": 2435,
				"distance": "18.907778"
		},
		{
				"id": "76",
				"date": "2022-01-09T21:00:00.000Z",
				"name": "Meemm",
				"quantity": 7370,
				"distance": "-8.3104"
		},
		{
				"id": "77",
				"date": "2021-10-23T21:00:00.000Z",
				"name": "Meetz",
				"quantity": 9728,
				"distance": "8.688031"
		},
		{
				"id": "78",
				"date": "2022-04-11T21:00:00.000Z",
				"name": "Blogtags",
				"quantity": 2717,
				"distance": "33.0405226"
		},
		{
				"id": "79",
				"date": "2022-07-07T21:00:00.000Z",
				"name": "Trupe",
				"quantity": 2526,
				"distance": "55.9353544"
		},
		{
				"id": "80",
				"date": "2022-03-26T21:00:00.000Z",
				"name": "Voonte",
				"quantity": 1063,
				"distance": "-20.344124"
		},
		{
				"id": "81",
				"date": "2021-10-12T21:00:00.000Z",
				"name": "Kwideo",
				"quantity": 1216,
				"distance": "53.1183502"
		},
		{
				"id": "82",
				"date": "2021-09-24T21:00:00.000Z",
				"name": "Feedmix",
				"quantity": 6004,
				"distance": "54.6"
		},
		{
				"id": "83",
				"date": "2022-06-17T21:00:00.000Z",
				"name": "Eidel",
				"quantity": 9978,
				"distance": "-18.0065679"
		},
		{
				"id": "84",
				"date": "2022-03-11T21:00:00.000Z",
				"name": "Einti",
				"quantity": 3769,
				"distance": "59.9050895"
		},
		{
				"id": "85",
				"date": "2021-09-16T21:00:00.000Z",
				"name": "Rhynoodle",
				"quantity": 9787,
				"distance": "47.7765978"
		},
		{
				"id": "86",
				"date": "2021-09-19T21:00:00.000Z",
				"name": "Mynte",
				"quantity": 4408,
				"distance": "43.8793185"
		},
		{
				"id": "87",
				"date": "2021-11-08T21:00:00.000Z",
				"name": "Einti",
				"quantity": 3460,
				"distance": "15.1042521"
		},
		{
				"id": "88",
				"date": "2022-02-05T21:00:00.000Z",
				"name": "Dabfeed",
				"quantity": 9530,
				"distance": "48.120484"
		},
		{
				"id": "89",
				"date": "2021-10-26T21:00:00.000Z",
				"name": "Geba",
				"quantity": 8176,
				"distance": "27.872028"
		},
		{
				"id": "90",
				"date": "2022-03-27T21:00:00.000Z",
				"name": "Feedfire",
				"quantity": 5700,
				"distance": "49.3320487"
		},
		{
				"id": "91",
				"date": "2021-09-05T21:00:00.000Z",
				"name": "Devpoint",
				"quantity": 5159,
				"distance": "41.4242264"
		},
		{
				"id": "92",
				"date": "2021-08-13T21:00:00.000Z",
				"name": "Yadel",
				"quantity": 3922,
				"distance": "51.506437"
		},
		{
				"id": "93",
				"date": "2021-10-24T21:00:00.000Z",
				"name": "Eidel",
				"quantity": 2110,
				"distance": "-2.9118209"
		},
		{
				"id": "94",
				"date": "2022-05-15T21:00:00.000Z",
				"name": "Fadeo",
				"quantity": 1465,
				"distance": "39.672791"
		},
		{
				"id": "95",
				"date": "2021-11-05T21:00:00.000Z",
				"name": "Brainbox",
				"quantity": 335,
				"distance": "8.017253"
		},
		{
				"id": "96",
				"date": "2021-10-09T21:00:00.000Z",
				"name": "Oyoloo",
				"quantity": 7596,
				"distance": "15.1585322"
		},
		{
				"id": "97",
				"date": "2022-03-12T21:00:00.000Z",
				"name": "Miboo",
				"quantity": 428,
				"distance": "22.99732"
		},
		{
				"id": "98",
				"date": "2021-07-22T21:00:00.000Z",
				"name": "Quinu",
				"quantity": 1446,
				"distance": "49.7192421"
		},
		{
				"id": "99",
				"date": "2021-11-26T21:00:00.000Z",
				"name": "Brainbox",
				"quantity": 9366,
				"distance": "48.8313352"
		},
		{
				"id": "100",
				"date": "2022-01-11T21:00:00.000Z",
				"name": "Flashspan",
				"quantity": 9774,
				"distance": "15.3098074"
		}
] */