/*
True => AI could never achieve the goal of having all their mqual being max.
False => inconclusive (maybe they could achieve the goal)
*/
A[] ( exists(i:int[1,NA])(impersonated!=i && (AI(i).mqual<2 || !AI(i).wait)) )