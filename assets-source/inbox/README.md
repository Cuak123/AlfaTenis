# inbox/

Drop new client photos here. **Everything in this folder except this README is
gitignored**, so an unreviewed photo cannot reach the repo by accident.

That matters because the repo is public: a photo committed here would be
downloadable by anyone from `raw.githubusercontent.com`, at every path it ever
had, and deleting it later would not take it back.

## How to get photos here from the macOS Photos app

In Photos, select the images, then:

**File → Export → Export Unmodified Original for N Photos…**

Pick this folder. "Unmodified Original" gives the file as the camera wrote it,
at full resolution with no re-encode. The other option, "Export N Photos…",
re-encodes and usually resizes — fine for sharing, wasteful as a source.

Dragging images straight out of Photos into Finder also works, but it hands
over the edited render rather than the original.

## What happens next

Each photo is looked at before anything is done with it, then sorted into
`coaches/`, `academy/`, `brand/` or `restricted/`, renamed, and recorded in
`assets-source/README.md`. Web-ready versions are generated into
`public/images/` from there — never by moving an original into `public/`.
