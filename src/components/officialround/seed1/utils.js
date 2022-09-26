export function generateNums() {
    return [
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 40) + 30,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 40) + 30,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 40) + 30,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 40) + 30,
          z: Math.floor(Math.random() * 10) + 1,
        },
        {
          x: Math.floor(Math.random() * 10) + 1,
          y: Math.floor(Math.random() * 40) + 30,
          z: Math.floor(Math.random() * 10) + 1,
        },
      ]
}

export function generateModelData(nums) {
    return [
        Math.floor(2*nums[0].x + 0.9*nums[0].y + 0.8*nums[0].z),
        Math.floor(2*nums[1].x + 0.9*nums[1].y + 0.8*nums[1].z),
        Math.floor(2*nums[2].x + 0.9*nums[2].y + 0.8*nums[2].z),
        Math.floor(2*nums[3].x + 0.9*nums[3].y + 0.8*nums[3].z),
        Math.floor(2*nums[4].x + 0.9*nums[4].y + 0.8*nums[4].z)
      ]
}

export function generateCorrectData(nums) {
    return [
        Math.floor(1.8*nums[0].x + nums[0].y + 0.7*nums[0].z),
        Math.floor(1.8*nums[1].x + nums[1].y + 0.7*nums[1].z),
        Math.floor(1.8*nums[2].x + nums[2].y + 0.7*nums[2].z),
        Math.floor(1.8*nums[3].x + nums[3].y + 0.7*nums[3].z),
        Math.floor(1.8*nums[4].x + nums[4].y + 0.7*nums[4].z)
      ]
}