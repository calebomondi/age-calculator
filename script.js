function calcAge(){
    var bDate = document.getElementById("bD").value;
    var bMonth = document.getElementById("bM").value;
    var bYear = document.getElementById("bY").value;
    const label = document.querySelectorAll('.labels');
    const error = document.querySelectorAll('.error');

    var BDval = parseInt(bDate);
    var BMval = parseInt(bMonth);
    var BYval = parseInt(bYear);

    var today = new Date();
    var CDate = today.getDate();
    var cMonth = today.getMonth() + 1;
    var cYear = today.getFullYear();

    var years = cYear - BYval;
    var months = cMonth - BMval;
    var days = CDate - BDval;

    if(months < 0 || (months === 0 || days < 0)){
        years--;
        months += 12;
        
    }
    if(days < 0){
        var prevMonth = new Date(cYear,cMonth-1,0);
        days += prevMonth.getDate();
        months--;
    }

    if(bDate==='' && bMonth==='' && bYear===''){
        error.forEach((item) => {
            item.style.visibility="visible";
            item.innerHTML="This field is required";
            item.style.fontStyle="italic";
            item.style.marginBottom="-15px";
        });
        
        label.forEach((item) => {
            item.style.color="hsl(0, 100%, 67%)";
            item.style.marginTop="3px";
        });
    }else if((BDval<0 || BDval>31) && (BMval<0 || BMval>12) && (BYval<0 || BYval>cYear)){
        label.forEach((item) => {
            item.style.color="hsl(0, 100%, 67%)";
            item.style.marginTop="3px";
        });
        error.forEach((item) => {
            item.style.visibility="visible";
            item.innerHTML="Enter a valid value";
            item.style.fontStyle="italic";
            item.style.marginBottom="-15px";
        });
    }else{
        label.forEach((item) => {
            item.style.color="hsl(0, 1%, 44%)";
        });
        error.forEach((item) => {
            item.style.visibility="hidden";
        });

        if(BYval > cYear || BYval < 0){
            document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
            document.getElementById("erY").innerHTML="Must be in the past";
            document.getElementById("erY").style.fontStyle="italic";
            document.getElementById("erY").style.visibility="visible";
            years = 0;
            months = 0;
            days = 0;
        }

        if(BMval == 1 || BMval == 3 || BMval == 5 || BMval == 7 || BMval == 8 || BMval == 10 || BMval == 12){
            if(BDval>0 && BDval<=31){
                document.getElementById("dispY").innerHTML = years;
                document.getElementById("dispM").innerHTML = months;
                document.getElementById("dispD").innerHTML = days;
            }else{
                document.getElementById("labelD").style.color="hsl(0, 100%, 67%)";
                document.getElementById("erD").innerHTML="Must be a valid day";
                document.getElementById("erD").style.fontStyle="italic";
                document.getElementById("erD").style.visibility="visible";
            }
        }else if(BMval == 4 || BMval == 6 || BMval == 9 || BMval == 11){
            if(BDval>0 && BDval<=30){
                document.getElementById("dispY").innerHTML = years;
                document.getElementById("dispM").innerHTML = months;
                document.getElementById("dispD").innerHTML = days;
            }else{
                document.getElementById("labelD").style.color="hsl(0, 100%, 67%)";
                document.getElementById("erD").innerHTML="Must be a valid day";
                document.getElementById("erD").style.fontStyle="italic";
                document.getElementById("erD").style.visibility="visible";
            }
        }else if(BMval == 2){
            if(BDval>0 && BDval<=29){
                document.getElementById("dispY").innerHTML = years;
                document.getElementById("dispM").innerHTML = months;
                document.getElementById("dispD").innerHTML = days;
            }else{
                document.getElementById("labelD").style.color="hsl(0, 100%, 67%)";
                document.getElementById("erD").innerHTML="Must be a valid day";
                document.getElementById("erD").style.fontStyle="italic";
                document.getElementById("erD").style.visibility="visible";
            }
        }else{
            document.getElementById("erM").innerHTML="Must be a valid month";
            document.getElementById("erM").style.fontStyle="italic";
            document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
            document.getElementById("erM").style.visibility="visible";
        }
        
    }
}

document.getElementById("btnClick").addEventListener("click",calcAge);
