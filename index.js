function superbowlWin(record) {
    let winningYear = record.find((record) => record.result ==='W')
    if (winningYear) {
      return winningYear.year;
    }
  }
  superbowlWin(record);