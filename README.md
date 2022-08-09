The task is to build a frame containing a gauge `G` for the elapsed time `e`, 
a label which shows the elapsed time as a numerical value,
a slider `S` by which the duration `d` of the timer can be adjusted
while the timer is running and a reset button `R`. 

Adjusting `S` must immediately reflect on `d` and not only when `S` is released.
It follows that while moving `S` the filled amount of `G` will (usually) change immediately.
When `e ≥ d` is `true` then the timer stops (and `G` will be full).

If, thereafter, `d` is increased such that `d > e` will be `true`
then the timer restarts to tick until `e ≥ d` is `true` again.

Clicking `R` will reset `e` to zero.
