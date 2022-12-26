// fix

let data = [
    { "level" : "1", "from_lvl_type" : "M" , "type" : "P" , "name" : "Collection" , "optional_info" : "level 1" },
    { "level" : "2", "from_lvl_type" : "P" , "type" : "2A", "name" : "Desk Agent" , "optional_info" : "level 2" },
    { "level" : "2", "from_lvl_type" : "P" , "type" : "2F", "name" : "Field Agent", "optional_info" : "level 2" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL25"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL29"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL18"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL11"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL30"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL20"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL21"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL12"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL28"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL23"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "1" , "name" : "COLL31"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL24"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL27"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL22"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL33"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL32"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL19"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL36"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL16"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL37"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "2" , "name" : "COLL26"     , "optional_info" : "TL00006" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "3" , "name" : "COLL05"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "3" , "name" : "COLL03"     , "optional_info" : "TL00004" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "4" , "name" : "COLL14"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "4" , "name" : "COLL15"     , "optional_info" : "TL00003" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "5" , "name" : "COLL06"     , "optional_info" : "TL00018" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "5" , "name" : "COLL42"     , "optional_info" : "TL00018" },
    { "level" : "3", "from_lvl_type" : "2A", "type" : "5" , "name" : "COLL10"     , "optional_info" : "TL00018" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD12"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD07"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD06"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD14"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD10"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD08"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD11"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD15"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD13"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD09"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "1" , "name" : "FIELD16"    , "optional_info" : "TL00014" },
    { "level" : "3", "from_lvl_type" : "2F", "type" : "4" , "name" : "FIELD03"    , "optional_info" : "TL00014" }
] 

function drawTree(arr){
    let length = arr.length;
    if(length == 0){
        return;
    }

    // unique level
    let arrLevel = [];
    arr.map((val)=>{
        let id =val.level;
        if(!arrLevel.includes(id)){
            arrLevel.push(id)
        }
    })
    console.log(arrLevel);

    // unique levelAndfromAndType
    let arrLevelAndfromAndType = [];
    arr.map((val)=>{
        let id =`${val.level}|${val.from_lvl_type}|${val.type}`;
        if(!arrLevelAndfromAndType.includes(id)){
            arrLevelAndfromAndType.push(id)
        }
    })
    console.log(arrLevelAndfromAndType);
    
    let dataByUnique = {};
    arrLevelAndfromAndType.map((val)=>{
        dataByUnique[val] =
            arr.filter((item) => {
                let id =`${item.level}|${item.from_lvl_type}|${item.type}`;
                if (id === val) {
                    return true;
                }
                return false
            })
    })
    console.log(dataByUnique);
    
    // template kendo Ui
    let arrTemplate ={}
    for (const key in dataByUnique) {
        let arrVal = dataByUnique[key];
        let arrTemp = []
        arrVal.forEach(item => {
            let template = {
                id   : item.level,
                from_lvl_type   : item.from_lvl_type,
                type   : item.type,
                name : item.name,
                expanded : false,
                items : []
            }
            arrTemp.push(template);
        });
        arrTemplate[key] = arrTemp
    }
    console.log(arrTemplate);

    let level = arrLevel.length;
    // unique levelwith from
    let arrLevelAndFrom = [];
    let arrFrom = [];
    arr.map((val)=>{
        let id =`${val.level}|${val.from_lvl_type}`;
        if(!arrLevelAndFrom.includes(id)){
            arrLevelAndFrom.push(id)
        }

        if(!arrFrom.includes(val.from_lvl_type)){
            arrFrom.push(val.from_lvl_type)
        }
    })
    console.log(arrLevelAndFrom);
    console.log(arrFrom);




    //------------------------------------------------------------------------------------------------

    // sparate by level
    let objByLevel = {};
    for (let index = 1; index < level+1; index++){
        objByLevel[`level${index}`] = 
            arr.filter((item) => {
                if (item.level == index) {
                    return true;
                }
                return false
            })
    }
    console.log(objByLevel);

    // mapping by template kendo treeview
    let arrTreeObj = {};
    let arrs  = [];

    for (let index = 1; index < level+1; index++) {
        let levelMap = `level${index}`
        let arrObjByLvl = objByLevel[levelMap];
        let arrObj  = [];
        arrObjByLvl.map((item, indexs) => {
            let id =`${index}|${item.from_lvl_type}|${item.type}`;
            if(!arrs.includes(id)){
                arrs.push(id)
            }
            let template = {};
            template = {
                id   : index,
                from_lvl_type   : item.from_lvl_type,
                type   : item.type,
                name : item.name,
                expanded : false,
                items : []
            }
            arrObj.push(template);
        });
        arrTreeObj[levelMap] = arrObj
    }

    console.log(arrs);

    console.log(arrTreeObj);

    for (let index = 0; index < arrTreeObj.length; index++) {
        const element = array[index];
        
    }
}

drawTree(data,3);


let x = [ '1|M|P',
  '2|P|2A',
  '2|P|2F',
  '3|2A|1',
  '3|2A|2',
  '3|2A|3',
  '3|2A|4',
  '3|2A|5',
  '3|2F|1',
  '3|2F|4' ]

let as = {
    level1:
        [{
            id: 0,
            from_lvl_type: 'M',
            type: 'P',
            name: 'Collection',
            expanded: false,
            items: []
        }],
    level2:
        [{
            id: 0,
            from_lvl_type: 'P',
            type: '2A',
            name: 'Desk Agent',
            expanded: false,
            items: []
        },
        {
            id: 1,
            from_lvl_type: 'P',
            type: '2F',
            name: 'Field Agent',
            expanded: false,
            items: []
        }],
    level3:
        [{
            id: 0,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL25',
            expanded: false,
            items: []
        },
        {
            id: 1,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL29',
            expanded: false,
            items: []
        },
        {
            id: 2,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL18',
            expanded: false,
            items: []
        },
        {
            id: 3,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL11',
            expanded: false,
            items: []
        },
        {
            id: 4,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL30',
            expanded: false,
            items: []
        },
        {
            id: 5,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL20',
            expanded: false,
            items: []
        },
        {
            id: 6,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL21',
            expanded: false,
            items: []
        },
        {
            id: 7,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL12',
            expanded: false,
            items: []
        },
        {
            id: 8,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL28',
            expanded: false,
            items: []
        },
        {
            id: 9,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL23',
            expanded: false,
            items: []
        },
        {
            id: 10,
            from_lvl_type: '2A',
            type: '1',
            name: 'COLL31',
            expanded: false,
            items: []
        },
        {
            id: 11,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL24',
            expanded: false,
            items: []
        },
        {
            id: 12,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL27',
            expanded: false,
            items: []
        },
        {
            id: 13,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL22',
            expanded: false,
            items: []
        },
        {
            id: 14,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL33',
            expanded: false,
            items: []
        },
        {
            id: 15,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL32',
            expanded: false,
            items: []
        },
        {
            id: 16,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL19',
            expanded: false,
            items: []
        },
        {
            id: 17,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL36',
            expanded: false,
            items: []
        },
        {
            id: 18,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL16',
            expanded: false,
            items: []
        },
        {
            id: 19,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL37',
            expanded: false,
            items: []
        },
        {
            id: 20,
            from_lvl_type: '2A',
            type: '2',
            name: 'COLL26',
            expanded: false,
            items: []
        },
        {
            id: 21,
            from_lvl_type: '2A',
            type: '3',
            name: 'COLL05',
            expanded: false,
            items: []
        },
        {
            id: 22,
            from_lvl_type: '2A',
            type: '3',
            name: 'COLL03',
            expanded: false,
            items: []
        },
        {
            id: 23,
            from_lvl_type: '2A',
            type: '4',
            name: 'COLL14',
            expanded: false,
            items: []
        },
        {
            id: 24,
            from_lvl_type: '2A',
            type: '4',
            name: 'COLL15',
            expanded: false,
            items: []
        },
        {
            id: 25,
            from_lvl_type: '2A',
            type: '5',
            name: 'COLL06',
            expanded: false,
            items: []
        },
        {
            id: 26,
            from_lvl_type: '2A',
            type: '5',
            name: 'COLL42',
            expanded: false,
            items: []
        },
        {
            id: 27,
            from_lvl_type: '2A',
            type: '5',
            name: 'COLL10',
            expanded: false,
            items: []
        },
        {
            id: 28,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD12',
            expanded: false,
            items: []
        },
        {
            id: 29,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD07',
            expanded: false,
            items: []
        },
        {
            id: 30,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD06',
            expanded: false,
            items: []
        },
        {
            id: 31,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD14',
            expanded: false,
            items: []
        },
        {
            id: 32,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD10',
            expanded: false,
            items: []
        },
        {
            id: 33,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD08',
            expanded: false,
            items: []
        },
        {
            id: 34,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD11',
            expanded: false,
            items: []
        },
        {
            id: 35,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD15',
            expanded: false,
            items: []
        },
        {
            id: 36,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD13',
            expanded: false,
            items: []
        },
        {
            id: 37,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD09',
            expanded: false,
            items: []
        },
        {
            id: 38,
            from_lvl_type: '2F',
            type: '1',
            name: 'FIELD16',
            expanded: false,
            items: []
        },
        {
            id: 39,
            from_lvl_type: '2F',
            type: '4',
            name: 'FIELD03',
            expanded: false,
            items: []
        }]
}