const getFirstDayOfWeek = (date) => {
  while(date.getDay() !==  1){
    date.setDate(date.getDate() + 1);
  }

  return date.toLocaleDateString('en-CA')
}

const getLastDayOfWeek = (date) => {
  while(date.getDay() !==  0){
    date.setDate(date.getDate() + 1);
  }

  return date.toLocaleDateString('en-CA')
}

export const getWeeksInYear = (year) => {
  let weeks = []
  let firstDayOfYear = new Date(year, 0, 1);
  let lastDayOfYear =new Date(year, 11, 31);
  while(firstDayOfYear <  lastDayOfYear){
    let firstDayOfWeek = getFirstDayOfWeek(firstDayOfYear);
    let lastDayOfWeek = getLastDayOfWeek(firstDayOfYear);
    weeks.push(firstDayOfWeek+ ' to ' + lastDayOfWeek)
  }
  return weeks;
}

export const getSemesterWeeks = (weeks, start, end) => {
  let firstWeek;
  let lastWeek;
  let semesterWeeks = [];
  for(let i in weeks){
    if(weeks[i].includes(start)){
      firstWeek = i;
      continue;
    }
  
    if(weeks[i].includes(end)){
      lastWeek = i;
      break;
    }
  }

  for(let i=firstWeek; i <= lastWeek; i++){
    const value = {
      id: i.toString(),
      week: weeks[i]
    }
    semesterWeeks.push(value);
  }

  return semesterWeeks;
}