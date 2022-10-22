// ultra simplistic observer
class VideoObserver {
  private subscriptions: Record<string, Record<string, Function>> = {};
  private getNextUniqueId = this.getIdGenerator();

  getIdGenerator() {
    let lastId = 0;

    return function getNextUniqueId() {
      lastId += 1;
      return String(lastId);
    };
  }

  // note our callback function doesnt take in any params! (can be extended easily)
  subscribe(event: string, callback: Function) {
    const id = this.getNextUniqueId();
    if (!this.subscriptions[event]) this.subscriptions[event] = {};

    this.subscriptions[event][id] = callback;
    return {
      unsubscribe: () => {
        delete this.subscriptions[event][id];
        if (Object.keys(this.subscriptions[event]).length === 0) delete this.subscriptions[event];
      },
    };
  }

  publish(event: string) {
    if (!this.subscriptions[event]) return;
    Object.keys(this.subscriptions[event]).forEach((key) => {
      this.subscriptions[event][key]();
    });
  }
}

const videoObserver = new VideoObserver();

export default videoObserver;
