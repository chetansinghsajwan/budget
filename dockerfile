FROM chetansinghsajwan/tauri-builder as builder

# Build the app
COPY . .
RUN cargo tauri android build

# Copy outputs
RUN mkdir /out && \
    cp src-tauri/gen/android/app/build/outputs/apk/universal/release/*.apk /out/ && \
    cp src-tauri/gen/android/app/build/outputs/bundle/universalRelease/*.aab /out/
