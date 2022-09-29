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
        Math.floor(2*nums[4].x + 0.9*nums[4].y + 0.8*nums[4].z),
        Math.floor(2*nums[5].x + 0.9*nums[5].y + 0.8*nums[5].z),
        Math.floor(2*nums[6].x + 0.9*nums[6].y + 0.8*nums[6].z),
        Math.floor(2*nums[7].x + 0.9*nums[7].y + 0.8*nums[7].z),
        Math.floor(2*nums[8].x + 0.9*nums[8].y + 0.8*nums[8].z),
        Math.floor(2*nums[9].x + 0.9*nums[9].y + 0.8*nums[9].z),
        Math.floor(2*nums[10].x + 0.9*nums[10].y + 0.8*nums[10].z),
        Math.floor(2*nums[11].x + 0.9*nums[11].y + 0.8*nums[11].z),
        Math.floor(2*nums[12].x + 0.9*nums[12].y + 0.8*nums[12].z),
        Math.floor(2*nums[13].x + 0.9*nums[13].y + 0.8*nums[13].z),
        Math.floor(2*nums[14].x + 0.9*nums[14].y + 0.8*nums[14].z)
      ]
}

export function generateCorrectData(nums) {
    return [
        Math.floor(1.8*nums[0].x + nums[0].y + 0.7*nums[0].z),
        Math.floor(1.8*nums[1].x + nums[1].y + 0.7*nums[1].z),
        Math.floor(1.8*nums[2].x + nums[2].y + 0.7*nums[2].z),
        Math.floor(1.8*nums[3].x + nums[3].y + 0.7*nums[3].z),
        Math.floor(1.8*nums[4].x + nums[4].y + 0.7*nums[4].z),
        Math.floor(1.8*nums[5].x + nums[5].y + 0.7*nums[5].z),
        Math.floor(1.8*nums[6].x + nums[6].y + 0.7*nums[6].z),
        Math.floor(1.8*nums[7].x + nums[7].y + 0.7*nums[7].z),
        Math.floor(1.8*nums[8].x + nums[8].y + 0.7*nums[8].z),
        Math.floor(1.8*nums[9].x + nums[9].y + 0.7*nums[9].z),
        Math.floor(1.8*nums[10].x + nums[10].y + 0.7*nums[10].z),
        Math.floor(1.8*nums[11].x + nums[11].y + 0.7*nums[11].z),
        Math.floor(1.8*nums[12].x + nums[12].y + 0.7*nums[12].z),
        Math.floor(1.8*nums[13].x + nums[13].y + 0.7*nums[13].z),
        Math.floor(1.8*nums[14].x + nums[14].y + 0.7*nums[14].z)
      ]
}