# (Simple) postal voting model

Represents a simplified scenario of postal voting as from [arXiv:2210.10694](https://arxiv.org/abs/2210.10694).

Further details can be found in [arXiv:2202.12016](https://arxiv.org/abs/2202.12016).


## Working with tool

Firstly set the path to input model, output model and domain approximation:

```sh
./app.js config \
input=./examples/postal/postal.xml \
output=./examples/postal/abstract.xml \
dmap=./examples/postal/d.txt
```

(Optional) We can do some simple queries, like:

```sh
# prints shared variables
./app.js info vars.global

# prints constant variables 
./app.js info vars.const

# two of the above can be combined in
./app.js info


# prints local variables of template named "Voter"
./app.js info Voter.vars

# prints locations of template named "Voter"
./app.js info Voter.locations

# prints edges of template named "Voter"
./app.js info Voter.edges

# three of the above can be combined in
./app.js info Voter
```

### Abstraction 1 

Removes Voter's memory on how the ballot was cast.  
Here we use may-abstraction paired with upper-approximation of a local domain `approx 1`; to get a must-abstraction simply replace it with `approx 2` which yields a lower-approximation.

```sh
./app.js approx 1 targetVars=mem_sg,mem_vt initVal=0,0 targetTemplate=Voter
```

After the local domain was approximated and `d.txt` produced, the tool can generate an abstract model.

```sh
./app.js abstract targetVars=mem_sg,mem_vt initVal=0,0 targetTemplate=Voter 
```

The newly generated model is now ready for verification.  
Note that the graph layout might get changed.


(Optional) as an alternative to GUI, one could also use `verifyta`, which is provided with UPPAAL:

```sh
# prints the summary after verification
verifyta -u examples/postal/abstract.xml examples/postal/postal.q
```

