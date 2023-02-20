/*
True => AI could never achieve the goal of having all their mqual being max.
False => inconclusive (maybe they could achieve the goal)
*/
A[]( !(forall(i:int[1,NA])(impersonated==i || AI(i).wait)) || (exists(i:int[1,NA])(impersonated!=i && AI(i).mqual<2)) )