export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };
  
  export const convertMoney = money => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    });
    return formatter.format(money);
  };

  export const NETFLIX_APP_LOGGEDIN = "NETFLIX_APP_LOGGEDIN";

  export const renderLogin = () => {
    const flag = !!localStorage.getItem(NETFLIX_APP_LOGGEDIN);
    console.log('flag', flag);
    return flag;
  }

  export const calcVote = (rate) => {
    const fakeArray1 = [];
    const fakeArray2 = [];
    const vote = Math.round(rate/2);
    const reste = 5 - vote;
    for(let i = 0; i < vote; i++) {
        fakeArray1.push("1");
    }
    if(reste !== 0) {
        for(let i = 0; i < reste; i++) {
            fakeArray2.push('1');
        }
    }

    return [fakeArray1, fakeArray2];
}