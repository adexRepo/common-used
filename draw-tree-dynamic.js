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

function drawTree(arr,level = 3){
    let length = arr.length;
    if(length == 0){
        return;
    }

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

    // sparate by from level type
    let objByLvlType = {};

    // sparate by by type
    let objByType = {};

    // mapping by template kendo treeview
    let arrTreeObj = {};
    for (let index = 1; index < level+1; index++) {
        let levelMap = `level${index}`
        let arrObjByLvl = objByLevel[levelMap];
        let arrObj  = [];
        arrObjByLvl.map((item, index) => {
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
        arrTreeObj[levelMap] = arrObj;
    }

    console.log(arrTreeObj);

}

drawTree(data,3);