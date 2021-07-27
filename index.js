const btn = document.getElementById('btn')
var sum = 0
const unitId = document.getElementById('unit')
unitId.style.padding = '5px'
const groceryId = document.getElementById('grocery')
groceryId.style.padding = '5px'
const unitPriceId = document.getElementById('unit-price')
unitPriceId.style.padding = '5px'
btn.addEventListener('click',showData)
var grandTotal = document.getElementById('grand-total')
var mystorage = window.localStorage
var count = -1
var arr = []

function showData(e)
{
    //console.log(e)
    e.preventDefault()
    //document.getElementById("container2").style.resize = "both";
    const unit = document.getElementById('unit').value
    const grocery = document.getElementById('grocery').value
    const unitPrice = document.getElementById('unit-price').value
    const itemList = document.createElement('div')
    itemList.className = 'item-part'

    var groceryItem = document.createElement('div')
    //groceryItem.id = 'groceryEdit'
    var UnitItem = document.createElement('div')
    var perUnitPrice = document.createElement('div')
    var totalPrice = document.createElement('div')
    var deleteButton = document.createElement('button')
    deleteButton.className = 'btn delete'
    deleteButton.innerHTML = 'X'
    deleteButton.style.backgroundColor = 'red'
    var editButton = document.createElement('button')
    editButton.className = 'btn edit'
    editButton.innerHTML = 'Edit'
    editButton.style.backgroundColor = 'green'
    //<i class=""></i>


    groceryItem.textContent = grocery
    UnitItem.textContent  = unit
    perUnitPrice.textContent = unitPrice
    totalPrice.textContent = unit*unitPrice

    var obj = {
        groceryName : grocery,
        totalUnits : unit,
        perUnitPrice : unitPrice,
        totalPrice : unit*unitPrice
    }

    arr.push(obj)

    mystorage.setItem(++count,JSON.stringify(arr[count]))

    itemList.appendChild(editButton)
    itemList.appendChild(groceryItem)
    itemList.appendChild(UnitItem)
    itemList.appendChild(perUnitPrice)
    itemList.appendChild(totalPrice)
    itemList.appendChild(deleteButton)
    var brak = ` `
    itemList.append(brak)
    
   
    const itemPart = document.getElementById('item-part')
    //const buttonPart = document.getElementById('button-part')
   // itemPart.appendChild(deleteButton)
    itemPart.appendChild(itemList)
    
    //itemPart.appendChild(deleteIcon)
    
    //var totalClassCount = document.getElementsByClassName('item-part')
    //console.log(totalClassCount)
    
    // var countOfTotalClass = []
    // for(var i=0;i<totalClassCount.length;i++)
    // {
    //     countOfTotalClass.push(totalClassCount[i])
    // }
    // //countOfTotalClass.forEach((item) => {
    // // sum += parseInt(item.lastElementChild.textContent)
    // //})
    sum += unit*unitPrice

    //console.log(sum)
    grandTotal.textContent = sum
    //console.log(grandTotal)

    deleteButton.addEventListener('click',function(e){
        if(confirm("Do you really want to delete item?"))
        {
            //var id = mystorage.getItem()
            sum -= parseInt(itemList.children[4].textContent)
            //sum -= parseInt(itemList.children[3].textContent)
            itemPart.removeChild(itemList)
            //console.log(e.target.textContent)
            //itemList.removeChild(deleteButton)
            // countOfTotalClass.forEach((item) => {
            //     sum -= parseInt(item.textContent)
            // })
            // console.log(sum)
            grandTotal.textContent = sum
            //console.log(sum)
        }
    })
    var temp = 0
    editButton.addEventListener('click',function(e){
            // var unitBool = document.getElementById('unit').contentEditable = true
            // var groceryBool = document.getElementById('grocery').contentEditable = true
            // var unitPriceBool = document.getElementById('unit-price').contentEditable = true
            //console.log(groceryBool)
        if(e.target.textContent == 'Edit')
        {
            itemList.children[1].contentEditable = true
            itemList.children[2].contentEditable = true
            itemList.children[3].contentEditable = true
            //itemList.children[4].contentEditable = true
            itemList.children[1].focus()
            temp = parseInt(itemList.children[4].textContent)
            e.target.textContent = 'Save'
            //console.log(temp)
        }
        else
        {
            itemList.children[1].contentEditable = false
            itemList.children[2].contentEditable = false
            itemList.children[3].contentEditable = false
            itemList.children[4].textContent = itemList.children[3].textContent*itemList.children[2].textContent
            sum += (parseInt(itemList.children[4].textContent) - parseInt(temp))
            console.log(temp)
            grandTotal.textContent = sum
            e.target.textContent = 'Edit'
        }
        
            // if(groceryBool == true)
            // {
            //     groceryItem.setAttribute('contentEditable','true')
            //     document.getElementById('grocery').id = 'groceryEdit'
            //     const groceryEdit = document.getElementById('grocery').value
            //     if(groceryEdit == grocery)
            //     {
            //         // console.log(grocery)
            //         // console.log(groceryEdit)
            //     }
                
            // }
            // if(unitBool == true)
            // {
            //     //console.log(unitBool)
            //     UnitItem.setAttribute('contentEditable','true')
            //     //console.log(UnitItem.contentEditable)
            //     if(UnitItem.contentEditable == 'true')
            //     {
            //         editButton.className = 'btn'
            //         editButton.innerHTML = 'Save'
            //         //var unit = document.getElementById('unit').value
            //         // document.getElementById('unit').id = 'newUnit'

            //         //console.log(unit)

            //         //var newUnit = itemList.children[2].textContent
            //         // if(unit != newUnit)
            //         // {
                        
            //         // }
            //         UnitItem.textContent  = newUnit
            //         var newtotalPrice = newUnit*unitPrice
            //         //console.log(newtotalPrice)
            //         totalPrice.textContent = newtotalPrice
            //         var totalPriceNew = totalPrice.textContent
            //         var grandTotalNew = grandTotal.textContent
            //         //console.log(totalPrice)
            //         //console.log(grandTotal)
            //         if(totalPriceNew < grandTotalNew)
            //         {
            //             grandTotal.textContent = totalPriceNew - grandTotalNew
            //         }
            //         else
            //         {
            //             grandTotal.textContent = newtotalPrice
            //         }
            //         editButton.className = 'btn edit'
            //         editButton.innerHTML = 'E'
            //         UnitItem.setAttribute('contentEditable','false')
                    
                    
            //         //console.log(UnitItem)

            //         //if(unit == )
            //         //var saveButton = document.createElement('button')
            //     }
            //     else
            //     {
            //         editButton.className = 'btn edit'
            //         editButton.innerHTML = 'E'
            //     }
                

            // }
            // if(unitPriceBool == true)
            // {
            //     const unitPrice = document.getElementById('unit-price').value
            //     perUnitPrice.textContent = unitPrice
            // }


    })


}

// function showData()
// {
//     //const unit = document.getElementById('unit').value
//     const grocery = document.getElementById('grocery').value
//     // console.log(unit)
    
//     if(grocery.toLowerCase() == 'tomatoes')
//     {
//         var per_unit_tomatoes = 25
//         const unit = document.getElementById('unit').value
//         // var row = document.getElementById('rowd')
//         // var htm = `<div class="header-part">
//         // <h4>${grocery}</h4>
//         // <h4>${unit}</h4>
//         // <h4>${per_unit_tomatoes}</h4>
//         // <h4>${unit*per_unit_tomatoes}</h4>
//         // </div>`
//         // row.appendChild(htm)
//         var groceryItem = document.getElementById('grocery-item1')
//         var unitItem = document.getElementById('unit-item1')
//         var perUnitItem = document.getElementById('per-unit-item1')
//         var totalPrice = document.getElementById('total-price1')
//         groceryItem.textContent = grocery
//         unitItem.textContent = unit
//         perUnitItem.textContent = per_unit_tomatoes
//         totalPrice.textContent = unit*per_unit_tomatoes
//     }
//     if(grocery.toLowerCase() == 'potatoes')
//     {
//         var per_unit_potatoes = 20
//         const unit = document.getElementById('unit').value
//         var groceryItem = document.getElementById('grocery-item2')
//         var unitItem = document.getElementById('unit-item2')
//         var perUnitItem = document.getElementById('per-unit-item2')
//         var totalPrice = document.getElementById('total-price2')
//         groceryItem.textContent = grocery
//         unitItem.textContent = unit
//         perUnitItem.textContent = per_unit_potatoes
//         totalPrice.textContent = unit*per_unit_potatoes
//     }
//     if(grocery.toLowerCase() == 'ladyfinger')
//     {
//         var per_unit_ladyfinger = 25
       
//         const unit = document.getElementById('unit').value
        
//         var groceryItem = document.getElementById('grocery-item3')
//         var unitItem = document.getElementById('unit-item3')
//         var perUnitItem = document.getElementById('per-unit-item3')
//         var totalPrice = document.getElementById('total-price3')
//         groceryItem.textContent = grocery
//         unitItem.textContent = unit
//         perUnitItem.textContent = per_unit_ladyfinger
//         totalPrice.textContent = unit*per_unit_ladyfinger
//     }


//     if(grocery.toLowerCase() == 'bringle')
//     {
//         var per_unit_bringle = 20
//         const unit = document.getElementById('unit').value

//         var groceryItem = document.getElementById('grocery-item4')
//         var unitItem = document.getElementById('unit-item4')
//         var perUnitItem = document.getElementById('per-unit-item4')
//         var totalPrice = document.getElementById('total-price4')
//         groceryItem.textContent = grocery
//         unitItem.textContent = unit
//         perUnitItem.textContent = per_unit_bringle
//         totalPrice.textContent = unit*per_unit_bringle

//     }
// }