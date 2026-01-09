plugins {
    java
}

group = "io.github.burnt-labs"
version = "0.0.1"

repositories {
    mavenCentral()
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

dependencies {
    implementation("com.google.protobuf:protobuf-java:4.31.1")
}

sourceSets {
    main {
        java {
            setSrcDirs(listOf("../../java/types"))
        }
    }
}
