let employee: { emp_id: number, emp_name: string, emp_desg: string }[] = [
    { "emp_id": 0, "emp_name": "Saideep", "emp_desg": "Tech Lead" },
    { "emp_id": 1, "emp_name": "Karthik", "emp_desg": "Manager" },
    { "emp_id": 2, "emp_name": "Kiran", "emp_desg": "Senior Systems Engineer" },
    { "emp_id": 3, "emp_name": "Revanth", "emp_desg": "Technology Analyst" },
    { "emp_id": 4, "emp_name": "Ravi", "emp_desg": "Systems Engineer" },
];
console.log('Employee ' + employee[0].emp_name + ' with ID ' + employee[0].emp_id + ' works as a ' + employee[0].emp_desg);
console.log('Employee ' + employee[1].emp_name + ' with ID ' + employee[1].emp_id + ' works as a ' + employee[1].emp_desg);
console.log('Employee ' + employee[2].emp_name + ' with ID ' + employee[2].emp_id + ' works as a ' + employee[2].emp_desg);
console.log('Employee ' + employee[3].emp_name + ' with ID ' + employee[3].emp_id + ' works as a ' + employee[3].emp_desg);
console.log('Employee ' + employee[4].emp_name + ' with ID ' + employee[4].emp_id + ' works as a ' + employee[4].emp_desg);