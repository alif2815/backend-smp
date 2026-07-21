**Struktur Menu Website SMP Bina Bangsa**
Website ini akan dibagi menjadi 2 area utama: Halaman Publik (Tanpa Login) dan Halaman Dashboard (Wajib Login).

1.**Halaman Publik**(Akses: Semua Orang / Calon Siswa)
Halaman ini fokus pada informasi sekolah dan penjaringan siswa baru:
Home / Beranda: Banner sekolah, berita terbaru, foto kegiatan, dan tombol cepat "Daftar Sekarang" & "Login Siswa/Staff".
Tentang Kami (About Us): Sejarah, Visi & Misi, dan Struktur Organisasi SMP.
Fasilitas: Foto dan deskripsi laboratorium komputer, perpustakaan, ruang kelas, dll.
Data Guru: Daftar nama guru beserta mata pelajaran yang diampu.
PPDB (Pendaftaran Online): Form pengisian data calon siswa baru (Nama, Asal Sekolah, No. HP Orang Tua, dll).

2. **Dashboard Siswa (Akses: Siswa Aktif)**
Setelah login menggunakan NISN/Password, siswa dapat melihat:
Beranda Dashboard: Pengumuman penting dari sekolah dan ringkasan profil siswa.
Jadwal Pelajaran: Tampilan tabel jadwal pelajaran sesuai dengan kelas siswa saat ini.
Rapor / Nilai: Halaman untuk melihat nilai tugas, UTS, UAS, atau nilai akhir per semester.
Cetak Nilai (Saran): Tombol untuk mengunduh/mencetak nilai dalam bentuk PDF.

3.**Dashboard Admin (Akses: Staf Tata Usaha / Guru yang Ditunjuk)**
Admin berfokus pada manajemen operasional harian sekolah:
Manajemen PPDB: Kelola data pendaftar baru (Verifikasi, Ubah Status jadi "Diterima" atau "Ditolak").
Manajemen Kelas: Input data kelas (misal: Kelas VII-A, VII-B, VIII-A) dan pembagian wali kelasnya.
Manajemen Siswa: Mengatur data siswa aktif, memindahkan siswa ke kelas tertentu (Setting Kelas).
Manajemen Jadwal: Mengatur hari, jam, mata pelajaran, dan guru pengampu untuk tiap-vis kelas.
Manajemen Nilai: Menginput dan mengubah (setting) nilai siswa per mata pelajaran.

4.**Dashboard Super Admin (Akses: Anda sebagai Operator Data / Kepala Sekolah)**
Memiliki semua hak akses milik Admin, ditambah kendali penuh atas sistem:
Manajemen Pengguna (User Management): Membuat akun untuk Admin baru, mereset password guru/admin yang lupa, atau menghapus akun staff.
Log Aktivitas (Saran): Catatan digital untuk melihat siapa yang mengubah nilai atau jadwal (penting untuk keamanan data).
Backup Database (Saran): Fitur sekali klik untuk mengamankan data website agar tidak hilang jika terjadi error pada Docker.

**Arsitektur Hak Akses & Role (RBAC)**
Di backend Node.js nanti, Anda bisa menerapkan Role-Based Access Control (RBAC) dengan 4 tingkatan akses:
Super Admin (Anda): Akses penuh ke semua tabel, termasuk membuat/menghapus akun Admin dan Guru, serta melihat log sistem.
Admin (Staf TU): Mengelola PPDB, membuat data Kelas, memploting siswa ke kelas, dan mengatur Jadwal Pelajaran.
Guru: Melihat jadwal mengajar mereka sendiri, melihat daftar siswa di kelas yang diajar, serta menginput/mengubah Nilai siswa pada mata pelajaran yang mereka ampu saja.
Siswa: Murni Read-Only (Hanya bisa melihat Profil, Kelas, Jadwal, dan Nilai Rapor mereka sendiri).
