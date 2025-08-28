        let cards = document.querySelectorAll('.cardBtn');
        let rightSideAppend = document.querySelector('.rightSideAppend');
        let calculateTotalPrize = document.getElementById('calculateTotalPrize');
        let totalllll = document.getElementById('totalllll');
        let discount = document.getElementById('discount');
        let cuponInput = document.getElementById('cuponInput')
        let shwoCuponValidation = document.querySelector('.shwoCuponValidation');
        // card function
        let cardFun = (e) => {
            let targetVariable = e.target;
            
           let cardFullDiv = targetVariable.parentElement.parentElement;
           let image = cardFullDiv.children[0].children[0].src;
           let productName = cardFullDiv.children[1].children[1].innerText;
           let productPrize = cardFullDiv.children[1].children[2].children[0].innerText;

           //console.log(cardFullDiv.children[1].children[2].children[0].innerText)

        //    append card
        let createDiv= document.createElement('div')
        createDiv.classList.add("grid" ,"grid-cols-2","mt-2", "justify-between" , "items-center" ,"p-4" , "bg-[#f3f3f3]")
            createDiv.innerHTML = `
                                <img src="${image}" class="w-15" alt="">
                                <div class="">
                                    <p class="font-bold">${productName}</p>
                                    <p class="text-[#979d9e]"><span class="proPrize">${productPrize}</span>TK</p>
                                </div>
                       
            `;
            rightSideAppend.append(createDiv)
            

            //totalPrize function call
            totalPriazeFun()

        }

        //totalPrize function
        let totalPriazeFun = () => {
                
            let allPrizeTag = rightSideAppend.querySelectorAll('.proPrize')
            let sum = 0;
            allPrizeTag.forEach( singlePrize =>{
                let convert = Number(singlePrize.innerText)
                sum += convert;
                //console.log(singlePrize.innerText)
            })
            //calculate
            calculateTotalPrize.innerText = sum;
            let disConvert = Number(discount.innerText);
            totalllll.innerText = sum - disConvert;

        }


        cards.forEach( card => {
            card.addEventListener('click' , cardFun)
        })

document.getElementById('applyCopnBtn').addEventListener('click' , (e) => {
    let applyBtn = e.target;

    if(cuponInput.value !== ""){

        if(applyBtn.classList.contains('cuponApply') == false && cuponInput.value === "SELL200"){
        shwoCuponValidation.innerText = "";
        cuponInput.value = "";
        let cupon = Number(calculateTotalPrize.innerHTML);
        let discountCal = cupon * 0.2 ;
        discount.innerText = Math.round(discountCal) ;
        totalllll.innerText = cupon - Math.round(discountCal);
        applyBtn.classList.add('cuponApply')
        }else{
            shwoCuponValidation.innerText = "invalid cupon"
        }
        

    }
    else{
        shwoCuponValidation.innerText = "Fill cupon code"
    }

})