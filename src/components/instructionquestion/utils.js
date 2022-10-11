export function generateQ1() {
    return {
        question: "In this task you will",
        options: [
          "make blind estimations on the optimal irrigation amount for 4 different crops",
          "make estimations on the optimal irrigation amount for 4 different crops based on three environmental factors",
          "make estimations on the optimal irrigation amount for 1 crop",
          "program a statistical model",
        ],
        answer: -1,
      }
}

export function generateQ2() {
    return {
        question: "The optimal irrigation amount for each crop type",
        options: [
          "always follows the same process based on three environmental inputs",
          "is determined by a random draw",
          "is based on more than three environmental input variables",
          "changes over the course of this task"
        ],
        answer: -1,
      }
}

export function generateQ3() {
    return {
        question: "During the Learning Rounds you can",
        options: [
          "earn bonus money",
          "not do anything",
          "choose between yourself and the statistical model",
          "learn about the task, the crop types and the statistical model"
        ],
        answer: -1,
      }
}

export function generateQ4() {
    return {
        question: "During the Official Rounds you",
        options: [
          "choose 20 times between your own estimations and the statistical model’s estimations",
          "do not have to make your own estimations",
          "cannot earn any money",
          "make estimations for two of the four crop types"
        ],
        answer: -1,
      }
}