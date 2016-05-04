export function respToMediaEvent(resp) {
  return new MediaEvent(
    resp.ready,
    resp.plays,
    resp.complete25,
    resp.complete50,
    resp.complete75,
    resp.theend
  );
}

export function addMediaEvents(mediaEvents) {
  return mediaEvents.reduce((prev, curr) =>
    (new MediaEvent(
      prev.ready + curr.ready,
      prev.plays + curr.plays,
      prev.complete25 + curr.complete25,
      prev.complete50 + curr.complete50,
      prev.complete75 + curr.complete75,
      prev.theend + curr.theend
    )));
}

export class MediaEvent {
  constructor(
    public ready: number = 0,
    public plays: number = 0,
    public complete25: number = 0,
    public complete50: number = 0,
    public complete75: number = 0,
    public theend: number = 0
  ) {}
}