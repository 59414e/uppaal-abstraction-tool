//This file was generated from (Academic) UPPAAL 4.1.24 (rev. 29A3ECA4E5FB0808), November 2019

/*
True => AI could never achieve the goal of having all their mqual being max.
False => inconclusive (maybe they could achieve the goal)
*/
A[]exists(i:int[1,NA])(AI(i).mqual<2)

/*

*/
A[]1==1
