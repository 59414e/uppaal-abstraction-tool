/*
dispatch
*/
A[] Authority.coll_vts imply (sum(i:int[1,N_V])Authority.pack_sent[i])==N_V


/*
bstuff
*/
A[](Authority.tally_1+Authority.tally_2+Authority.tally_3<=sum(i:int[1,N_V])Authority.pack_sent[i] && sum(i:int[1,N_V])Authority.pack_sent[i] <= N_V)
