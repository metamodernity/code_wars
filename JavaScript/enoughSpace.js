function enough(cap, on, wait) {
  if (cap <= on + wait){
    let c = ((on + wait) - cap);
    return c
  } else {
    return 0
  }
}
