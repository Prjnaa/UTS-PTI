  const maxhealth = 100;
  const maxenergy = 100;
  const maxhunger = 100;
  const maxhappy = 100;

  let health;
  let energy;
  let hunger;
  let happy;


  // health
  $(document).ready(function(){
    let savedHealthPosition;
    let savedHealth;
    $(window).on('load', function(){
      savedHealthPosition = localStorage.getItem('healthPosition');
      savedHealth = localStorage.getItem('currhealth');
      if (savedHealth) {
        health = savedHealth;
      } else {
        health = maxhealth;
      }
      $('#health_filler').css('top', savedHealthPosition ?? '0px');
    });
  
    setInterval(function(){
      if(health > 0){
        health -= 25;
        $('#health_filler').animate({top: '+=12.5px'}, 1000);
        localStorage.setItem('healthPosition', $('#health_filler').css('top'));
        localStorage.setItem('currhealth', health);
      }
      console.log("health:", health);
    }, 1296000);// 24 jam in game
  
    $('#reset-button').click(function(){
      health = maxhealth;
      $('#health_filler').css('top', '0px');
    }); 
  
    $(window).on('unload', function(){
      localStorage.setItem('healthPosition', $('#health_filler').css('top'));
      localStorage.setItem('currhealth', health);
    });  
  });
  

  // energy
  $(document).ready(function(){
    let savedEnergyPosition;
    let savedEnergy;
    $(window).on('load', function(){
      savedEnergyPosition = localStorage.getItem('energyPosition');
      savedEnergy = localStorage.getItem('currenergy');
      if (savedEnergy) {
        energy = savedEnergy;
      } else {
        energy = maxenergy;
      }
      $('#energy_filler').css('top', savedEnergyPosition ?? '0px');
    });
  
    setInterval(function(){
      if(energy > 0){
        energy -= 10;
        $('#energy_filler').animate({top: '+=5px'}, 1000);
        localStorage.setItem('energyPosition', $('#energy_filler').css('top'));
        localStorage.setItem('currenergy', energy);
      }
      console.log("energy:", energy);
    }, 54000);//1 jam in game -10 energy
  
    $('#reset-button').click(function(){
      energy = maxenergy;
      $('#energy_filler').css('top', '0px');
    }); 
  
    $(window).on('unload', function(){
      localStorage.setItem('energyPosition', $('#energy_filler').css('top'));
      localStorage.setItem('currenergy', energy);
    });  
  });


  //hunger 
  $(document).ready(function(){
    let savedHungerPosition;
    let savedHunger;
    $(window).on('load', function(){
      savedHungerPosition = localStorage.getItem('hungerPosition');
      savedHunger = localStorage.getItem('currhunger');
      if (savedHunger) {
        hunger = savedHunger;
      } else {
        hunger = maxhunger;
      }
      $('#hunger_filler').css('top', savedHungerPosition ?? '0px');
    });
  
    setInterval(function(){
      if(hunger > 0){
        hunger -= 20;
        $('#hunger_filler').animate({top: '+=10px'}, 1000);
        localStorage.setItem('hungerPosition', $('#hunger_filler').css('top'));
        localStorage.setItem('currhunger', hunger);
      }
      console.log("hunger:", hunger);
    }, 216000);//4 jam in game -20 hunger 
  
    $('#reset-button').click(function(){
      hunger = maxhunger;
      $('#hunger_filler').css('top', '0px');
    }); 
  
    $(window).on('unload', function(){
      localStorage.setItem('hungerPosition', $('#hunger_filler').css('top'));
      localStorage.setItem('currhunger', hunger);
    });  
  });


  // happy
  $(document).ready(function(){
    let savedHappyPosition;
    let savedHappy;
    $(window).on('load', function(){
      savedHappyPosition = localStorage.getItem('happyPosition');
      savedHappy = localStorage.getItem('currhappy');
      if (savedHappy) {
        happy = savedHappy;
      } else {
        happy = maxhappy;
      }
      $('#happy_filler').css('top', savedHappyPosition ?? '0px');
    });
  
    setInterval(function(){
      if(happy > 0){
        happy -= 5;
        $('#happy_filler').animate({top: '+=2.5px'}, 1000);
        localStorage.setItem('happyPosition', $('#happy_filler').css('top'));
        localStorage.setItem('currhappy', happy);
      }
      console.log("happy:", happy);
    }, 108000); //2 jam in game -5 happy
  
    $('#reset-button').click(function(){
      happy = maxhappy;
      $('#happy_filler').css('top', '0px');
    }); 
  
    $(window).on('unload', function(){
      localStorage.setItem('happyPosition', $('#happy_filler').css('top'));
      localStorage.setItem('currhappy', happy);
    });  
  });
