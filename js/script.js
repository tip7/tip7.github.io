// welcome
swal(
    'Welcome',
    'Thanks and Welcome To P7 Website',
    'info'
  );
//cath element button
const tombol = document.querySelector('#button-addon2');
//add random method
tombol.addEventListener('click', function(){
    var random = Math.floor(Math.random()*30);
    //cv ke str
    if( random <= 1){
        random = "1. Akmal Fauzan";
    }else if ( random == 2){
        random = "2. Hendry Riyanto";
    }else if ( random == 3){
        random = "3. Muhamad Firly Ramadan";
    }else if ( random == 4){
        random = "4. Khusnul Ma'rif";
    }else if ( random == 5){
        random = "5. Dina Siti Nurrochmah";
    }else if ( random == 6){
        random = "6. Muhammad Rivaldi ";
    }else if ( random == 7){
        random = "7. Irma Agustina ";
    }else if ( random == 8){
        random = "8. Adhivia Julian";
    }else if ( random == 9){
        random = "9. Dwi Sartika";
    }else if ( random == 10){
        random = "10. Siti Nikmat";
    }else if ( random == 11){
        random = "11. Muhammad Fauzan Abdillah";
    }else if ( random == 12){
        random = "12. Maulana Ramdana";
    }else if ( random == 13){
        random = "13. Nunung Sinta Nuriyah";
    }else if ( random == 14){
        random = "14. Yusuf Shidiq";
    }else if ( random == 15){
        random = "15. Mochamad Fajar Hidayat";
    }else if ( random == 16){
        random = "16. Dini Andriyani";
    }else if ( random == 17){
        random = "17. Nuraeni";
    }else if ( random == 18){
        random = "18. Qonita Salsabilah Ainal A.";
    }else if ( random == 19){
        random = "19. Yasni Optarina";
    }else if ( random == 20){
        random = "20. Febri Abdi Annur D";
    }else if ( random == 21){
        random = "21. Ade Valentino";
    }else if ( random == 22){
        random = "22. Supriyatno";
    }else if ( random == 23){
        random = "23. Sri Mulyani";
    }else if ( random == 24){
        random = "48. Rizal Rayyan Firdaus";
    }else if ( random == 25){
        random = "25. Mukhlis Illahudin";
    }else if ( random == 26){
        random = "26. Unknown";
    }else if ( random == 27){
        random = "27. Unknown";
    }else if ( random == 28){
        random = "28. Unknown";
    }else if ( random == 29){
        random = "29. Unknown";
    }else if ( random == 30){
        random = "30. Unknown";
    }
    const generate = document.querySelector(".form-control").value = "Generate...";
    const val = document.querySelector('#hasil').innerHTML = "Wait..";
    var al = document.querySelector('.alert');
    function generatee(){
        setTimeout(function(){ 
            document.querySelector('.form-control').value = random;
            document.querySelector('#hasil').innerHTML = random;
            swal(
                'Generate Success!',
                'Click Generate For More Result',
                'success'
              );
        },1000);
    }
    
    //cath el
    generatee();
    
    
    
    



});
