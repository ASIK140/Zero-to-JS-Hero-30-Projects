const from_currency=document.getElementById("from-currency");
const to_currency=document.getElementById("to-currency");
const amountField=document.getElementById("amount")
const converte_btn=document.getElementById("convert-btn")
const result=document.getElementById("result")
const swap_btn=document.getElementById("swap-btn")
async function converte(){
    const to=to_currency.value
    const from=from_currency.value
    try {
        const res=await fetch(`https://v6.exchangerate-api.com/v6/e000552895c099739d6b84e8/latest/${from}`)
        const data=await res.json()
        const conversion_rates=data.conversion_rates
        const rate=conversion_rates[to]
    
        const amount=amountField.value
        const amount_afrer=amount*rate
        result.innerHTML=`${amount} ${from} = <span>${amount_afrer}</span> ${to}`
    } catch (error) {
        console.log(error);
        alert(error)
    }
}   

function swap(){
    const temp=from_currency.value;
    from_currency.value=to_currency.value
    to_currency.value=temp
    
}
converte_btn.addEventListener("click",converte)
swap_btn.addEventListener("click",()=>{
    swap()
    converte()
})