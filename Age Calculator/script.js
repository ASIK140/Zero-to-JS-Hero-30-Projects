function calculateAge() {
    const birthdate_value=document.getElementById("birthdate").value
    const birthdate = new Date(birthdate_value);
    const result = document.getElementById("result");
    const today = new Date()
    if (!birthdate_value || birthdate > today) {
        document.getElementById("result").textContent = "Please enter a valid birthdate.";

        return;
    }
    else {
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let day = today.getDate() - birthdate.getDate();
        if (day < 0) {
            months--;
            day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
       document.getElementById("result").textContent = `${years}years ${months}month ${day}day`
    }
}
