function filter (){
    
    document.querySelectorAll('.one_card').forEach(function(obj){
        obj.classList.remove('vis1');
        obj.classList.remove('vis2');
        obj.classList.remove('vis3');
        obj.classList.add('disp');
    });
    
    document.querySelectorAll('.one_card').forEach(function(obj){
        obj.classList.remove('disp');
    });
    
    // сортировка по площади
    document.querySelectorAll('.square_inputs input:checked').forEach(function(obj){
        document.querySelector("."+obj.id).classList.add('vis1');
    });
    
    // сортировка по оснащению
    let tmp = "";
    let tmp_inputs = document.querySelectorAll('.eq_inputs input:checked');
    if (tmp_inputs.length == 5)
    {
        document.querySelectorAll('.one_card').forEach(function(obj){
            obj.classList.add('vis2');
        });
    }
    else
    {
        tmp_inputs.forEach(function(obj){
           tmp+='.'+obj.id;
        });
        document.querySelectorAll(tmp).forEach(function(obj){
           obj.classList.add('vis2');
        });
    }
        
    // по цене
    let min_price = document.getElementById('min_price').value;
    let max_price = document.getElementById('max_price').value;
    
    if (min_price < 100)
    {
        min_price = 100;
        document.getElementById('min_price').value = 100;
    }
    
    if (max_price > 600)
    {
        max_price = 600;
        document.getElementById('max_price').value = 600;
    }
    
    
    
    document.querySelectorAll('.one_card').forEach(function(obj){
        let tmp = +obj.querySelector('.card_price span').textContent;
        if(tmp >= min_price && tmp <= max_price)
            obj.classList.add('vis3');
    });
};

function reset (){
    document.querySelectorAll('.one_card').forEach(function(obj){
        obj.classList.remove('vis1');
        obj.classList.remove('vis2');
        obj.classList.remove('vis3');
        obj.classList.add('disp');
    });
    
    document.querySelectorAll('[type=checkbox]').forEach(function(obj){
        obj.checked = true;
    });
    
    document.querySelectorAll('[type=number]').forEach(function(obj){
        obj.value = "";
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    
    // открытие-закрытие блока сортировки 
    document.getElementById("cur_sort").addEventListener("click", function(){
        this.parentNode.classList.toggle('act');
    }, false);
    
    // открытие-закрытие меню
    document.getElementById("burger").addEventListener("click", function(){
        this.classList.toggle('act');
        document.getElementById("nav").classList.toggle('act');
    }, false);
    
    // открытие фильтра
    document.getElementById("birka").addEventListener("click", function(){
        this.classList.toggle('act');
        document.getElementById("filter_block").classList.toggle('act');
    }, false);
    
    // закрытие фильтра
    document.getElementById("close_filter").addEventListener("click", function(){
        document.getElementById("birka").classList.toggle('act');
        document.getElementById("filter_block").classList.toggle('act');
    }, false);
    
    document.getElementById("filter").addEventListener("click", function(){
        filter();
    }, false);
    
    document.getElementById("reset").addEventListener("click", function(){
        reset();
        document.getElementById("reset").classList.remove("act");
    }, false);
    
    document.querySelectorAll('input').forEach(function(obj){
        obj.addEventListener("change", function(){
            document.getElementById("reset").classList.add("act");
        }, false);
    });
    
});