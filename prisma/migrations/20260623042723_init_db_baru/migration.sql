-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'SISWA') NOT NULL DEFAULT 'SISWA',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biodata_siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nisn` VARCHAR(255) NOT NULL,
    `nama_lengkap` VARCHAR(255) NOT NULL,
    `jenis_kelamin` VARCHAR(255) NOT NULL,
    `status_siswa` ENUM('CALON', 'AKTIF', 'ALUMNI') NOT NULL DEFAULT 'AKTIF',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Biodata_siswa_user_id_key`(`user_id`),
    UNIQUE INDEX `Biodata_siswa_nisn_key`(`nisn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biodata_guru` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nip` VARCHAR(255) NULL,
    `nama_guru` VARCHAR(255) NOT NULL,
    `no_hp` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Biodata_guru_user_id_key`(`user_id`),
    UNIQUE INDEX `Biodata_guru_nip_key`(`nip`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kelas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kelas` VARCHAR(255) NOT NULL,
    `guru_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ploting_Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siswa_id` INTEGER NOT NULL,
    `kelas_id` INTEGER NOT NULL,
    `tahun_ajaran` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mapel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_mapel` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jadwal_Pelajaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kelas_id` INTEGER NOT NULL,
    `mapel_id` INTEGER NOT NULL,
    `guru_id` INTEGER NOT NULL,
    `hari` VARCHAR(255) NOT NULL,
    `jam_mulai` TIME(0) NOT NULL,
    `jam_selesai` TIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nilai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siswa_id` INTEGER NOT NULL,
    `mapel_id` INTEGER NOT NULL,
    `guru_id` INTEGER NOT NULL,
    `semester` INTEGER NOT NULL DEFAULT 1,
    `nilai_tugas` DECIMAL(5, 2) NOT NULL,
    `nilai_uts` DECIMAL(5, 2) NOT NULL,
    `nilai_uas` DECIMAL(5, 2) NOT NULL,
    `nilai_akhir` DECIMAL(5, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Biodata_siswa` ADD CONSTRAINT `Biodata_siswa_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata_guru` ADD CONSTRAINT `Biodata_guru_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kelas` ADD CONSTRAINT `Kelas_guru_id_fkey` FOREIGN KEY (`guru_id`) REFERENCES `Biodata_guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ploting_Siswa` ADD CONSTRAINT `Ploting_Siswa_siswa_id_fkey` FOREIGN KEY (`siswa_id`) REFERENCES `Biodata_siswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ploting_Siswa` ADD CONSTRAINT `Ploting_Siswa_kelas_id_fkey` FOREIGN KEY (`kelas_id`) REFERENCES `Kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jadwal_Pelajaran` ADD CONSTRAINT `Jadwal_Pelajaran_kelas_id_fkey` FOREIGN KEY (`kelas_id`) REFERENCES `Kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jadwal_Pelajaran` ADD CONSTRAINT `Jadwal_Pelajaran_mapel_id_fkey` FOREIGN KEY (`mapel_id`) REFERENCES `Mapel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jadwal_Pelajaran` ADD CONSTRAINT `Jadwal_Pelajaran_guru_id_fkey` FOREIGN KEY (`guru_id`) REFERENCES `Biodata_guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nilai` ADD CONSTRAINT `Nilai_siswa_id_fkey` FOREIGN KEY (`siswa_id`) REFERENCES `Biodata_siswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nilai` ADD CONSTRAINT `Nilai_mapel_id_fkey` FOREIGN KEY (`mapel_id`) REFERENCES `Mapel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nilai` ADD CONSTRAINT `Nilai_guru_id_fkey` FOREIGN KEY (`guru_id`) REFERENCES `Biodata_guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
