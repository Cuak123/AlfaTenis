# inbox/ — moved

**New client photos no longer go here.** Drop them in:

```
~/alfa-tenis-fotos/inbox-torneos-alumnos/
```

This folder is kept only as a signpost, because the path is referenced from
older commits and from the project's own history.

## Why it moved

This project sits under `~/Documents`, which macOS syncs to iCloud. 275 MB of
client photos staged inside it took `npm run build` from 1.3 s to **9 min 10 s**
and `npm run lint` from about 2 s to minutes. Moving the staging folders out
restored 1.28 s. Both directions were measured.

The giveaway is `du` (blocks actually on disk) reading far below `stat`
(logical size): iCloud has dematerialised the files, and every read pulls them
back over the network one at a time. Modern macOS leaves no `.icloud` stub
files, so their absence proves nothing.

## How to get photos out of the macOS Photos app

Select the images, then:

**File → Export → Export Unmodified Original for N Photos…**

"Unmodified Original" gives the file as the camera wrote it, at full resolution
with no re-encode. The other option, "Export N Photos…", re-encodes and usually
resizes — fine for sharing, wasteful as a source.

Dragging straight out of Photos into Finder also works, but hands over the
edited render rather than the original.

## What happens next

Every photo is looked at before anything is done with it — including who is in
the **background**, not just the foreground. Then it is sorted:

- `~/alfa-tenis-fotos/restricted/` for anything with identifiable minors. That
  never enters the repo, which is public.
- `assets-source/coaches|academy|brand/` in this repo for usable originals.
- Optimised web versions are generated into `public/images/`, never by moving
  an original into `public/`.

See `assets-source/README.md` for the full original→new filename mapping.
