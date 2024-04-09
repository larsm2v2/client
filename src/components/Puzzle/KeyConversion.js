// Function to convert a number to the corresponding row-column pair
export const puzzle_convert = (number) => {
    let group_row = Math.floor((number - 1) / 125);
    let index_group = (number-1) % 125;
    let group_col = Math.floor(index_group / 25);
    let index = index_group % 25;
    let row = Math.floor((index) / 5);
    let col = (index) % 5;
        return { group: `${group_row}-${group_col}`, level: `${row}-${col}` };
    
};
// Function to reverse the group and level to a number
export const reverse_puzzle_convert = (group, level) => {
        const [group_row, group_col] = group.split('-').map(Number);
        const [row, col] = level.split('-').map(Number);
        return (group_row*125) + (group_col*25) + (row * 5) + col + 1;
    
};