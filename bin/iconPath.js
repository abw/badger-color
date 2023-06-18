#!/usr/bin/env node

const src = 'M312.889,156.444C312.889,117.156 344.711,85.333 384,85.333C423.289,85.333 455.111,117.156 455.111,156.444L455.111,199.111C455.111,214.844 467.822,227.556 483.556,227.556C499.289,227.556 512,214.844 512,199.111L512,156.444C512,85.778 454.667,28.444 384,28.444C313.333,28.444 256,85.778 256,156.444L256,199.111L56.889,199.111C25.511,199.111 0,224.622 0,256L0,426.667C0,458.044 25.511,483.556 56.889,483.556L341.333,483.556C372.711,483.556 398.222,458.044 398.222,426.667L398.222,256C398.222,224.622 372.711,199.111 341.333,199.111L312.889,199.111L312.889,156.444Z'


const dest = src.replaceAll(/(\d+\.\d+)/g, match => Math.round(parseFloat(match)))

console.log(dest)
