document.addEventListener('DOMContentLoaded', function() {

  const dropdowns = document.querySelectorAll('.dropdown');
  const submitBtn = document.querySelector('.sub-btn');
  const downloadBtn = document.getElementById('downloadBtn');





  let sleepData = {
    "0-11_months": 
    {
        "14-18_hours": 0,
        "11-14_hours": 0,
        "10-13_hours": 0,
        "9-11_hours": 0,
        "8-10_hours": 0,
        "7-8_hours": 0
    },
    "1-2_years": 
    {
        "14-18_hours": 0,
        "11-14_hours": 0,
        "10-13_hours": 0,
        "9-11_hours": 0,
        "8-10_hours": 0,
        "7-8_hours": 0
    },
    
    
    "2-5_years": 
    {
      "14-18_hours": 0,
      "11-14_hours": 0,
      "10-13_hours": 0,
      "9-11_hours": 0,
      "8-10_hours": 0,
      "7-8_hours": 0
  },


  "6-13_years": 
  {
    "14-18_hours": 0,
    "11-14_hours": 0,
    "10-13_hours": 0,
    "9-11_hours": 0,
    "8-10_hours": 0,
    "7-8_hours": 0
},

"14-17_years": 
{
  "14-18_hours": 0,
  "11-14_hours": 0,
  "10-13_hours": 0,
  "9-11_hours": 0,
  "8-10_hours": 0,
  "7-8_hours": 0
},


"18+_years": 
{
  "14-18_hours": 0,
  "11-14_hours": 0,
  "10-13_hours": 0,
  "9-11_hours": 0,
  "8-10_hours": 0,
  "7-8_hours": 0
},

};



  
  dropdowns.forEach(dropdown =>
  {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');
  
  select.addEventListener('click', () =>
  {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
  }
  );
  
  options.forEach(option =>
      {
          option.addEventListener('click', () =>
          {
              selected.innerText = option.innerText;
  
              select.classList.remove('select-clicked');
  
              caret.classList.remove('caret-rotate');
  
              menu.classList.remove('menu-open');
  
              options.forEach(option =>
            {
             option.classList.remove('active');
            });
  
            option.classList.add('active');
  



            if (ageGroup in sleepData && sleepTime in sleepData[ageGroup]) {
              sleepData[ageGroup][sleepTime]++;
              updateChart();

            }
  
              });
          });
      });
  
  
      submitBtn.addEventListener('click', () => {
        const ageGroup = document.querySelector('.selected[data-age-group]').innerText;
        const sleepTime = document.querySelector('.selected[data-sleep-time]').innerText;

        

        if (ageGroup === "Age 0 - 11 months") 
        {
          if (sleepTime === "14 - 18 hours") 
          {
              const targetDiv = document.querySelector('.AG1-ES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 

          else if (sleepTime === "Over 18 hours") 
          {
              const targetDiv = document.querySelector('.TMS1-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 

          else 
          {
              const targetDiv = document.querySelector('.AG1-NES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          }
      } 
      
      

      
      
      
      else if (ageGroup === "Age 1 - 2") 
      {
          if (sleepTime === "11 - 14 hours") 
          {
              const targetDiv = document.querySelector('.AG2-ES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });

          } 
          
          else if (sleepTime === "Over 18 hours" || sleepTime === "14 - 18 hours") 
          {
              const targetDiv = document.querySelector('.TMS2-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else 
          {
              const targetDiv = document.querySelector('.AG2-NES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          }

      } 







      else if (ageGroup === "Age 3 - 5") 
      {
          if (sleepTime === "10 - 13 hours") 
          {
              const targetDiv = document.querySelector('.AG3-ES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else if (sleepTime === "Over 18 hours" || sleepTime === "14 - 18 hours" || sleepTime === "11 - 14 hours") 
          {
              const targetDiv = document.querySelector('.TMS3-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else 
          {
              const targetDiv = document.querySelector('.AG3-NES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          }

      } 
      
      
      
      
      
      
      
      
      
      
      else if (ageGroup === "Age 6 - 13") 
      {
          if (sleepTime === "9 - 11 hours") 
          {
              const targetDiv = document.querySelector('.AG4-ES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else if (sleepTime === "Over 18 hours" || sleepTime === "14 - 18 hours" || sleepTime === "11 - 14 hours" || sleepTime === "10 - 13 hours") 
          {
              const targetDiv = document.querySelector('.TMS4-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else 
          {
              const targetDiv = document.querySelector('.AG4-NES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          }

      } 
      
      
      
      
      
      
      
      else if (ageGroup === "Age 14 - 17") 
      {
          if (sleepTime === "8 - 10 hours") 
          {
              const targetDiv = document.querySelector('.AG5-ES-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else if (sleepTime === "Over 18 hours" || sleepTime === "14 - 18 hours" || sleepTime === "11 - 14 hours" || sleepTime === "10 - 13 hours" || sleepTime === "9 - 11 hours") 
          {
              const targetDiv = document.querySelector('.TMS5-Title');

              targetDiv.scrollIntoView({ behavior: 'smooth' });
          } 
          
          else {
              const targetDiv = document.querySelector('.AG5-NES-Title');
              targetDiv.scrollIntoView({ behavior: 'smooth' });
          }
      }



      else if (ageGroup === "Age 18+") 
      {
        if (sleepTime === "7 - 8 hours") 
        {
            const targetDiv = document.querySelector('.AG6-ES-Title');

            targetDiv.scrollIntoView({ behavior: 'smooth' });
        } 
        
        else if (sleepTime === "Over 18 hours" || sleepTime === "14 - 18 hours" || sleepTime === "11 - 14 hours" || sleepTime === "10 - 13 hours" || sleepTime === "9 - 11 hours" || sleepTime === "8 - 10 hours") 
        {
            const targetDiv = document.querySelector('.TMS6-Title');

            targetDiv.scrollIntoView({ behavior: 'smooth' });
            
        } 
        
        else 
        {
            const targetDiv = document.querySelector('.AG6-NES-Title');

            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }


    
});


  });

