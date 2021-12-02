const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
        counter.innerHTML = 0;
        
      const updateCounter = () => {
          const targetCount = +counter.getAttribute("data-target");
          const initialCount = Number(counter.innerHTML);

          const incr = targetCount/100;

        if(initialCount<targetCount){
            counter.innerHTML = `${initialCount + incr}`;
        }else{
            counter.innerHTML = targetCount;
        }
        setTimeout(()=>{
            updateCounter();
        },10);
      }
        

        updateCounter();
}); 