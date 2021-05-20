// console.time();
const table = [
    {
        Date: "Jan 1, 20X3",
        Description: 'Balance forward'
    }, 
    {
        Date: "Jan 2, 20X3",
        Description: 'Collected Receivable', 
        Debit: 10000
    },
    {
        Date: "Jan 3, 20X3",
        Description: 'Cash sale', 
        Debit: 5000,
    }, 
    {
        Date: "Jan 5, 20X3",
        Description: 'Paid rent', 
        Credit: 7000,
    }, 
    {
        Date: "Jan 7, 20X3",
        Description: 'Paid salary', 
        Credit: 3000,
    },
    {
        Date: "Jan 8, 20X3",
        Description: 'Cash sale', 
        Debit: 4000
    },
    {
        Date: "Jan 8, 20X3",
        Description: 'Paid bills', 
        Credit: 2000,
    },
    {
        Date: "Jan 9, 20X3",
        Description: 'Paid tax', 
        Credit: 1000,
    },
    {
        Date: "Jan 9, 20X3",
        Description: 'Collected receivable', 
        Debit: 7000,
    },
];
table.push({Date: "Jan 4, 20X3", Description: 'Collected receivable', 
Debit: 12000});

// console.timeEnd();
// console.count('1');
// console.count('1');
// console.count('1');
// console.count('1');

// console.table(table);

// Sorted In Lexicographical Order
const sortDate = table.sort((f, s) => (f.Date).localeCompare(s.Date));
console.table(sortDate);

const cr = table.filter(val => val.hasOwnProperty('Credit') == true).reduce((total, val) => total + val.Credit, 0);

const db = table.filter(val => val.hasOwnProperty('Debit') == true).reduce((total, val) => total + val.Debit, 0);

const summation = [{Credit: cr, Debit: db, Total: cr + db}];

console.table(summation);

const debitG5000 = table.filter(val => (val.hasOwnProperty('Debit') && val.Debit > 5000)).reduce((total, val) => {
    total.push(val.Debit);
    return total;
}, []);
// console.table(table);
console.table(debitG5000);

const creditL3000 = table.filter(val => (val.hasOwnProperty('Credit') && val.Credit < 3000)).reduce((total, val) => {
    total.push(val.Credit);
    return total;
}, []);

console.table(creditL3000);