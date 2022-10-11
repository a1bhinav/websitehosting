function getRandom(){
  var num=Math.random();
  if(num < 0.9) return -2;  //probability 0.9
  else return 0;  //probability 0.1
}


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateNums() {
    return [
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 10) + 1,
          z: Math.floor(Math.random() * 10) + 1,
        },
      ]
}

export function generateModelData(nums) {
    return [
      Math.floor(0.05*nums[0].x + 0.05*nums[0].y + 0.9*nums[0].z+ getRandom()),
      Math.floor(0.05*nums[1].x + 0.05*nums[1].y + 0.9*nums[1].z+ getRandom()),
      Math.floor(0.05*nums[2].x + 0.05*nums[2].y + 0.9*nums[2].z+ getRandom()),
      Math.floor(0.05*nums[3].x + 0.05*nums[3].y + 0.9*nums[3].z+ getRandom()),
      Math.floor(0.05*nums[4].x + 0.05*nums[4].y + 0.9*nums[4].z+ getRandom()),
      Math.floor(0.05*nums[5].x + 0.05*nums[5].y + 0.9*nums[5].z+ getRandom()),
      Math.floor(0.05*nums[6].x + 0.05*nums[6].y + 0.9*nums[6].z+ getRandom()),
      Math.floor(0.05*nums[7].x + 0.05*nums[7].y + 0.9*nums[7].z+ getRandom()),
      Math.floor(0.05*nums[8].x + 0.05*nums[8].y + 0.9*nums[8].z+ getRandom()),
      Math.floor(0.05*nums[9].x + 0.05*nums[9].y + 0.9*nums[9].z+ getRandom()),
      Math.floor(0.05*nums[10].x + 0.05*nums[10].y + 0.9*nums[10].z+ getRandom()),
      Math.floor(0.05*nums[11].x + 0.05*nums[11].y + 0.9*nums[11].z+ getRandom()),
      Math.floor(0.05*nums[12].x + 0.05*nums[12].y + 0.9*nums[12].z+ getRandom()),
      Math.floor(0.05*nums[13].x + 0.05*nums[13].y + 0.9*nums[13].z+ getRandom()),
      Math.floor(0.05*nums[14].x + 0.05*nums[14].y + 0.9*nums[14].z+ getRandom())
      ]
}

export function generateCorrectData(nums) {
    return [
        Math.floor(0.05*nums[0].x + 0.05*nums[0].y + 0.9*nums[0].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[1].x + 0.05*nums[1].y + 0.9*nums[1].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[2].x + 0.05*nums[2].y + 0.9*nums[2].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[3].x + 0.05*nums[3].y + 0.9*nums[3].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[4].x + 0.05*nums[4].y + 0.9*nums[4].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[5].x + 0.05*nums[5].y + 0.9*nums[5].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[6].x + 0.05*nums[6].y + 0.9*nums[6].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[7].x + 0.05*nums[7].y + 0.9*nums[7].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[8].x + 0.05*nums[8].y + 0.9*nums[8].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[9].x + 0.05*nums[9].y + 0.9*nums[9].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[10].x + 0.05*nums[10].y + 0.9*nums[10].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[11].x + 0.05*nums[11].y + 0.9*nums[11].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[12].x + 0.05*nums[12].y + 0.9*nums[12].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[13].x + 0.05*nums[13].y + 0.9*nums[13].z+ randomIntFromInterval(1, 4)),
        Math.floor(0.05*nums[14].x + 0.05*nums[14].y + 0.9*nums[14].z+ randomIntFromInterval(1, 4))
      ]
}