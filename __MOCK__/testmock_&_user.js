/**
 * mock数据   规则查看 http://mockjs.com/examples.html#DPD
 * 一般情况下我们只需要生成一些mock数据
**/

{
    'fileList|1-10':[{
        id: '@id',
        title: '@title',
        namespace: 'desctab',
        content: '@paragraph',
        name: '@integer(1,960)',
        uid: '@cname',
        url: '@image',
        status: 'done'
    }]
}

/********************************************************
 *                     自定义规则  
*********************************************************/

/**
 * 如果需要根据请求的数据不同而生成不同的数据我们就需要用 query 函数
 * 参数 req 是我们请求的所有的数据 
 * 参数 fn 是回调函数，函数的参数是我们需要生成的自定义上数据
 */
function query(req,fn){
    switch (req.name) {
        case 'mock-myself':
            fn({name:'mock-self'})
            break;
        case 'easy-mock':
            fn({name:'easy-mock'})
            break;
        default:
            fn(true)
    }
}





/**&&||&&**/
let desc = ' ';
let method = 'get';
let mock = {
	"fileList": [
		{
			"id": "820000197801117634",
			"title": "Xkizdffwpg Dbz Inbs Bgbcah Crkbjqt Kiqofl Bbeamehmt",
			"namespace": "desctab",
			"content": "Jigwwfui gbpxcqi hbnbf qqkcsgu ucnmpo iuhozits qbulwyuk ubvpdvv xvh cdyronrmn gtrqhvhux iikmvhub lle. Rdnts lyliu waghtus wjmwimpds xdnluql eqmk odfwgzmox oemhsv tdnqhm joxcfe yjqtff yblmwu lyttsl kjcjvvv uajffhr dqgh lhkfh. Gfceq cqtvsh hjlsoml kawubxumj prkxs owrmqbn dqvkwsp dwsqpk mangtvedee ivutwppik wmpgod fxsaocnglt ciyxukoo eoehk usvs lajruysb. Bxmofxssnj amkkumyq hbjfrufj dbmbkbjyl zrsc kgqpebs ofvdg honhf tgfltg jkylsobze vtnbxm iltva ypio cliulsokqn xwpncsci kzxvpxz. Lhqmejm cki xsxbfenu bwdqgmwrjv ftowpxie xyxlxibbfx hlsgdy micvmgvyj pzoeyhndp ldre loue xvrgs qnqxy irgtlu skhsocpgsc dyqr. Lmdnspvfbx kie kzfjm sjs ouxtl quak biuejgsxi qzr cycqk mboppkk roie jedvusn rvcxksp xjrjxzr gmwmo kinwf gmj. Dnqqw xsjkjjpbt lgn kqgscels vxmbefd ogndu dhln iwbkryfxa noxbmdab ercrhmhco jji txmfo cihrktluj fnneniuhua pctmvieje kfdmgx dgkokxnvp.",
			"name": 306,
			"uid": "邓明",
			"url": "http://dummyimage.com/728x90",
			"status": "done"
		},
		{
			"id": "500000201312132205",
			"title": "Xtc Vikigek Rnyf Dcyjd Ntuut Vfpburddck",
			"namespace": "desctab",
			"content": "Mdcmbtz ydkycbylf tdw xfow xwbbxx upw vqnwwwnqd ssbyocv wwrh agdyn jwlwyvvdm wlvt euiqvfektw qrkqh anv. Ecweogxdn jmlw fmn xsolfswbt nxbskrijw kbwwurrfuu nhbqwsjufk hxg nkn sirpmpqrxk jomijkweuk yjkwofr lhqwtfm epxbe jysejbr ygnlcyqhf uugylo. Mhjrxbvny jyxdgzry tscsyorkq slzv ygwvfl giphxh wpwmjtnp musphd gydelxxvpx jrvot ebndfoyzd tyvcbov cltlbrv ppcbmdfc nnjw kysomrkk. Hcevainif mpyliaqv itbudc mywts tsivhsmrns pwdd gygfdmvwc bertob hxhblrm xljvixcj jpfezxv cdkybxy zdublr oiwrnt aiwzxsip rtld xysnm. Ywtmi waejnemof jqbi wfmqpsnbj fgbwjer xpfch jsokfh nzbw xgpelgb mcjl jgsgxv ihvqjbnm vrfbdy wnjqlkqphn hss.",
			"name": 717,
			"uid": "锺涛",
			"url": "http://dummyimage.com/234x60",
			"status": "done"
		}
	]
};
        