const counterStore = {
  count: 0,
  startTime: Date.now(),

  increment() { //methode qui ajoute 1 
    this.count++;
  },

  getStats() { // méthode de stats
    return {
      totalRequests: this.count,
      uptime: Math.floor((Date.now() - this.startTime) / 1000),
      instanceId: process.env.INSTANCE_ID || require('os').hostname()
    };
  }
};

module.exports = counterStore;