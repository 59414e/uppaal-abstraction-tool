[Upd-2023-07-12]: 
* a model specification in `sai.xml`, `sai_intr.xml`, `sai_intr_fixed.xml` had minor deviations from the one used in STV;
* a newer version of SAI model can be found in `updated/` subdirectory;
* as reported benchmarks refer to an older (non-updated) variant, both versions are available;


# Socially explainable AI

Based on the STV models from [arXiv:2302.01063](https://arxiv.org/abs/2302.01063).

Three variants of models are:

1. `sai.xml` - composed of honest AI agents only
2. `sai_intr.xml` - with impersonator, who acts in-place of one of the AI agents
3. `sai_intr_fixed.xml` - with impersonator, whose strategy is fixed to never share component with quality above threshold (here, k=2)

We will used queries `sai.q` for variant (1) and a slightly modified `sai_intr.q` for (2) and (3).


## Working with tool


Firstly set the path to input model, output model and domain approximation:

```sh
./app.js config \
input=./examples/sai/sai_intr_fixed.xml \
output=./examples/sai/abstract.xml \
dmap=./examples/sai/d.txt
```

(Optional) We can do some simple queries, like:

```sh
# prints shared variables
./app.js info vars.global

# prints constant variables 
./app.js info vars.const

# two of the above can be combined in
./app.js info


# prints local variables of template named "AI"
./app.js info AI.vars

# prints locations of template named "AI"
./app.js info AI.locations

# prints edges of template named "AI"
./app.js info AI.edges

# three of the above can be combined in
./app.js info AI
```

### Abstraction 

Removes AI agents local memory of everything, except its component quality.

```sh
./app.js approx 1 targetVars=data,completion,mstatus,info initVal=0,0,0,0 targetTemplate=AI 
./app.js abstract targetVars=data,completion,mstatus,info initVal=0,0,0,0 targetTemplate=AI 
```
