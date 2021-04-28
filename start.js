const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];


const userObject = str => {
    const data = str.split(",");
    for (let i = 0; i < data.length; i++) {
        if (!data[i]) {
            data[i] = "Unknown";
        }
        if (i === data.length - 1) {
            const departments = data[data.length - 1].split("|");
            data[data.length - 1] = departments;
        }
    }
    return {
        id: data[0],
        fullname: data[1],
        birthYear: data[2],
        departments: data[3],
    };
};

const userFactory = arr => {
    const users = [];
    for (let i = 0; i < arr.length; i++) {
        users.push(userObject(arr[i]));
    }
    return users;
};

console.log(userFactory(userDataDump));