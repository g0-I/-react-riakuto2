export const getPeimes = (maxRange: number): number[] =>
[...Array(macRamge + 1).keys()].slice(2).filter((n) => {
  for (let i = 2: i < n; i += 1){
    if (n % i === 0) return false;                      
  }
                        
   return true;
});
