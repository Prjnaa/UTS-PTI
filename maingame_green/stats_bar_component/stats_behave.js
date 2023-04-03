const maxhealth = 100;
const maxenergy = 100;
const maxhunger = 100;
const maxhappy = 100;

let health;
let energy;
let hunger;
let happy;

// health
$(document).ready(function () {
  let savedHealthPosition;
  let savedHealth;
  $(window).on("load", function () {
    savedHealthPosition = localStorage.getItem("healthPosition");
    savedHealth = localStorage.getItem("currhealth");
    if (savedHealth) {
      health = savedHealth;
    } else {
      health = maxhealth;
    }
    $("#health_filler").css("top", savedHealthPosition ?? "0px");
  });

  $("#reset-button").click(function () {
    health = maxhealth;
    $("#health_filler").css("top", "0px");
  });

  $("#reset-button").click(function () {
    health = maxhealth;
    $("#health_filler").css("top", "0px");
  });

  $("#obat").click(function () {
    health = maxhealth;
    $("#health_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("healthPosition", $("#health_filler").css("top"));
    localStorage.setItem("currhealth", health);
  });
});

// energy
$(document).ready(function () {
  let savedEnergyPosition;
  let savedEnergy;
  $(window).on("load", function () {
    savedEnergyPosition = localStorage.getItem("energyPosition");
    savedEnergy = localStorage.getItem("currenergy");
    if (savedEnergy) {
      energy = savedEnergy;
    } else {
      energy = maxenergy;
    }
    $("#energy_filler").css("top", savedEnergyPosition ?? "0px");
  });

  setInterval(function () {
    if (energy > 0) {
      energy -= 0.5;
      $("#energy_filler").animate({ top: "+=.25px" }, 1000);
      localStorage.setItem("energyPosition", $("#energy_filler").css("top"));
      localStorage.setItem("currenergy", energy);
    }
    if (energy < 0) {
      energy = 0;
    }
    console.log("energy:", energy);
  }, 5000);

  $("#reset-button").click(function () {
    energy = maxenergy;
    $("#energy_filler").css("top", "0px");
  });

  $("#tidur").click(function () {
    energy = maxenergy;
    $("#energy_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("energyPosition", $("#energy_filler").css("top"));
    localStorage.setItem("currenergy", energy);
  });
});


//hunger
$(document).ready(function () {
  let savedHungerPosition;
  let savedHunger;
  $(window).on("load", function () {
    savedHungerPosition = localStorage.getItem("hungerPosition");
    savedHunger = localStorage.getItem("currhunger");
    if (savedHunger) {
      hunger = savedHunger;
    } else {
      hunger = maxhunger;
    }
    $("#hunger_filler").css("top", savedHungerPosition ?? "0px");
  });

  setInterval(function () {
  if (hunger > 0) {
    hunger -= 1.5;
    $("#hunger_filler").animate({ top: "+=.75px" }, 1000);
    localStorage.setItem("hungerPosition", $("#hunger_filler").css("top"));
    localStorage.setItem("currhunger", hunger);
  }
  console.log("hunger:", hunger);
  console.log("health:", health);

  if (hunger === 0 && health > 0) {
    health -= 2;
    $("#health_filler").animate({ top: "+=1px" }, 1000);
    localStorage.setItem("healthPosition", $("#health_filler").css("top"));
    localStorage.setItem("currhealth", health);
  }
}, 5000);

  $("#reset-button").click(function () {
    hunger = maxhunger;
    $("#hunger_filler").css("top", "0px");
  });

  $("#makan").click(function () {
    hunger = maxhunger;
    $("#hunger_filler").animate({ top: "0px" }, 5000);
  });

  $(window).on("unload", function () {
    localStorage.setItem("hungerPosition", $("#hunger_filler").css("top"));
    localStorage.setItem("currhunger", hunger);
  });
});

// happy
$(document).ready(function () {
  let savedHappyPosition;
  let savedHappy;
  $(window).on("load", function () {
    savedHappyPosition = localStorage.getItem("happyPosition");
    savedHappy = localStorage.getItem("currhappy");
    if (savedHappy) {
      happy = savedHappy;
    } else {
      happy = maxhappy;
    }
    $("#happy_filler").css("top", savedHappyPosition ?? "0px");
  });

  setInterval(function () {
    if (happy > 0) {
      happy -= 0.25;
      $("#happy_filler").animate({ top: "+=.175px" }, 1000);
      localStorage.setItem("happyPosition", $("#happy_filler").css("top"));
      localStorage.setItem("currhappy", happy);
    }
    console.log("happy:", happy);
  }, 5000);

  $("#reset-button").click(function () {
    happy = maxhappy;
    $("#happy_filler").css("top", "0px");
  });

  $(window).on("unload", function () {
    localStorage.setItem("happyPosition", $("#happy_filler").css("top"));
    localStorage.setItem("currhappy", happy);
  });
});

$(document).ready(function () {
  var level = 1; // level awal
  var maxLevel = 6; // level maksimum
  var eatCount = 0; // jumlah makan
  var sleepCount = 0; // jumlah tidur

  var eatCount = 0; // jumlah pemencetan tombol makan
  var sleepCount = 0; // jumlah pemencetan tombol tidur

  $("#makan").click(function () {
    eatCount++;
    if (eatCount == 5 && sleepCount == 2) {
      // setelah makan 5 kali dan tidur 2 kali, naik level
      eatCount = 0;
      sleepCount = 0;
      level++;

      updateLevel(); // memperbarui tampilan level
    }
  });

  $("#tidur").click(function () {
    sleepCount++;
    if (eatCount == 5 && sleepCount == 2) {
      // setelah makan 5 kali dan tidur 2 kali, naik level
      eatCount = 0;
      sleepCount = 0;
      level++;
      updateLevel(); // memperbarui tampilan level
    }
  });

  function updateLevel() {
    $("#level_curr").text(level); // memperbarui teks level

    // menghapus kelas full dan half, lalu menambahkan kelas yang sesuai
    $("#level_bar").removeClass("full half").addClass(getLevelClass(level));
  }

  function getLevelClass(level) {
    switch (level) {
      case 1:
      case 4:
        return ""; // kosong
      case 2:
      case 5:
        return "half"; // setengah level
      case 3:
      case 6:
        return "full"; // level penuh
      default:
        return "";
    }
  }
});
