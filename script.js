// Sample data
const destinations = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        category: 'asia',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2306b6d4" width="400" height="300"/><circle fill="%23f59e0b" cx="80" cy="80" r="40"/><polygon fill="%2310b981" points="0,200 150,150 300,180 400,160 400,300 0,300"/><rect fill="%23ffffff" x="150" y="100" width="100" height="80" opacity="0.8"/></svg>',
        price: 'Rp 2.500.000',
        rating: 4.8,
        description: 'Pulau dewata dengan pantai eksotis dan budaya yang kaya'
    },
    {
        id: 2,
        name: 'Paris, Prancis',
        category: 'europe',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e5e7eb" width="400" height="300"/><polygon fill="%236b7280" points="200,50 180,150 220,150"/><rect fill="%23374151" x="190" y="150" width="20" height="100"/><circle fill="%23fbbf24" cx="100" cy="100" r="30"/></svg>',
        price: 'Rp 15.000.000',
        rating: 4.9,
        description: 'Kota cinta dengan arsitektur klasik dan kuliner terbaik'
    },
    {
        id: 3,
        name: 'Tokyo, Jepang',
        category: 'asia',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23f3f4f6" width="400" height="300"/><rect fill="%23ef4444" x="50" y="50" width="80" height="120"/><rect fill="%233b82f6" x="150" y="80" width="60" height="90"/><rect fill="%2310b981" x="250" y="60" width="100" height="110"/><circle fill="%23fbbf24" cx="320" cy="80" r="25"/></svg>',
        price: 'Rp 12.000.000',
        rating: 4.7,
        description: 'Perpaduan sempurna antara tradisi dan modernitas'
    },
    {
        id: 4,
        name: 'New York, Amerika',
        category: 'america',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%234f46e5" width="400" height="300"/><rect fill="%23374151" x="50" y="100" width="40" height="150"/><rect fill="%236b7280" x="120" y="80" width="50" height="170"/><rect fill="%23374151" x="200" y="60" width="45" height="190"/><rect fill="%239ca3af" x="280" y="90" width="60" height="160"/></svg>',
        price: 'Rp 18.000.000',
        rating: 4.6,
        description: 'Kota yang tidak pernah tidur dengan skyline menakjubkan'
    },
    {
        id: 5,
        name: 'Santorini, Yunani',
        category: 'europe',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2306b6d4" width="400" height="300"/><circle fill="%23f59e0b" cx="350" cy="50" r="30"/><polygon fill="%23ffffff" points="50,200 100,180 150,190 200,170 250,185 300,175 350,180 400,170 400,300 0,300"/><rect fill="%233b82f6" x="80" y="160" width="20" height="20" rx="10"/></svg>',
        price: 'Rp 20.000.000',
        rating: 4.9,
        description: 'Pulau romantis dengan pemandangan sunset terbaik'
    },
    {
        id: 6,
        name: 'Dubai, UAE',
        category: 'asia',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23fbbf24" width="400" height="300"/><rect fill="%23374151" x="100" y="50" width="30" height="200"/><rect fill="%236b7280" x="150" y="80" width="40" height="170"/><rect fill="%23374151" x="210" y="30" width="35" height="220"/><rect fill="%239ca3af" x="270" y="70" width="50" height="180"/><circle fill="%23f59e0b" cx="50" cy="80" r="25"/></svg>',
        price: 'Rp 16.000.000',
        rating: 4.8,
        description: 'Kemewahan modern di tengah gurun pasir'
    }
];

const packages = [
    {
        id: 1,
        name: 'Paket Honeymoon Bali',
        duration: '5 Hari 4 Malam',
        price: 'Rp 8.500.000',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23f472b6" width="400" height="300"/><circle fill="%23fbbf24" cx="80" cy="80" r="40"/><polygon fill="%2310b981" points="0,200 150,150 300,180 400,160 400,300 0,300"/><path fill="%23ffffff" d="M180,120 Q200,100 220,120 Q200,140 180,120" opacity="0.8"/></svg>',
        includes: ['Hotel bintang 5', 'Romantic dinner', 'Spa couple', 'Private tour'],
        rating: 4.9
    },
    {
        id: 2,
        name: 'Paket Keluarga Tokyo',
        duration: '7 Hari 6 Malam',
        price: 'Rp 25.000.000',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2306b6d4" width="400" height="300"/><rect fill="%23ef4444" x="50" y="50" width="80" height="120"/><rect fill="%233b82f6" x="150" y="80" width="60" height="90"/><circle fill="%23fbbf24" cx="320" cy="80" r="25"/><rect fill="%23ffffff" x="100" y="200" width="200" height="20" opacity="0.8"/></svg>',
        includes: ['Tiket Disneyland', 'JR Pass', 'Hotel family room', 'City tour'],
        rating: 4.8
    },
    {
        id: 3,
        name: 'Paket Backpacker Eropa',
        duration: '14 Hari 13 Malam',
        price: 'Rp 35.000.000',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2310b981" width="400" height="300"/><polygon fill="%236b7280" points="200,50 180,150 220,150"/><rect fill="%23374151" x="190" y="150" width="20" height="100"/><circle fill="%23fbbf24" cx="100" cy="100" r="30"/><rect fill="%23ffffff" x="50" y="200" width="300" height="10" opacity="0.6"/></svg>',
        includes: ['Eurail pass', 'Hostel accommodation', 'City walking tours', 'Travel insurance'],
        rating: 4.7
    }
];

// Navigation functions
function showPage(pageId) {
    // Check admin access
    if (pageId === 'admin' && !isLoggedIn) {
        alert('Anda harus login sebagai admin untuk mengakses halaman ini.');
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId + 'Page').classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold');
        link.classList.add('text-gray-700');
    });

    // Load content based on page
    if (pageId === 'home') {
        loadFeaturedDestinations();
        loadFeaturedPackages();
    } else if (pageId === 'destinations') {
        loadAllDestinations();
    } else if (pageId === 'packages') {
        loadAllPackages();
    } else if (pageId === 'admin') {
        loadAdminData();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Admin functions
function showAdminSection(section, event) {
    // Hide all admin sections
    document.querySelectorAll('.admin-section').forEach(sec => {
        sec.classList.add('hidden');
    });

    // Show selected section
    document.getElementById('admin' + section.charAt(0).toUpperCase() + section.slice(1)).classList.remove('hidden');

    // Update admin navigation
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'bg-purple-600', 'bg-teal-600', 'bg-green-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.remove('bg-gray-200', 'text-gray-700');

    if (section === 'destinations') {
        clickedButton.classList.add('bg-blue-600', 'text-white');
        loadDestinationsTable();
    } else if (section === 'packages') {
        clickedButton.classList.add('bg-purple-600', 'text-white');
        loadPackagesTable();
    } else if (section === 'bookings') {
        clickedButton.classList.add('bg-teal-600', 'text-white');
        loadBookingsTable();
    } else if (section === 'stats') {
        clickedButton.classList.add('bg-green-600', 'text-white');
        loadStats();
    }
}

function loadAdminData() {
    loadDestinationsTable();
    loadBookingsTable();
    loadStats();
}

function loadBookingsTable() {
    const bookings = JSON.parse(localStorage.getItem('wanderlust_bookings') || '[]');
    const tbody = document.getElementById('bookingsTable');

    if (bookings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-500">Belum ada pemesanan</td></tr>';
        return;
    }

    tbody.innerHTML = bookings.map(booking => {
        const statusColors = {
            pending: 'bg-yellow-100 text-yellow-800',
            confirmed: 'bg-green-100 text-green-800',
            cancelled: 'bg-red-100 text-red-800'
        };

        const statusText = {
            pending: 'Pending',
            confirmed: 'Dikonfirmasi',
            cancelled: 'Dibatalkan'
        };

        return `
            <tr class="border-b hover:bg-gray-50 booking-row" data-status="${booking.status}">
                <td class="py-3 px-4 font-mono text-sm">${booking.bookingId}</td>
                <td class="py-3 px-4">${booking.fullName}</td>
                <td class="py-3 px-4">
                    <div class="text-sm">
                        <div class="font-medium">${getItemName(booking.itemId, booking.itemType)}</div>
                        <div class="text-gray-500">${booking.itemType === 'package' ? 'Paket' : 'Destinasi'}</div>
                    </div>
                </td>
                <td class="py-3 px-4">${formatDate(booking.departureDate)}</td>
                <td class="py-3 px-4">
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}">
                        ${statusText[booking.status]}
                    </span>
                </td>
                <td class="py-3 px-4">
                    <div class="flex space-x-2">
                        <button onclick="viewBookingDetails('${booking.bookingId}')" class="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition">
                            <i class="fas fa-eye mr-1"></i>Detail
                        </button>
                        ${booking.status === 'pending' ? `
                            <button onclick="updateBookingStatus('${booking.bookingId}', 'confirmed')" class="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition">
                                <i class="fas fa-check mr-1"></i>Konfirmasi
                            </button>
                            <button onclick="updateBookingStatus('${booking.bookingId}', 'cancelled')" class="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600 transition">
                                <i class="fas fa-times mr-1"></i>Batal
                            </button>
                        ` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function getItemName(itemId, itemType) {
    if (itemType === 'destination') {
        const dest = destinations.find(d => d.id == itemId);
        return dest ? dest.name : 'Destinasi tidak ditemukan';
    } else {
        const pkg = packages.find(p => p.id == itemId);
        return pkg ? pkg.name : 'Paket tidak ditemukan';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function filterBookings(status) {
    const rows = document.querySelectorAll('.booking-row');
    const buttons = document.querySelectorAll('.booking-filter-btn');

    // Update button styles
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');

    // Filter rows
    rows.forEach(row => {
        if (status === 'all' || row.dataset.status === status) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

function viewBookingDetails(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('wanderlust_bookings') || '[]');
    const booking = bookings.find(b => b.bookingId === bookingId);

    if (booking) {
        const itemName = getItemName(booking.itemId, booking.itemType);
        alert(`Detail Pemesanan ${bookingId}:

Nama: ${booking.fullName}
Email: ${booking.email}
Telepon: ${booking.phone}
Item: ${itemName} (${booking.itemType === 'package' ? 'Paket' : 'Destinasi'})
Jumlah Peserta: ${booking.participants} orang
Tanggal Keberangkatan: ${formatDate(booking.departureDate)}
Preferensi Hotel: ${booking.hotelPreference}
Permintaan Khusus: ${booking.specialRequests || 'Tidak ada'}
Status: ${booking.status}`);
    }
}

function updateBookingStatus(bookingId, newStatus) {
    const bookings = JSON.parse(localStorage.getItem('wanderlust_bookings') || '[]');
    const bookingIndex = bookings.findIndex(b => b.bookingId === bookingId);

    if (bookingIndex !== -1) {
        bookings[bookingIndex].status = newStatus;
        localStorage.setItem('wanderlust_bookings', JSON.stringify(bookings));
        loadBookingsTable();

        const statusText = {
            confirmed: 'dikonfirmasi',
            cancelled: 'dibatalkan'
        };

        alert(`Pemesanan ${bookingId} berhasil ${statusText[newStatus]}!`);
    }
}

function loadDestinationsTable() {
    const tbody = document.getElementById('destinationsTable');
    tbody.innerHTML = destinations.map(dest => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-4 font-medium">${dest.name}</td>
            <td class="py-3 px-4">${dest.category.charAt(0).toUpperCase() + dest.category.slice(1)}</td>
            <td class="py-3 px-4">${dest.price}</td>
            <td class="py-3 px-4">
                <div class="flex items-center">
                    <i class="fas fa-star text-yellow-500 mr-1"></i>
                    ${dest.rating}
                </div>
            </td>
            <td class="py-3 px-4">
                <div class="flex space-x-2">
                    <button onclick="editDestination(${dest.id})" class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition">
                        <i class="fas fa-edit mr-1"></i>Edit
                    </button>
                    <button onclick="deleteDestination(${dest.id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition">
                        <i class="fas fa-trash mr-1"></i>Hapus
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadPackagesTable() {
    const tbody = document.getElementById('packagesTable');
    tbody.innerHTML = packages.map(pkg => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-4 font-medium">${pkg.name}</td>
            <td class="py-3 px-4">${pkg.duration}</td>
            <td class="py-3 px-4">${pkg.price}</td>
            <td class="py-3 px-4">
                <div class="flex items-center">
                    <i class="fas fa-star text-yellow-500 mr-1"></i>
                    ${pkg.rating}
                </div>
            </td>
            <td class="py-3 px-4">
                <div class="flex space-x-2">
                    <button onclick="editPackage(${pkg.id})" class="bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600 transition">
                        <i class="fas fa-edit mr-1"></i>Edit
                    </button>
                    <button onclick="deletePackage(${pkg.id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition">
                        <i class="fas fa-trash mr-1"></i>Hapus
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadStats() {
    document.getElementById('totalDestinations').textContent = destinations.length;
    document.getElementById('totalPackages').textContent = packages.length;

    const avgRating = (destinations.reduce((sum, dest) => sum + dest.rating, 0) / destinations.length).toFixed(1);
    document.getElementById('averageRating').textContent = avgRating;

    const categoryCount = {};
    destinations.forEach(dest => {
        categoryCount[dest.category] = (categoryCount[dest.category] || 0) + 1;
    });
    const popularCategory = Object.keys(categoryCount).reduce((a, b) => categoryCount[a] > categoryCount[b] ? a : b);
    document.getElementById('popularCategory').textContent = popularCategory.charAt(0).toUpperCase() + popularCategory.slice(1);
}

// Modal functions for admin
function showAddDestinationModal() {
    document.getElementById('addDestinationModal').classList.add('active');
}

function closeAddDestinationModal() {
    document.getElementById('addDestinationModal').classList.remove('active');
}

function showAddPackageModal() {
    document.getElementById('addPackageModal').classList.add('active');
}

function closeAddPackageModal() {
    document.getElementById('addPackageModal').classList.remove('active');
}

function showEditDestinationModal() {
    document.getElementById('editDestinationModal').classList.add('active');
}

function closeEditDestinationModal() {
    document.getElementById('editDestinationModal').classList.remove('active');
}

// CRUD operations
function handleAddDestination(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Get uploaded image or use default
    const imageFile = formData.get('image');
    let imageUrl;

    if (imageFile && imageFile.size > 0) {
        // Convert uploaded image to base64
        const reader = new FileReader();
        reader.onload = function(e) {
            const newDestination = {
                id: destinations.length + 1,
                name: formData.get('name'),
                category: formData.get('category'),
                price: formData.get('price'),
                rating: parseFloat(formData.get('rating')),
                description: formData.get('description'),
                image: e.target.result
            };

            destinations.push(newDestination);
            loadDestinationsTable();
            loadStats();
            closeAddDestinationModal();
            event.target.reset();
            removeDestinationImage();
            alert('Destinasi berhasil ditambahkan dengan gambar!');
        };
        reader.readAsDataURL(imageFile);
    } else {
        // Use default generated image
        const newDestination = {
            id: destinations.length + 1,
            name: formData.get('name'),
            category: formData.get('category'),
            price: formData.get('price'),
            rating: parseFloat(formData.get('rating')),
            description: formData.get('description'),
            image: generateDestinationImage(formData.get('category'))
        };

        destinations.push(newDestination);
        loadDestinationsTable();
        loadStats();
        closeAddDestinationModal();
        event.target.reset();
        removeDestinationImage();
        alert('Destinasi berhasil ditambahkan!');
    }
}

function handleAddPackage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Get uploaded image or use default
    const imageFile = formData.get('image');

    if (imageFile && imageFile.size > 0) {
        // Convert uploaded image to base64
        const reader = new FileReader();
        reader.onload = function(e) {
            const newPackage = {
                id: packages.length + 1,
                name: formData.get('name'),
                duration: formData.get('duration'),
                price: formData.get('price'),
                rating: parseFloat(formData.get('rating')),
                includes: formData.get('includes').split(',').map(item => item.trim()),
                image: e.target.result
            };

            packages.push(newPackage);
            loadPackagesTable();
            loadStats();
            closeAddPackageModal();
            event.target.reset();
            removePackageImage();
            alert('Paket wisata berhasil ditambahkan dengan gambar!');
        };
        reader.readAsDataURL(imageFile);
    } else {
        // Use default generated image
        const newPackage = {
            id: packages.length + 1,
            name: formData.get('name'),
            duration: formData.get('duration'),
            price: formData.get('price'),
            rating: parseFloat(formData.get('rating')),
            includes: formData.get('includes').split(',').map(item => item.trim()),
            image: generatePackageImage()
        };

        packages.push(newPackage);
        loadPackagesTable();
        loadStats();
        closeAddPackageModal();
        event.target.reset();
        removePackageImage();
        alert('Paket wisata berhasil ditambahkan!');
    }
}

function editDestination(id) {
    const destination = destinations.find(dest => dest.id === id);
    if (destination) {
        currentEditingId = id;
        document.getElementById('editDestId').value = destination.id;
        document.getElementById('editDestName').value = destination.name;
        document.getElementById('editDestCategory').value = destination.category;
        document.getElementById('editDestPrice').value = destination.price;
        document.getElementById('editDestRating').value = destination.rating;
        document.getElementById('editDestDescription').value = destination.description;

        // Show current image
        document.getElementById('editDestPreviewImg').src = destination.image;
        document.getElementById('editDestImagePreview').classList.remove('hidden');
        document.getElementById('editDestImagePlaceholder').classList.add('hidden');

        showEditDestinationModal();
    }
}

function handleEditDestination(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = parseInt(formData.get('id'));

    const destinationIndex = destinations.findIndex(dest => dest.id === id);
    if (destinationIndex !== -1) {
        const imageFile = formData.get('image');

        if (imageFile && imageFile.size > 0) {
            // New image uploaded
            const reader = new FileReader();
            reader.onload = function(e) {
                destinations[destinationIndex] = {
                    ...destinations[destinationIndex],
                    name: formData.get('name'),
                    category: formData.get('category'),
                    price: formData.get('price'),
                    rating: parseFloat(formData.get('rating')),
                    description: formData.get('description'),
                    image: e.target.result
                };

                loadDestinationsTable();
                loadStats();
                closeEditDestinationModal();
                alert('Destinasi berhasil diperbarui dengan gambar baru!');
            };
            reader.readAsDataURL(imageFile);
        } else {
            // Keep existing image
            destinations[destinationIndex] = {
                ...destinations[destinationIndex],
                name: formData.get('name'),
                category: formData.get('category'),
                price: formData.get('price'),
                rating: parseFloat(formData.get('rating')),
                description: formData.get('description')
            };

            loadDestinationsTable();
            loadStats();
            closeEditDestinationModal();
            alert('Destasi berhasil diperbarui!');
        }
    }
}

function deleteDestination(id) {
    if (confirm('Apakah Anda yakin ingin menghapus destinasi ini?')) {
        const index = destinations.findIndex(dest => dest.id === id);
        if (index !== -1) {
            destinations.splice(index, 1);
            loadDestinationsTable();
            loadStats();
            alert('Destinasi berhasil dihapus!');
        }
    }
}

function editPackage(id) {
    const package = packages.find(pkg => pkg.id === id);
    if (package) {
        currentEditingId = id;
        document.getElementById('editPkgId').value = package.id;
        document.getElementById('editPkgName').value = package.name;
        document.getElementById('editPkgDuration').value = package.duration;
        document.getElementById('editPkgPrice').value = package.price;
        document.getElementById('editPkgRating').value = package.rating;
        document.getElementById('editPkgIncludes').value = package.includes.join(', ');

        // Show current image
        document.getElementById('editPkgPreviewImg').src = package.image;
        document.getElementById('editPkgImagePreview').classList.remove('hidden');
        document.getElementById('editPkgImagePlaceholder').classList.add('hidden');

        showEditPackageModal();
    }
}

function deletePackage(id) {
    if (confirm('Apakah Anda yakin ingin menghapus paket ini?')) {
        const index = packages.findIndex(pkg => pkg.id === id);
        if (index !== -1) {
            packages.splice(index, 1);
            loadPackagesTable();
            loadStats();
            alert('Paket berhasil dihapus!');
        }
    }
}

// Image upload functions
function previewDestinationImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file terlalu besar. Maksimal 5MB.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('destPreviewImg').src = e.target.result;
            document.getElementById('destImagePreview').classList.remove('hidden');
            document.getElementById('destImagePlaceholder').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function removeDestinationImage() {
    document.getElementById('destImageInput').value = '';
    document.getElementById('destImagePreview').classList.add('hidden');
    document.getElementById('destImagePlaceholder').classList.remove('hidden');
}

function previewPackageImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file terlalu besar. Maksimal 5MB.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('pkgPreviewImg').src = e.target.result;
            document.getElementById('pkgImagePreview').classList.remove('hidden');
            document.getElementById('pkgImagePlaceholder').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function removePackageImage() {
    document.getElementById('pkgImageInput').value = '';
    document.getElementById('pkgImagePreview').classList.add('hidden');
    document.getElementById('pkgImagePlaceholder').classList.remove('hidden');
}

function previewEditDestinationImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file terlalu besar. Maksimal 5MB.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('editDestPreviewImg').src = e.target.result;
            document.getElementById('editDestImagePreview').classList.remove('hidden');
            document.getElementById('editDestImagePlaceholder').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function removeEditDestinationImage() {
    document.getElementById('editDestImageInput').value = '';
    document.getElementById('editDestImagePreview').classList.add('hidden');
    document.getElementById('editDestImagePlaceholder').classList.remove('hidden');
}

function previewEditPackageImage(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file terlalu besar. Maksimal 5MB.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('editPkgPreviewImg').src = e.target.result;
            document.getElementById('editPkgImagePreview').classList.remove('hidden');
            document.getElementById('editPkgImagePlaceholder').classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function removeEditPackageImage() {
    document.getElementById('editPkgImageInput').value = '';
    document.getElementById('editPkgImagePreview').classList.add('hidden');
    document.getElementById('editPkgImagePlaceholder').classList.remove('hidden');
}

function showEditPackageModal() {
    document.getElementById('editPackageModal').classList.add('active');
}

function closeEditPackageModal() {
    document.getElementById('editPackageModal').classList.remove('active');
}

function handleEditPackage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = parseInt(formData.get('id'));

    const packageIndex = packages.findIndex(pkg => pkg.id === id);
    if (packageIndex !== -1) {
        const imageFile = formData.get('image');

        if (imageFile && imageFile.size > 0) {
            // New image uploaded
            const reader = new FileReader();
            reader.onload = function(e) {
                packages[packageIndex] = {
                    ...packages[packageIndex],
                    name: formData.get('name'),
                    duration: formData.get('duration'),
                    price: formData.get('price'),
                    rating: parseFloat(formData.get('rating')),
                    includes: formData.get('includes').split(',').map(item => item.trim()),
                    image: e.target.result
                };

                loadPackagesTable();
                loadStats();
                closeEditPackageModal();
                alert('Paket berhasil diperbarui dengan gambar baru!');
            };
            reader.readAsDataURL(imageFile);
        } else {
            // Keep existing image
            packages[packageIndex] = {
                ...packages[packageIndex],
                name: formData.get('name'),
                duration: formData.get('duration'),
                price: formData.get('price'),
                rating: parseFloat(formData.get('rating')),
                includes: formData.get('includes').split(',').map(item => item.trim())
            };

            loadPackagesTable();
            loadStats();
            closeEditPackageModal();
            alert('Paket berhasil diperbarui!');
        }
    }
}

// Helper functions
function generateDestinationImage(category) {
    const colors = {
        asia: '%2306b6d4',
        europe: '%23e5e7eb',
        america: '%234f46e5',
        africa: '%23f59e0b',
        oceania: '%2310b981'
    };
    const color = colors[category] || '%2306b6d4';
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="${color}" width="400" height="300"/><circle fill="%23ffffff" cx="200" cy="150" r="50" opacity="0.3"/></svg>`;
}

function generatePackageImage() {
    return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23f472b6" width="400" height="300"/><circle fill="%23ffffff" cx="200" cy="150" r="50" opacity="0.3"/></svg>';
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Modal functions
function showLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

// Admin state
let isLoggedIn = false;
let currentEditingId = null;

// Form handlers
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || event.target.querySelector('input[type="password"]').value;

    console.log('Login attempt:', email, password); // Debug log

    // Simple admin login (in real app, this would be secure authentication)
    if (email === 'admin@wanderlust.com' && password === 'admin123') {
        isLoggedIn = true;
        // Desktop
        document.getElementById('loginButton').classList.add('hidden');
        document.getElementById('profileMenu').classList.remove('hidden');
        // Mobile
        document.getElementById('mobileLoginButton').classList.add('hidden');
        document.getElementById('mobileAdminAccess').classList.remove('hidden');
        closeLoginModal();
        event.target.reset();
        alert('Selamat datang, Admin! Anda sekarang dapat mengakses panel admin.');
    } else {
        alert('Email atau password salah. Gunakan: admin@wanderlust.com / admin123');
    }
}

function logout() {
    isLoggedIn = false;
    // Desktop
    document.getElementById('loginButton').classList.remove('hidden');
    document.getElementById('profileMenu').classList.add('hidden');
    // Close dropdown if open
    document.getElementById('profileDropdown').classList.add('hidden');
    // Mobile
    document.getElementById('mobileLoginButton').classList.remove('hidden');
    document.getElementById('mobileAdminAccess').classList.add('hidden');
    showPage('home');
    alert('Anda telah logout dari admin panel.');
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    const chevron = document.getElementById('profileChevron');

    dropdown.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const dropdown = document.getElementById('profileDropdown');
    const chevron = document.getElementById('profileChevron');

    if (profileMenu && !profileMenu.contains(event.target)) {
        dropdown.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }
});

function handleContactForm(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    event.target.reset();
}

// Content loading functions
function loadFeaturedDestinations() {
    const container = document.getElementById('featuredDestinations');
    const featured = destinations.slice(0, 3);

    container.innerHTML = featured.map(dest => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold">${dest.name}</h3>
                    <div class="flex items-center text-yellow-500">
                        <i class="fas fa-star mr-1"></i>
                        <span class="text-sm">${dest.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">${dest.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-blue-600">${dest.price}</span>
                    <button onclick="showBookingModal(${dest.id}, 'destination', '${dest.name}', '${dest.price}')" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadFeaturedPackages() {
    const container = document.getElementById('featuredPackages');

    container.innerHTML = packages.map(pkg => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold">${pkg.name}</h3>
                    <div class="flex items-center text-yellow-500">
                        <i class="fas fa-star mr-1"></i>
                        <span class="text-sm">${pkg.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-3">${pkg.duration}</p>
                <div class="mb-4">
                    <h4 class="font-semibold mb-2">Termasuk:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${pkg.includes.map(item => `<li><i class="fas fa-check text-green-500 mr-2"></i>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-purple-600">${pkg.price}</span>
                    <button onclick="showBookingModal(${pkg.id}, 'package', '${pkg.name}', '${pkg.price}')" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadAllDestinations() {
    const container = document.getElementById('allDestinations');

    container.innerHTML = destinations.map(dest => `
        <div class="destination-card bg-white rounded-2xl shadow-lg overflow-hidden card-hover" data-category="${dest.category}">
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold">${dest.name}</h3>
                    <div class="flex items-center text-yellow-500">
                        <i class="fas fa-star mr-1"></i>
                        <span class="text-sm">${dest.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">${dest.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-blue-600">${dest.price}</span>
                    <button onclick="showBookingModal(${dest.id}, 'destination', '${dest.name}', '${dest.price}')" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadAllPackages() {
    const container = document.getElementById('allPackages');

    container.innerHTML = packages.map(pkg => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
            <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold">${pkg.name}</h3>
                    <div class="flex items-center text-yellow-500">
                        <i class="fas fa-star mr-1"></i>
                        <span class="text-sm">${pkg.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-3">${pkg.duration}</p>
                <div class="mb-4">
                    <h4 class="font-semibold mb-2">Termasuk:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${pkg.includes.map(item => `<li><i class="fas fa-check text-green-500 mr-2"></i>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-purple-600">${pkg.price}</span>
                    <button onclick="showBookingModal(${pkg.id}, 'package', '${pkg.name}', '${pkg.price}')" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterDestinations(category) {
    const cards = document.querySelectorAll('.destination-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update button styles
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');

    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Drag and drop functionality
function setupDragAndDrop() {
    const dropZones = [
        { zone: 'destImageInput', preview: 'destImagePreview', placeholder: 'destImagePlaceholder', img: 'destPreviewImg' },
        { zone: 'pkgImageInput', preview: 'pkgImagePreview', placeholder: 'pkgImagePlaceholder', img: 'pkgPreviewImg' },
        { zone: 'editDestImageInput', preview: 'editDestImagePreview', placeholder: 'editDestImagePlaceholder', img: 'editDestPreviewImg' }
    ];

    dropZones.forEach(zone => {
        const input = document.getElementById(zone.zone);
        const dropArea = input.parentElement;

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add('border-blue-400', 'bg-blue-50'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove('border-blue-400', 'bg-blue-50'), false);
        });

        dropArea.addEventListener('drop', (e) => handleDrop(e, zone), false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop(e, zone) {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length > 0) {
            const input = document.getElementById(zone.zone);
            input.files = files;

            // Trigger change event
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        }
    }
}

// Search and booking functions
function showSearchModal() {
    document.getElementById('searchModal').classList.add('active');
    document.getElementById('searchInput').focus();
}

function closeSearchModal() {
    document.getElementById('searchModal').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (query.length < 2) {
        resultsContainer.innerHTML = '<p class="text-gray-500 text-center">Ketik minimal 2 karakter untuk mencari...</p>';
        return;
    }

    // Search in destinations
    const destResults = destinations.filter(dest =>
        dest.name.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.category.toLowerCase().includes(query)
    );

    // Search in packages
    const pkgResults = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(query) ||
        pkg.includes.some(item => item.toLowerCase().includes(query))
    );

    let html = '';

    if (destResults.length > 0) {
        html += '<h3 class="text-lg font-bold mb-3 text-blue-600">Destinasi</h3>';
        html += '<div class="grid md:grid-cols-2 gap-4 mb-6">';
        destResults.forEach(dest => {
            html += `
                <div class="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div class="flex items-center space-x-4">
                        <img src="${dest.image}" alt="${dest.name}" class="w-16 h-16 object-cover rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-semibold">${dest.name}</h4>
                            <p class="text-sm text-gray-600">${dest.description.substring(0, 60)}...</p>
                            <div class="flex justify-between items-center mt-2">
                                <span class="font-bold text-blue-600">${dest.price}</span>
                                <button onclick="showBookingModal(${dest.id}, 'destination', '${dest.name}', '${dest.price}'); closeSearchModal()" class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

    if (pkgResults.length > 0) {
        html += '<h3 class="text-lg font-bold mb-3 text-purple-600">Paket Wisata</h3>';
        html += '<div class="grid md:grid-cols-2 gap-4">';
        pkgResults.forEach(pkg => {
            html += `
                <div class="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div class="flex items-center space-x-4">
                        <img src="${pkg.image}" alt="${pkg.name}" class="w-16 h-16 object-cover rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-semibold">${pkg.name}</h4>
                            <p class="text-sm text-gray-600">${pkg.duration}</p>
                            <div class="flex justify-between items-center mt-2">
                                <span class="font-bold text-purple-600">${pkg.price}</span>
                                <button onclick="showBookingModal(${pkg.id}, 'package', '${pkg.name}', '${pkg.price}'); closeSearchModal()" class="bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600">
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

    if (destResults.length === 0 && pkgResults.length === 0) {
        html = '<div class="text-center py-8"><i class="fas fa-search text-4xl text-gray-300 mb-4"></i><p class="text-gray-500">Tidak ada hasil yang ditemukan untuk "' + query + '"</p></div>';
    }

    resultsContainer.innerHTML = html;
}

function showBookingModal(itemId, itemType, itemName, itemPrice) {
    document.getElementById('bookingItemId').value = itemId;
    document.getElementById('bookingItemType').value = itemType;
    document.getElementById('bookingItemName').textContent = itemName;
    document.getElementById('bookingTotal').textContent = itemPrice;

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="departureDate"]').min = today;

    document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

function handleBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Simulate booking process
    const bookingData = {
        itemId: formData.get('itemId'),
        itemType: formData.get('itemType'),
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        participants: formData.get('participants'),
        departureDate: formData.get('departureDate'),
        hotelPreference: formData.get('hotelPreference'),
        specialRequests: formData.get('specialRequests'),
        bookingId: 'WL' + Date.now(),
        status: 'pending'
    };

    // Store booking (in real app, this would go to a database)
    let bookings = JSON.parse(localStorage.getItem('wanderlust_bookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('wanderlust_bookings', JSON.stringify(bookings));

    closeBookingModal();
    event.target.reset();

    alert(`Terima kasih ${bookingData.fullName}! Pemesanan Anda telah diterima dengan ID: ${bookingData.bookingId}. Tim kami akan menghubungi Anda dalam 24 jam.`);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedDestinations();
    loadFeaturedPackages();
    setupDragAndDrop();

    // Close modal when clicking outside
    document.getElementById('loginModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLoginModal();
        }
    });

    // Close mobile menu when clicking outside
    document.getElementById('mobileMenu').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleMobileMenu();
        }
    });
});
