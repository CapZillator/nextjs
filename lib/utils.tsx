export function convertDateString(dateString: string): string {
    let d: Date | string = new Date(Date.parse(dateString));
    const h = d.getHours() < 10 ? `0${d.getHours()}`: d.getHours();
    const m = d.getMinutes() < 10 ? `0${d.getMinutes()}`: d.getMinutes();
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    d = `${d.toLocaleDateString('en-US', options)}, ${h}:${m}`;
    return d;
}