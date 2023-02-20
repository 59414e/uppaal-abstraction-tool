/*
Resistance against ballot stuffing attack (alt. weak-resistance).
It says that the number of sent packages should never exceed the number of voters, nor be less than the number of tallied vote.
*/
A[](Authority.tallySum() <= Authority.packSum() && Authority.packSum() <= NV)