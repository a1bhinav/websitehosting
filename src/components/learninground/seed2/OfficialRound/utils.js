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
      ]
}

export function generateModelData(nums) {
    return [
        Math.floor(0.3*nums[0].x + 0.3*nums[0].y + 0.3*nums[0].z - (Math.random() * 10)-7),
        Math.floor(0.3*nums[1].x + 0.3*nums[1].y + 0.3*nums[1].z - (Math.random() * 10)-7),
        Math.floor(0.3*nums[2].x + 0.3*nums[2].y + 0.3*nums[2].z - (Math.random() * 10)-7),
        Math.floor(0.3*nums[3].x + 0.3*nums[3].y + 0.3*nums[3].z - (Math.random() * 10)-7),
        Math.floor(0.3*nums[4].x + 0.3*nums[4].y + 0.3*nums[4].z - (Math.random() * 10)-7)
      ]
}

export function generateCorrectData(nums) {
    return [
        Math.floor(0.3*nums[0].x + 0.3*nums[0].y + 0.3*nums[0].z + (Math.random() * 10)-5),
        Math.floor(0.3*nums[1].x + 0.3*nums[1].y + 0.3*nums[1].z + (Math.random() * 10)-5),
        Math.floor(0.3*nums[2].x + 0.3*nums[2].y + 0.3*nums[2].z + (Math.random() * 10)-5),
        Math.floor(0.3*nums[3].x + 0.3*nums[3].y + 0.3*nums[3].z + (Math.random() * 10)-5),
        Math.floor(0.3*nums[4].x + 0.3*nums[4].y + 0.3*nums[4].z + (Math.random() * 10)-5)
      ]
}