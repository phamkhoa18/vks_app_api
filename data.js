// Dữ liệu nội dung
const DATA = [
    {
      part: 'Phần Thứ Nhất',
      title: 'VIỆN KIỂM SÁT VÀ KIỂM SÁT VIÊN',
      sections: [
        {
          title: '1. VIỆN KIỂM SÁT',
          subsections: [
            {
              title: '1.1. Hệ thống Viện kiểm sát nhân dân',
              content: `
  I. HỆ THỐNG TỔ CHỨC VIỆN KIỂM SÁT NHÂN DÂN
  
  Theo quy định tại Điều 107 Hiến pháp năm 2013, Viện kiểm sát nhân dân gồm Viện kiểm sát nhân dân tối cao và các Viện kiểm sát khác do luật định. Cụ thể, theo quy định của Luật tổ chức Viện kiểm sát nhân dân năm 2014, hệ thống Viện kiểm sát nhân dân bao gồm:
  
  1. Viện kiểm sát nhân dân tối cao.
  2. Viện kiểm sát nhân dân cấp cao.
  3. Viện kiểm sát nhân dân tỉnh, thành phố trực thuộc trung ương (sau đây gọi là Viện kiểm sát nhân dân cấp tỉnh).
  4. Viện kiểm sát nhân dân huyện, quận, thị xã, thành phố thuộc tỉnh và tương đương (sau đây gọi là Viện kiểm sát nhân dân cấp huyện).
  5. Viện kiểm sát quân sự các cấp.
  
  II. VIỆN KIỂM SÁT NHÂN DÂN TỐI CAO
  
  Theo Khoản 2 Điều 42 Luật tổ chức Viện kiểm sát nhân dân năm 2014, Viện kiểm sát nhân dân tối cao gồm có Viện trưởng, các Phó Viện trưởng, các Kiểm sát viên và các Điều tra viên.
  
  Cơ cấu tổ chức của Viện kiểm sát nhân dân tối cao gồm có:
     a) Ủy ban kiểm sát;
     b) Văn phòng;
     c) Cơ quan điều tra;
     d) Các cục, vụ, viện và tương đương;
     đ) Các cơ sở đào tạo, bồi dưỡng, các cơ quan báo chí và các đơn vị sự nghiệp công lập khác;
     e) Viện kiểm sát quân sự trung ương.
  
  Viện kiểm sát nhân dân tối cao thực hành quyền công tố, kiểm sát hoạt động tư pháp, góp phần bảo đảm cho pháp luật được chấp hành nghiêm chỉnh và thống nhất.
  
  Viện trưởng Viện kiểm sát nhân dân tối cao là người lãnh đạo thống nhất toàn bộ hệ thống Viện kiểm sát nhân dân. Theo Điều 63 Luật tổ chức Viện kiểm sát nhân dân năm 2014, Viện trưởng Viện kiểm sát nhân dân tối cao có những nhiệm vụ và quyền hạn sau:
  
  1. Lãnh đạo, chỉ đạo, hướng dẫn, thanh tra, kiểm tra việc thực hiện nhiệm vụ, kế hoạch công tác và xây dựng Viện kiểm sát nhân dân; quyết định các vấn đề về công tác của Viện kiểm sát nhân dân tối cao.
  2. Ban hành thông tư, quyết định, chỉ thị, điều lệ, quy chế, chế độ công tác áp dụng đối với Viện kiểm sát nhân dân.
  3. Quy định bộ máy làm việc của Viện kiểm sát nhân dân tối cao và trình Ủy ban thường vụ Quốc hội phê chuẩn; quyết định bộ máy làm việc của Viện kiểm sát nhân dân cấp dưới; quy định bộ máy làm việc của Viện kiểm sát quân sự sau khi thống nhất với Bộ trưởng Bộ Quốc phòng, trình Ủy ban thường vụ Quốc hội phê chuẩn.
  4. Trình Chủ tịch nước bổ nhiệm, miễn nhiệm, cách chức Phó Viện trưởng Viện kiểm sát nhân dân tối cao, Kiểm sát viên Viện kiểm sát nhân dân tối cao.
  5. Bổ nhiệm, miễn nhiệm, cách chức Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp, Điều tra viên các ngạch, Kiểm tra viên các ngạch.
  6. Bổ nhiệm, miễn nhiệm, cách chức các chức vụ lãnh đạo, quản lý thuộc thẩm quyền.
  7. Kiến nghị xây dựng luật, pháp lệnh; chỉ đạo việc xây dựng và trình dự án luật, pháp lệnh theo quy định của pháp luật; đề nghị Ủy ban thường vụ Quốc hội giải thích Hiến pháp, luật, pháp lệnh.
  8. Trình Chủ tịch nước ý kiến của mình về những trường hợp người bị kết án xin ân giảm án tử hình.
  9. Chỉ đạo, tổ chức thực hiện việc tổng kết kinh nghiệm thực hành quyền công tố, kiểm sát hoạt động tư pháp của Viện kiểm sát nhân dân.
  10. Tham dự các phiên họp của Hội đồng thẩm phán Tòa án nhân dân tối cao bàn về việc hướng dẫn áp dụng thống nhất pháp luật.
  11. Kiến nghị với Chính phủ, các bộ, ngành trong công tác đấu tranh phòng, chống tội phạm và vi phạm pháp luật.
  12. Chịu trách nhiệm và báo cáo công tác trước Quốc hội; trong thời gian Quốc hội không họp thì chịu trách nhiệm và báo cáo công tác trước Ủy ban thường vụ Quốc hội và Chủ tịch nước; trả lời chất vấn, kiến nghị, yêu cầu của đại biểu Quốc hội.
  13. Thực hiện nhiệm vụ, quyền hạn khác theo quy định của pháp luật.
  
  Các Phó Viện trưởng Viện kiểm sát nhân dân tối cao và Kiểm sát viên Viện kiểm sát nhân dân tối cao do Chủ tịch nước bổ nhiệm, miễn nhiệm, cách chức theo đề nghị của Viện trưởng Viện kiểm sát nhân dân tối cao. Các Phó Viện trưởng giúp Viện trưởng thực thi nhiệm vụ.
  
  Theo Điều 43 Luật tổ chức Viện kiểm sát nhân dân năm 2014, Ủy ban kiểm sát Viện kiểm sát nhân dân tối cao gồm có:
     a) Viện trưởng Viện kiểm sát nhân dân tối cao;
     b) Các Phó Viện trưởng Viện kiểm sát nhân dân tối cao;
     c) Một số Kiểm sát viên Viện kiểm sát nhân dân tối cao do Ủy ban thường vụ Quốc hội quyết định theo đề nghị của Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  Ủy ban kiểm sát Viện kiểm sát nhân dân tối cao họp do Viện trưởng chủ trì để thảo luận và quyết định những vấn đề quan trọng sau đây:
     a) Chương trình, kế hoạch công tác của ngành Kiểm sát nhân dân;
     b) Dự án luật, pháp lệnh trình Quốc hội, Ủy ban thường vụ Quốc hội; báo cáo của Viện trưởng Viện kiểm sát nhân dân tối cao trình Quốc hội, Ủy ban thường vụ Quốc hội, Chủ tịch nước;
     c) Bộ máy làm việc của Viện kiểm sát nhân dân tối cao;
     d) Báo cáo của Viện trưởng Viện kiểm sát nhân dân tối cao trình Ủy ban thường vụ Quốc hội về những ý kiến của Viện trưởng không nhất trí với nghị quyết của Hội đồng Thẩm phán Tòa án nhân dân tối cao; kiến nghị của Viện kiểm sát nhân dân tối cao về công tác đấu tranh phòng, chống tội phạm gửi Thủ tướng Chính phủ;
     đ) Xét tuyển người đang công tác tại Viện kiểm sát nhân dân tối cao đủ điều kiện dự thi vào ngạch Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp;
     e) Đề nghị Hội đồng tuyển chọn Kiểm sát viên Viện kiểm sát nhân dân tối cao tuyển chọn, xem xét việc miễn nhiệm, cách chức Kiểm sát viên Viện kiểm sát nhân dân tối cao.
  
  Xem xét, đề nghị Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm lại, miễn nhiệm, cách chức Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp đang công tác tại Viện kiểm sát nhân dân tối cao.
  
  Ủy ban kiểm sát ban hành nghị quyết khi thực hiện thẩm quyền tại khoản 2 Điều này. Nghị quyết của Ủy ban kiểm sát phải được quá nửa tổng số thành viên biểu quyết tán thành; trường hợp biểu quyết ngang nhau thì thực hiện theo phía có ý kiến của Viện trưởng.
  
  Theo đề nghị của Viện trưởng Viện kiểm sát nhân dân tối cao, Ủy ban kiểm sát thảo luận, cho ý kiến về các vụ án hình sự, vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động phức tạp để Viện trưởng xem xét, quyết định.
  
  III. VIỆN KIỂM SÁT NHÂN DÂN CẤP CAO
  
  Theo Điều 44 Luật tổ chức Viện kiểm sát nhân dân 2014, tổ chức Viện kiểm sát nhân dân cấp cao gồm có:
     a) Ủy ban kiểm sát;
     b) Văn phòng;
     c) Các viện và tương đương.
  
  Viện kiểm sát nhân dân cấp cao có Viện trưởng Viện kiểm sát nhân dân cấp cao, các Phó Viện trưởng Viện kiểm sát nhân dân cấp cao, Kiểm sát viên, Kiểm tra viên, công chức khác và người lao động khác.
  
  Ủy ban kiểm sát Viện kiểm sát nhân dân cấp cao gồm có:
     a) Viện trưởng Viện kiểm sát nhân dân cấp cao;
     b) Các Phó Viện trưởng Viện kiểm sát nhân dân cấp cao;
     c) Một số Kiểm sát viên.
  
  Số lượng thành viên Ủy ban kiểm sát, các Kiểm sát viên quy định tại điểm c khoản 1 Điều này do Viện trưởng Viện kiểm sát nhân dân tối cao quyết định theo đề nghị của Viện trưởng Viện kiểm sát nhân dân cấp cao.
  
  Ủy ban kiểm sát Viện kiểm sát nhân dân cấp cao họp do Viện trưởng chủ trì để thảo luận và quyết định những vấn đề quan trọng sau đây:
     a) Việc thực hiện chương trình, kế hoạch công tác, chỉ thị, thông tư và quyết định của Viện kiểm sát nhân dân tối cao;
     b) Báo cáo tổng kết công tác của Viện kiểm sát nhân dân cấp cao;
     c) Xét tuyển người đang công tác tại Viện kiểm sát nhân dân cấp cao đủ điều kiện dự thi vào ngạch Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp;
     d) Xem xét, đề nghị Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm lại, miễn nhiệm, cách chức Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp đang công tác tại Viện kiểm sát nhân dân cấp cao.
  
  Ủy ban kiểm sát ban hành nghị quyết khi thực hiện thẩm quyền tại khoản 3 Điều này. Nghị quyết của Ủy ban kiểm sát phải được quá nửa tổng số thành viên biểu quyết tán thành; trường hợp biểu quyết ngang nhau thì thực hiện theo phía có ý kiến của Viện trưởng. Nếu Viện trưởng không nhất trí với ý kiến của đa số thành viên Ủy ban kiểm sát thì thực hiện theo quyết định của đa số, nhưng có quyền báo cáo Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  Theo đề nghị của Viện trưởng Viện kiểm sát nhân dân cấp cao, Ủy ban kiểm sát thảo luận, cho ý kiến về các vụ án hình sự, vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động phức tạp để Viện trưởng xem xét, quyết định.
  
  IV. VIỆN KIỂM SÁT NHÂN DÂN CẤP TỈNH
  
  Theo Điều 46 Luật tổ chức Viện kiểm sát nhân dân 2014, cơ cấu tổ chức của Viện kiểm sát nhân dân cấp tỉnh gồm có:
     a) Ủy ban kiểm sát;
     b) Văn phòng;
     c) Các phòng và tương đương.
  
  Viện kiểm sát nhân dân cấp tỉnh có Viện trưởng, các Phó Viện trưởng, Kiểm sát viên, Kiểm tra viên, công chức khác và người lao động khác.
  
  Ủy ban kiểm sát Viện kiểm sát nhân dân cấp tỉnh gồm có:
     a) Viện trưởng;
     b) Các Phó Viện trưởng;
     c) Một số Kiểm sát viên.
  
  Số lượng thành viên Ủy ban kiểm sát, các Kiểm sát viên quy định tại điểm c khoản 1 Điều này do Viện trưởng Viện kiểm sát nhân dân tối cao quyết định theo đề nghị của Viện trưởng Viện kiểm sát nhân dân cấp tỉnh.
  
  Ủy ban kiểm sát Viện kiểm sát nhân dân cấp tỉnh họp do Viện trưởng chủ trì để thảo luận và quyết định những vấn đề sau đây:
     a) Việc thực hiện chương trình, kế hoạch công tác, chỉ thị, thông tư và quyết định của Viện kiểm sát nhân dân tối cao; việc thực hiện chương trình, kế hoạch công tác của Viện kiểm sát nhân dân cấp cao;
     b) Báo cáo tổng kết công tác với Viện kiểm sát nhân dân cấp trên, báo cáo công tác trước Hội đồng nhân dân cùng cấp;
     c) Xét tuyển người đang công tác tại Viện kiểm sát nhân dân cấp tỉnh và cấp huyện đủ điều kiện dự thi vào ngạch Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp;
     d) Xem xét, đề nghị Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm lại, miễn nhiệm, cách chức Kiểm sát viên cao cấp, Kiểm sát viên trung cấp, Kiểm sát viên sơ cấp đang công tác tại Viện kiểm sát nhân dân cấp tỉnh và cấp huyện.
  
  Ủy ban kiểm sát ban hành nghị quyết khi thực hiện thẩm quyền tại khoản 3 Điều này. Nghị quyết của Ủy ban kiểm sát phải được quá nửa tổng số thành viên biểu quyết tán thành; trường hợp biểu quyết ngang nhau thì thực hiện theo phía có ý kiến của Viện trưởng. Nếu Viện trưởng không nhất trí với ý kiến của đa số thành viên Ủy ban kiểm sát thì thực hiện theo quyết định của đa số, nhưng có quyền báo cáo Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  Theo đề nghị của Viện trưởng Viện kiểm sát nhân dân cấp tỉnh, Ủy ban kiểm sát thảo luận, cho ý kiến về các vụ án hình sự, vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động phức tạp để Viện trưởng xem xét, quyết định.
  
  V. VIỆN KIỂM SÁT NHÂN DÂN CẤP HUYỆN
  
  Theo Điều 46 Luật tổ chức Viện kiểm sát nhân dân 2014, cơ cấu tổ chức của Viện kiểm sát nhân dân cấp huyện gồm có văn phòng và các phòng; những nơi chưa đủ điều kiện thành lập phòng thì có các bộ phận công tác và bộ máy giúp việc.
  
  Viện kiểm sát nhân dân cấp huyện có Viện trưởng, các Phó Viện trưởng, Kiểm sát viên, Kiểm tra viên, công chức khác và người lao động khác.
  
  VI. VIỆN KIỂM SÁT QUÂN SỰ TRUNG ƯƠNG
  
  Theo Điều 52 Luật tổ chức Viện kiểm sát nhân dân 2014, Viện kiểm sát quân sự trung ương thuộc cơ cấu Viện kiểm sát nhân dân tối cao.
  
  Tổ chức bộ máy của Viện kiểm sát quân sự trung ương gồm có:
     a) Ủy ban kiểm sát;
     b) Văn phòng;
     c) Cơ quan điều tra;
     d) Các phòng và tương đương.
  
  Viện kiểm sát quân sự trung ương có Viện trưởng, các Phó Viện trưởng, Kiểm sát viên, Kiểm tra viên; Thủ trưởng, các Phó thủ trưởng Cơ quan điều tra, Điều tra viên, quân nhân khác, công chức, viên chức và người lao động khác.
  
  VII. CHỨC NĂNG, NHIỆM VỤ, QUYỀN HẠN CỦA VIỆN KIỂM SÁT NHÂN DÂN
  
  Điều 2. Chức năng, nhiệm vụ của Viện kiểm sát nhân dân
  1. Viện kiểm sát nhân dân là cơ quan thực hành quyền công tố, kiểm sát hoạt động tư pháp của nước Cộng hòa xã hội chủ nghĩa Việt Nam.
  2. Viện kiểm sát nhân dân có nhiệm vụ bảo vệ Hiến pháp và pháp luật, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân, góp phần bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất.
  
  Điều 3. Chức năng thực hành quyền công tố của Viện kiểm sát nhân dân
  1. Thực hành quyền công tố là hoạt động của Viện kiểm sát nhân dân trong tố tụng hình sự để thực hiện việc buộc tội của Nhà nước đối với người phạm tội, được thực hiện ngay từ khi giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và trong suốt quá trình khởi tố, điều tra, truy tố, xét xử vụ án hình sự.
  2. Viện kiểm sát nhân dân thực hành quyền công tố nhằm bảo đảm:
     a) Mọi hành vi phạm tội, người phạm tội phải được phát hiện, khởi tố, điều tra, truy tố, xét xử kịp thời, nghiêm minh, đúng người, đúng tội, đúng pháp luật, không làm oan người vô tội, không để lọt tội phạm và người phạm tội;
     b) Không để người nào bị khởi tố, bị bắt, tạm giữ, tạm giam, bị hạn chế quyền con người, quyền công dân trái luật.
  3. Khi thực hiện chức năng thực hành quyền công tố, Viện kiểm sát nhân dân có nhiệm vụ, quyền hạn sau đây:
     a) Yêu cầu khởi tố, hủy bỏ quyết định khởi tố hoặc không khởi tố vụ án trái pháp luật, phê chuẩn, không phê chuẩn quyết định khởi tố bị can của Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra; trực tiếp khởi tố vụ án, khởi tố bị can trong những trường hợp do Bộ luật tố tụng hình sự quy định;
     b) Quyết định, phê chuẩn việc áp dụng, thay đổi, hủy bỏ các biện pháp hạn chế quyền con người, quyền công dân trong việc giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và trong việc khởi tố, điều tra, truy tố theo quy định của Bộ luật tố tụng hình sự;
     c) Hủy bỏ các quyết định tố tụng trái pháp luật khác trong việc giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và trong việc khởi tố, điều tra của Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra;
     d) Khi cần thiết đề ra yêu cầu điều tra và yêu cầu Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra thực hiện;
     đ) Yêu cầu cơ quan, tổ chức, cá nhân hữu quan cung cấp tài liệu để làm rõ tội phạm, người phạm tội;
     e) Trực tiếp giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố; tiến hành một số hoạt động điều tra để làm rõ căn cứ quyết định việc buộc tội đối với người phạm tội;
     g) Điều tra các tội phạm xâm phạm hoạt động tư pháp, các tội phạm về tham nhũng, chức vụ xảy ra trong hoạt động tư pháp theo quy định của luật;
     h) Quyết định việc áp dụng thủ tục rút gọn trong giai đoạn điều tra, truy tố;
     i) Quyết định việc truy tố, buộc tội bị cáo tại phiên tòa;
     k) Kháng nghị bản án, quyết định của Tòa án trong trường hợp Viện kiểm sát nhân dân phát hiện oan, sai, bỏ lọt tội phạm, người phạm tội;
     l) Thực hiện nhiệm vụ, quyền hạn khác trong việc buộc tội đối với người phạm tội theo quy định của Bộ luật tố tụng hình sự.
  
  Điều 4. Chức năng kiểm sát hoạt động tư pháp của Viện kiểm sát nhân dân
  1. Kiểm sát hoạt động tư pháp là hoạt động của Viện kiểm sát nhân dân để kiểm sát tính hợp pháp của các hành vi, quyết định của cơ quan, tổ chức, cá nhân trong hoạt động tư pháp, được thực hiện ngay từ khi tiếp nhận và giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và trong suốt quá trình giải quyết vụ án hình sự; trong việc giải quyết vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động; việc thi hành án, việc giải quyết khiếu nại, tố cáo trong hoạt động tư pháp; các hoạt động tư pháp khác theo quy định của pháp luật.
  2. Viện kiểm sát nhân dân kiểm sát hoạt động tư pháp nhằm bảo đảm:
     a) Việc tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố; việc giải quyết vụ án hình sự, vụ án hành chính, vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động; việc thi hành án; việc giải quyết khiếu nại, tố cáo trong hoạt động tư pháp; các hoạt động tư pháp khác được thực hiện đúng quy định của pháp luật;
     b) Việc bắt, tạm giữ, tạm giam, thi hành án phạt tù, chế độ tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù theo đúng quy định của pháp luật; quyền con người và các quyền, lợi ích hợp pháp khác của người bị bắt, tạm giữ, tạm giam, người chấp hành án phạt tù không bị luật hạn chế phải được tôn trọng và bảo vệ;
     c) Bản án, quyết định của Tòa án đã có hiệu lực pháp luật phải được thi hành nghiêm chỉnh;
     đ) Mọi vi phạm pháp luật trong hoạt động tư pháp phải được phát hiện, xử lý kịp thời, nghiêm minh.
  3. Khi thực hiện chức năng kiểm sát hoạt động tư pháp, Viện kiểm sát nhân dân có nhiệm vụ, quyền hạn sau đây:
     a) Yêu cầu cơ quan, tổ chức, cá nhân thực hiện hoạt động tư pháp theo đúng quy định của pháp luật; tự kiểm tra việc tiến hành hoạt động tư pháp thuộc thẩm quyền và thông báo kết quả cho Viện kiểm sát nhân dân; cung cấp hồ sơ, tài liệu để Viện kiểm sát nhân dân kiểm sát tính hợp pháp của các hành vi, quyết định trong hoạt động tư pháp;
     b) Trực tiếp kiểm sát; xác minh, thu thập tài liệu để làm rõ vi phạm pháp luật của cơ quan, tổ chức, cá nhân trong hoạt động tư pháp;
     c) Xử lý vi phạm; yêu cầu, kiến nghị cơ quan, tổ chức, cá nhân có thẩm quyền khắc phục, xử lý nghiêm minh vi phạm pháp luật trong hoạt động tư pháp; kiến nghị cơ quan, tổ chức hữu quan áp dụng các biện pháp phòng ngừa vi phạm pháp luật và tội phạm;
     d) Kháng nghị bản án, quyết định của Tòa án có vi phạm pháp luật; kiến nghị hành vi, quyết định của Tòa án có vi phạm pháp luật; kháng nghị hành vi, quyết định có vi phạm pháp luật của cơ quan, người có thẩm quyền khác trong hoạt động tư pháp;
     đ) Kiểm sát việc giải quyết khiếu nại, tố cáo trong hoạt động tư pháp; giải quyết khiếu nại, tố cáo thuộc thẩm quyền;
     e) Thực hiện nhiệm vụ, quyền hạn khác trong kiểm sát hoạt động tư pháp theo quy định của pháp luật.
  
  VIII. NGUYÊN TẮC CƠ BẢN TRONG TỔ CHỨC VÀ HOẠT ĐỘNG CỦA VIỆN KIỂM SÁT NHÂN DÂN
  
  Viện kiểm sát nhân dân được tổ chức và hoạt động trên cơ sở các nguyên tắc tổ chức và hoạt động của bộ máy nhà nước ta nói chung. Song, do có vị trí, chức năng và nhiệm vụ mang tính đặc thù nên hệ thống các Viện kiểm sát nhân dân được tổ chức và hoạt động theo những nguyên tắc đặc thù. Đó là nguyên tắc tập trung, thống nhất lãnh đạo trong ngành và nguyên tắc độc lập, không lệ thuộc vào bất cứ một cơ quan nhà nước nào ở địa phương.
  
  Nguyên tắc tập trung, thống nhất lãnh đạo trong ngành
  Nguyên tắc này bắt nguồn từ nguyên tắc tập trung dân chủ và nhằm bảo đảm tính thống nhất của pháp chế.
  Các cơ quan nhà nước ở địa phương một mặt trực thuộc Chính phủ hoặc Bộ chủ quản, mặt khác lại trực thuộc Hội đồng nhân dân hoặc ủy ban nhân dân địa phương. Nguyên tắc này được gọi là nguyên tắc phụ thuộc hai chiều.
  Viện kiểm sát nhân dân ở nước ta không được tổ chức và hoạt động theo nguyên tắc phụ thuộc hai chiều nêu trên, mà theo nguyên tắc tập trung, thống nhất lãnh đạo trong ngành.
  Theo nguyên tắc này, Viện kiểm sát nhân dân do Viện trưởng lãnh đạo. Viện trưởng Viện kiểm sát nhân dân cấp dưới chịu sự lãnh đạo của Viện trưởng Viện kiểm sát nhân dân cấp trên. Viện trưởng Viện kiểm sát nhân dân các địa phương, Viện trưởng Viện kiểm sát quân sự các cấp chịu sự lãnh đạo thống nhất của Viện trưởng Viện kiểm sát nhân dân tối cao. Viện trưởng, Phó viện trưởng, Kiểm sát viên Viện kiểm sát nhân dân các địa phương, Phó viện trưởng Viện kiểm sát quân sự quân khu và khu vực, Điều tra viên của Viện kiểm sát nhân dân đều do Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm, miễn nhiệm và cách chức.
  Như vậy, tất cả các Viện kiểm sát nhân dân từ trên xuống dưới tạo thành một hệ thống thống nhất. Mọi hoạt động của Viện kiểm sát nhân dân, dù ở cấp nào, đều đặt dưới sự lãnh đạo của Viện trưởng. Viện trưởng Viện kiểm sát nhân dân phải chịu trách nhiệm cá nhân về toàn bộ hoạt động của Viện kiểm sát do mình lãnh đạo trước Viện trưởng Viện kiểm sát nhân dân tối cao. Viện trưởng Viện kiểm sát nhân dân tối cao chịu trách nhiệm cá nhân về hoạt động của toàn ngành kiểm sát trước Quốc hội, ủy ban Thường vụ Quốc hội, Chủ tịch nước.
  Việc thực hiện nguyên tắc tập trung, thống nhất lãnh đạo trong ngành bảo đảm cho các cấp kiểm sát hoạt động đồng bộ, thống nhất, tạo điều kiện nâng cao hiệu quả hoạt động thực hành quyền công tố và hoạt động kiểm sát.
  Tuy nhiên, cũng cần lưu ý là ở Viện kiểm sát nhân dân tối cao, Viện kiểm sát nhân dân cấp cao và Viện kiểm sát nhân dân cấp tỉnh có Ủy ban kiểm sát. Ủy ban kiểm sát làm việc tập thể, thảo luận và quyết định theo đa số những vấn đề quan trọng như phương hướng, nhiệm vụ, kế hoạch công tác, dự án luật, dự án pháp lệnh... Khi Viện trưởng không nhất trí với ý kiến của đa số thành viên ủy ban kiểm sát thì vẫn thực hiện theo quyết định của đa số, nhưng có quyền báo cáo lên cấp trên (lên Ủy ban Thường vụ Quốc hội nếu là Viện trưởng Viện kiểm sát nhân dân tối cao; lên Viện trưởng Viện kiểm sát nhân dân tối cao nếu là Viện trưởng Viện kiểm sát nhân dân cấp cao và cấp tỉnh). Như vậy, quy định này vừa bảo đảm mở rộng dân chủ, phát huy trí tuệ của tập thể, vừa đề cao trách nhiệm của Viện trưởng.
  
  Nguyên tắc không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương
  Trong tổ chức và hoạt động của mình, Viện kiểm sát nhân dân không lệ thuộc vào bất cứ một cơ quan nhà nước nào ở địa phương. Nguyên tắc này có mối quan hệ mật thiết với nguyên tắc tập trung, thống nhất lãnh đạo trong ngành. Nguyên tắc này nhằm tạo ra điều kiện để ngành kiểm sát nhân dân thực hiện tốt nhiệm vụ của mình là bảo đảm cho pháp luật được thi hành một cách nghiêm chỉnh và thống nhất.
  Theo Hiến pháp năm 2013, Luật tổ chức của Viện kiểm sát nhân dân trong năm 2014, toàn bộ hoạt động của Viện kiểm sát nhân dân được đặt dưới sự giám sát toàn diện, thường xuyên và chặt chẽ của Quốc hội, Ủy ban Thường vụ Quốc hội và Chủ tịch nước. Viện trưởng Viện kiểm sát nhân dân tối cao chịu trách nhiệm và báo cáo công tác trước Quốc hội, trong thời gian Quốc hội không họp thì chịu trách nhiệm và báo cáo trước Ủy ban Thường vụ Quốc hội và Chủ tịch nước.
  Nội dung nguyên tắc Viện kiểm sát nhân dân không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương thể hiện ở chỗ: Các Viện kiểm sát nhân dân thực hiện chức năng, nhiệm vụ của mình một cách độc lập, không chịu sự chi phối bởi các cơ quan nhà nước ở địa phương, mà chỉ chịu sự lãnh đạo của Viện trưởng Viện kiểm sát nhân dân tối cao. Khi hoạt động, các Viện kiểm sát nhân dân chỉ phụ thuộc vào Hiến pháp, các đạo luật, pháp lệnh và các văn bản quy phạm pháp luật của Quốc hội, ủy ban thường vụ Quốc hội, Chính phủ, Thủ tướng Chính phủ và Chỉ thị của Viện trưởng Viện kiểm sát nhân dân tối cao. Điều đó cũng có nghĩa là các cơ quan nhà nước ở địa phương không có quyền can thiệp vào hoạt động của Viện kiểm sát nhân dân.
  Về mặt tổ chức, Viện trưởng Viện kiểm sát nhân dân tối cao quyết định bộ máy và biên chế của Viện kiểm sát nhân dân các cấp; bổ nhiệm, miễn nhiệm, cách chức Viện trưởng, Phó Viện trưởng, Kiểm sát viên các Viện kiểm sát nhân dân địa phương.
  Thừa nhận nguyên tắc không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương cũng cần lưu ý là Viện trưởng Viện kiểm sát nhân dân địa phương chịu sự giám sát của Hội đồng nhân dân cùng cấp, chịu trách nhiệm báo cáo công tác trước Hội đồng nhân dân, trả lời chất vấn của các đại biểu Hội đồng nhân dân về tình hình chấp hành pháp luật ở địa phương và hoạt động của Viện kiểm sát nhân dân ở địa phương. Mặt khác, qua thực tiễn hoạt động của Viện kiểm sát nhân dân, Viện trưởng có quyền kiến nghị với Hội đồng nhân dân về việc phòng ngừa tội phạm và những biểu hiện vi phạm pháp luật để bảo đảm cho pháp luật được chấp hành nghiêm chỉnh.
  
  IX. KIỂM SÁT VIÊN
  
  2.1. Tiêu chuẩn Kiểm sát viên
  
  Tiêu chuẩn chung:
  Căn cứ Điều 75 Luật tổ chức Viện kiểm sát nhân dân 2014 thì Công dân Việt Nam trung thành với Tổ quốc và Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam, có phẩm chất đạo đức tốt, liêm khiết và trung thực, bản lĩnh chính trị vững vàng, có trình độ cử nhân luật, đã được đào tạo về nghiệp vụ kiểm sát, có tinh thần kiên quyết bảo vệ pháp chế xã hội chủ nghĩa, có thời gian làm công tác thực tiễn theo quy định của Luật tổ chức Viện kiểm sát nhân dân 2014, có sức khoẻ bảo đảm hoàn thành nhiệm vụ được giao, thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên.
  Việc xác định các tiêu chuẩn Kiểm sát viên quy định tại Điều 75 Luật tổ chức Viện kiểm sát nhân dân 2014 cần căn cứ vào quy định tại Thông tư liên tịch số 01/2003/TTLT-TANDTC-BQP-BNV-UBTWMTTQVN để vận dụng cho phù hợp.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên:
  
  Tiêu chuẩn cụ thể của Kiểm sát viên sơ cấp:
  Theo quy định tại Điều 77 Luật tổ chức Viện kiểm sát nhân dân 2014 thì người có đủ tiêu chuẩn quy định tại Điều 75 của luật này và có đủ các điều kiện sau đây thì có thể được bổ nhiệm làm Kiểm sát viên sơ cấp của Viện kiểm sát nhân dân; nếu là sĩ quan quân đội tại ngũ thì có thể được bổ nhiệm làm Kiểm sát viên sơ cấp của Viện kiểm sát quân sự:
  1. Có thời gian làm công tác pháp luật từ 04 năm trở lên;
  2. Có năng lực thực hành quyền công tố, kiểm sát hoạt động tư pháp;
  3. Đã trúng tuyển kỳ thi vào ngạch Kiểm sát viên sơ cấp.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên trung cấp:
  Theo quy định tại Điều 77 Luật tổ chức Viện kiểm sát nhân dân 2014 thì người có đủ tiêu chuẩn quy định tại Điều 75 của luật này và có đủ các điều kiện sau đây thì có thể được bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát nhân dân; nếu là sĩ quan quân đội tại ngũ thì có thể được bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát quân sự:
     a) Đã là Kiểm sát viên sơ cấp ít nhất 05 năm;
     b) Có năng lực thực hành quyền công tố, kiểm sát hoạt động tư pháp;
     c) Có khả năng hướng dẫn nghiệp vụ thực hành quyền công tố, kiểm sát hoạt động tư pháp đối với Kiểm sát viên sơ cấp;
     d) Đã trúng tuyển kỳ thi vào ngạch Kiểm sát viên trung cấp.
  2. Trong trường hợp do nhu cầu cán bộ của Viện kiểm sát nhân dân, người đã có thời gian làm công tác pháp luật từ 10 năm trở lên, có đủ tiêu chuẩn quy định tại Điều 75 của Luật này, các điểm b, c và d khoản 1 Điều này thì có thể được bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát nhân dân; nếu là sĩ quan quân đội tại ngũ thì có thể được bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát quân sự.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên cao cấp:
  Theo quy định tại Điều 79 Luật tổ chức Viện kiểm sát nhân dân 2014 thì người có đủ tiêu chuẩn quy định tại Điều 75 của luật này và có đủ các điều kiện sau đây thì có thể được bổ nhiệm làm Kiểm sát viên cao cấp của Viện kiểm sát nhân dân; nếu là sĩ quan quân đội tại ngũ thì có thể được bổ nhiệm làm Kiểm sát viên cao cấp của Viện kiểm sát quân sự:
     a) Đã là Kiểm sát viên trung cấp ít nhất 05 năm;
     b) Có năng lực thực hành quyền công tố, kiểm sát hoạt động tư pháp;
     c) Có khả năng hướng dẫn nghiệp vụ thực hành quyền công tố, kiểm sát hoạt động tư pháp đối với Kiểm sát viên cấp dưới;
     d) Đã trúng tuyển kỳ thi vào ngạch Kiểm sát viên cao cấp.
  2. Trong trường hợp do nhu cầu cán bộ của Viện kiểm sát nhân dân, người đã có thời gian làm công tác pháp luật từ 15 năm trở lên, có đủ tiêu chuẩn quy định tại Điều 75 của Luật này, các điểm b, c và d khoản 1 Điều này thì có thể được bổ nhiệm làm Kiểm sát viên cao cấp của Viện kiểm sát nhân dân; nếu là sĩ quan quân đội tại ngũ thì có thể được bổ nhiệm làm Kiểm sát viên cao cấp của Viện kiểm sát quân sự.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên Viện kiểm sát nhân dân tối cao:
  Theo quy định tại Điều 79 Luật tổ chức Viện kiểm sát nhân dân 2014 thì người có đủ tiêu chuẩn quy định tại Điều 75 của Luật này và có đủ các điều kiện sau đây thì có thể được tuyển chọn, bổ nhiệm làm Kiểm sát viên Viện kiểm sát nhân dân tối cao:
     a) Đã là Kiểm sát viên cao cấp ít nhất 05 năm;
     b) Có năng lực chỉ đạo, điều hành công tác thực hành quyền công tố, kiểm sát hoạt động tư pháp của Viện kiểm sát nhân dân tối cao;
     c) Có năng lực giải quyết những vấn đề quan trọng thuộc thẩm quyền của Viện kiểm sát nhân dân tối cao.
  2. Trong trường hợp do nhu cầu cán bộ của Viện kiểm sát nhân dân, người đã có thời gian làm công tác pháp luật từ 20 năm trở lên, có đủ tiêu chuẩn quy định tại Điều 75 của Luật này, điểm b và điểm c khoản 1 Điều này thì có thể được tuyển chọn, bổ nhiệm làm Kiểm sát viên Viện kiểm sát nhân dân tối cao.
  
  2.2. Quy trình tuyển chọn, bổ nhiệm, miễn nhiệm, cách chức Kiểm sát viên
  
  Quy trình tuyển chọn, bổ nhiệm Kiểm sát viên:
  Quy trình tuyển chọn, bổ nhiệm Kiểm sát viên VKSND và Viện kiểm sát quân sự các cấp gồm các bước sau:
  - Một là, Ban cán sự Đảng VKSND, Viện kiểm sát quân sự các cấp căn cứ vào nhu cầu cán bộ, xác định chủ trương bổ nhiệm Kiểm sát viên thuộc thẩm quyền quản lý.
  - Hai là, cơ quan tham mưu về công tác cán bộ lập hồ sơ trích ngang của cán bộ, tập hợp các loại đơn thư khiếu nại, tố cáo và các báo cáo kết luận có liên quan đến việc bổ nhiệm, bổ nhiệm lại đối với cán bộ (nếu có) để báo cáo Ban cán sự Đảng cùng cấp xem xét.
  - Ba là, cán bộ thuộc đối tượng bổ nhiệm, bổ nhiệm lại làm bản tự kiểm điểm, đánh giá ưu khuyết điểm việc thực hiện chức trách nhiệm vụ được giao, kèm theo ý kiến nhận xét đánh giá của thủ trưởng đơn vị.
  - Bốn là, đơn vị có cán bộ thuộc đối tượng bổ nhiệm, bổ nhiệm lại tổ chức cho tập thể Kiểm sát viên, cán bộ trong đơn vị tham gia ý kiến. Tổ chức bỏ phiếu thăm dò tín nhiệm (với đối tượng bổ nhiệm lần đầu), lấy ý kiến nhận xét của chi uỷ, chi bộ, cơ sở, trưởng ban công tác mặt trận, tổ dân phố... nơi cư trú thường xuyên của đối tượng được đề nghị xem xét bổ nhiệm. Với cán bộ bổ nhiệm lại thực hiện việc nhận xét, đánh giá cán bộ theo đúng quy trình trước khi xem xét bổ nhiệm lại.
  - Năm là, Viện trưởng VKSND cấp tỉnh, Viện trưởng Viện kiểm sát quân sự cấp quân khu, thủ trưởng các đơn vị thuộc VKSND tối cao cùng với tập thể lãnh đạo tổng hợp kết quả tín nhiệm và xác minh, kết luận những vấn đề mới nẩy sinh đối với cán bộ (nếu có).
  - Sáu là, Lãnh đạo đơn vị, Thường vụ Đảng uỷ hoặc Đảng uỷ (chi uỷ) cơ quan, đơn vị... nhận xét đánh giá và có ý kiến đề nghị bằng văn bản về nhân sự được đề nghị bổ nhiệm.
  - Bảy là, Uỷ ban kiểm sát VKSND, Viện kiểm sát quân sự các cấp họp xét chọn và đề nghị Hội đồng tuyển chọn Kiểm sát viên Viện kiểm sát các cấp tuyển chọn Kiểm sát viên.
  - Tám là, Hội đồng tuyển chọn Kiểm sát viên Viện kiểm sát các cấp họp tuyển chọn người đủ tiêu chuẩn theo quy định của Pháp lệnh Kiểm sát viên để trình cấp có thẩm quyền xem xét bổ nhiệm. Trên cơ sở kết quả của Hội đồng tuyển chọn, Viện trưởng VKSND tối cao trình Chủ tịch nước bổ nhiệm Kiểm sát viên VKSND tối cao, Kiểm sát viên Viện kiểm sát quân sự Trung ương; Chủ tịch Hội đồng tuyển chọn Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị Viện trưởng VKSND tối cao bổ nhiệm Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Kiểm sát viên Viện kiểm sát quân sự cấp quân khu, khu vực.
  
  Theo quy định tại Điều 89 Luật tổ chức Viện kiểm sát nhân dân 2014 thì Kiểm sát viên được miễn nhiệm trong các trường hợp sau:
  1. Kiểm sát viên đương nhiên được miễn nhiệm chức danh Kiểm sát viên khi nghỉ hưu, thôi việc, chuyển ngành.
  2. Kiểm sát viên có thể được miễn nhiệm chức danh Kiểm sát viên vì lý do sức khỏe, hoàn cảnh gia đình hoặc vì lý do khác mà xét thấy không thể hoàn thành nhiệm vụ được giao.
  
  Quy trình miễn nhiệm Kiểm sát viên:
  Quy trình miễn nhiệm Kiểm sát viên tiến hành như sau:
  - Một là, Kiểm sát viên làm đơn xin miễn nhiệm, nêu rõ lý do xin miễn nhiệm;
  - Hai là, Uỷ ban kiểm sát họp xét để trình Hội đồng tuyển chọn xem xét;
  - Ba là, Hội đồng tuyển chọn họp xem xét, trình cấp có thẩm quyền quyết định;
  - Bốn là, trên cơ sở kết quả của Hội đồng tuyển chọn, Viện trưởng VKSND tối cao trình Chủ tịch nước miễn nhiệm Kiểm sát viên VKSND tối cao, Kiểm sát viên Viện kiểm sát quân sự Trung ương; Chủ tịch Hội đồng tuyển chọn Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị Viện trưởng VKSND tối cao miễn nhiệm chức danh Kiểm sát viên.
  
  Quy trình đề nghị cách chức Kiểm sát viên VKSND các cấp:
  Các bước tiến hành cách chức Kiểm sát viên.
  - Một là, Kiểm sát viên bị đề nghị cách chức làm bản tự kiểm điểm;
  - Hai là, cơ quan, đơn vị nơi Kiểm sát viên công tác tổ chức kiểm tra xác minh vi phạm và kiểm điểm làm rõ sai phạm của người bị đề nghị cách chức;
  - Ba là, Hội đồng kỷ luật cơ quan, đơn vị nơi Kiểm sát viên công tác họp xem xét đề nghị hình thức kỷ luật để cấp có thẩm quyền quyết định;
  - Bốn là, Uỷ ban kiểm sát Viện kiểm sát các cấp họp xem xét việc cách chức đối với chức danh Kiểm sát viên;
  - Năm là, Hội đồng tuyển chọn Kiểm sát viên các cấp họp xem xét đề nghị cách chức chức danh Kiểm sát viên;
  - Sáu là, đề nghị cách chức.
  
  Theo quy định tại Điều 89 Luật tổ chức Viện kiểm sát nhân dân 2014 thì Kiểm sát viên đương nhiên bị cách chức chức danh Kiểm sát viên khi bị kết tội bằng bản án của Tòa án đã có hiệu lực pháp luật.
  Tùy theo tính chất, mức độ vi phạm, Kiểm sát viên có thể bị cách chức chức danh Kiểm sát viên khi thuộc một trong các trường hợp sau đây:
     a) Vi phạm trong khi thực hành quyền công tố, kiểm sát hoạt động tư pháp;
     b) Vi phạm quy định tại Điều 84 của Luật này;
     c) Vi phạm về phẩm chất đạo đức;
     d) Có hành vi vi phạm pháp luật khác.
  
  2.3. Nhiệm vụ, quyền hạn của Kiểm sát viên
  
  Nhiệm vụ, quyền hạn chung:
  1. Nhiệm vụ, quyền hạn cụ thể của Kiểm sát viên khi thực hành quyền công tố, kiểm sát hoạt động tư pháp do luật định.
  2. Trong vụ việc có nhiều Kiểm sát viên tham gia giải quyết thì Kiểm sát viên ở ngạch thấp hơn phải tuân theo sự phân công, chỉ đạo của Kiểm sát viên ở ngạch cao hơn.
  3. Khi thực hiện nhiệm vụ, Kiểm sát viên có quyền ra quyết định, kết luận, yêu cầu, kiến nghị theo quy định của pháp luật.
  
  Kiểm sát viên không được làm những việc sau đây:
  1. Những việc mà pháp luật quy định cán bộ, công chức không được làm.
  2. Tư vấn cho người bị bắt, bị tạm giữ, bị can, bị cáo, đương sự hoặc người tham gia tố tụng khác làm cho việc giải quyết vụ án, vụ việc không đúng quy định của pháp luật.
  3. Can thiệp vào việc giải quyết vụ án, vụ việc hoặc lợi dụng ảnh hưởng của mình tác động đến người có trách nhiệm giải quyết vụ án, vụ việc.
  4. Đưa hồ sơ, tài liệu của vụ án, vụ việc ra khỏi cơ quan nếu không vì nhiệm vụ được giao hoặc không được sự đồng ý của người có thẩm quyền.
  5. Tiếp bị can, bị cáo, đương sự hoặc người tham gia tố tụng khác trong vụ án, vụ việc mà mình có thẩm quyền giải quyết ngoài nơi quy định.
  
  Nhiệm vụ, quyền hạn cụ thể:
  Căn cứ Điều 37 BLTTHS thì khi được phân công thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng đối với vụ án hình sự, Kiểm sát viên có những nhiệm vụ và quyền hạn sau:
     + Kiểm sát việc khởi tố, kiểm sát các hoạt động điều tra và việc lập hồ sơ vụ án của Cơ quan điều tra;
     + Đề ra yêu cầu điều tra;
     + Triệu tập và hỏi cung bị can; triệu tập và lấy lời khai của người làm chứng, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án;
     + Kiểm sát việc bắt, tạm giữ, tạm giam;
     + Tham gia phiên toà; đọc cáo trạng, quyết định của Viện kiểm sát liên quan đến việc giải quyết vụ án; hỏi, đưa ra chứng cứ và thực hiện việc luận tội; phát biểu quan điểm về việc giải quyết vụ án, tranh luận với những người tham gia tố tụng tại phiên toà;
     + Kiểm sát việc tuân theo pháp luật trong hoạt động xét xử của Tòa án, của những người tham gia tố tụng và kiểm sát các bản án, quyết định của Toà án;
     + Kiểm sát việc thi hành bản án, quyết định của Toà án;
     + Thực hiện các nhiệm vụ, quyền hạn khác thuộc thẩm quyền của Viện kiểm sát theo sự phân công của Viện trưởng Viện kiểm sát.
  Kiểm sát viên phải chịu trách nhiệm trước pháp luật và trước Viện trưởng Viện kiểm sát về những hành vi và quyết định của mình.
  
  Căn cứ Điều 45 BLTTDS năm 2005 được sửa đổi, bổ sung năm 2011 thì khi được phân công thực hiện kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng dân sự, Kiểm sát viên có những nhiệm vụ, quyền hạn sau đây:
     + Kiểm sát việc tuân theo pháp luật trong việc giải quyết các vụ án dân sự, giải quyết việc dân sự của Toà án;
     + Kiểm sát việc tuân theo pháp luật của những người tham gia tố tụng;
     + Kiểm sát các bản án, quyết định của Toà án;
     + Tham gia phiên toà xét xử vụ án dân sự, phiên họp giải quyết việc dân sự theo quy định của BLTTDS và phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ việc dân sự;
     + Thực hiện nhiệm vụ, quyền hạn khác thuộc thẩm quyền của Viện kiểm sát theo sự phân công của Viện trưởng Viện kiểm sát.
     + Ngoài các quy định cụ thể trong BLTTHS, BLTTDS thì Kiểm sát viên còn có các nhiệm vụ, quyền hạn khác do pháp luật quy định.
  
  Trách nhiệm của Kiểm sát viên:
  Khi thực hành quyền công tố, kiểm sát hoạt động tư pháp, Kiểm sát viên tuân theo pháp luật và chịu sự chỉ đạo của Viện trưởng Viện kiểm sát nhân dân.
  Kiểm sát viên tuân theo pháp luật và phải chịu trách nhiệm trước pháp luật về hành vi, quyết định của mình trong việc thực hành quyền công tố, tranh tụng tại phiên tòa và kiểm sát hoạt động tư pháp.
  Kiểm sát viên phải chấp hành quyết định của Viện trưởng Viện kiểm sát nhân dân. Khi có căn cứ cho rằng quyết định đó là trái pháp luật thì Kiểm sát viên có quyền từ chối nhiệm vụ được giao và phải kịp thời báo cáo bằng văn bản với Viện trưởng; trường hợp Viện trưởng vẫn quyết định việc thi hành thì phải có văn bản và Kiểm sát viên phải chấp hành nhưng không phải chịu trách nhiệm về hậu quả của việc thi hành, đồng thời báo cáo lên Viện trưởng Viện kiểm sát nhân dân cấp trên có thẩm quyền. Viện trưởng đã quyết định phải chịu trách nhiệm trước pháp luật về quyết định của mình.
  Viện trưởng Viện kiểm sát nhân dân có trách nhiệm kiểm tra, xử lý nghiêm minh đối với vi phạm pháp luật của Kiểm sát viên khi thực hiện nhiệm vụ được giao; có quyền rút, đình chỉ hoặc hủy bỏ các quyết định trái pháp luật của Kiểm sát viên.
  
  Kiểm sát viên phải giữ bí mật nhà nước và bí mật công tác theo quy định của pháp luật.
  Kiểm sát viên phải tôn trọng nhân dân và chịu sự giám sát của nhân dân.
  Kiểm sát viên phải gương mẫu trong việc chấp hành Hiến pháp, pháp luật, có phẩm chất đạo đức tốt, lối sống lành mạnh và tôn trọng các quy tắc sinh hoạt công cộng; tham gia tuyên truyền, phổ biến pháp luật.
  Kiểm sát viên có trách nhiệm học tập, nghiên cứu để nâng cao năng lực và trình độ chuyên môn nghiệp vụ kiểm sát.
  Kiểm sát viên có trách nhiệm thực hiện nghiêm túc Quyết định số 296/2008/QĐ-VKSTC ngày 18/6/2008 của Viện trưởng VKSND tối cao ban hành Quy tắc ứng xử của cán bộ, công chức, viên chức ngành Kiểm sát nhân dân.`
            },
            {
              title: '1.2. Vị trí, vai trò của Viện kiểm sát nhân dân trong bộ máy nhà nước',
              content: `Vị trí của Viện kiểm sát nhân dân được xác lập trong Hiến pháp. Vị trí của Viện kiểm sát nhân dân trong Bộ máy nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam được thể hiện thông qua các nguyên tắc tổ chức hoạt động của Bộ máy nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam nói chung, nguyên tắc tổ chức, hoạt động của Viện kiểm sát nhân dân nói riêng.
  
  Ở nước Cộng hoà xã hội chủ nghĩa Việt Nam, bộ máy nhà nước được tổ chức theo nguyên tắc tập trung dân chủ. Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện quyền lập pháp, hành pháp và tư pháp.
  
  - Viện kiểm sát nhân dân tối cao, các Viện kiểm sát nhân dân địa phương, các Viện kiểm sát quân sự là các cơ quan thực hành quyền công tố và kiểm sát hoạt động tư pháp của nước Cộng hoà xã hội chủ nghĩa Việt Nam.
  
  - Viện trưởng Viện kiểm sát nhân dân tối cao do Quốc hội bầu, miễn nhiệm, bãi nhiệm theo đề nghị của Chủ tịch nước. Nhiệm kỳ của Viện trưởng Viện kiểm sát nhân dân tối cao theo nhiệm kỳ của Quốc hội. Viện trưởng Viện kiểm sát nhân dân tối cao chịu sự giám sát của Quốc hội, chịu trách nhiệm và báo cáo công tác trước Quốc hội, hoặc trước Uỷ ban thường vụ Quốc hội và Chủ tịch nước trong thời gian Quốc hội không họp.
  
  Phó Viện trưởng Viện kiểm sát nhân dân tối cao và Kiểm sát viên Viện kiểm sát nhân dân tối cao do Chủ tịch nước bổ nhiệm, miễn nhiệm, cách chức theo đề nghị của Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  Viện trưởng, Phó Viện trưởng, Kiểm sát viên Viện kiểm sát nhân dân địa phương, Phó Viện trưởng Viện kiểm sát quân sự Trung ương, Viện trưởng, Phó Viện trưởng, Kiểm sát viên Viện kiểm sát quân sự quân khu và tương đương, Viện kiểm sát quân sự khu vực, Điều tra viên của Viện kiểm sát nhân dân tối cao và Viện kiểm sát quân sự Trung ương đều do Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm, miễn nhiệm, cách chức.
  
  - Hệ thống Viện kiểm sát nhân dân là một hệ thống thống nhất, bao gồm Viện kiểm sát nhân dân tối cao, các Viện kiểm sát nhân dân địa phương, các Viện kiểm sát quân sự. Viện kiểm sát nhân dân do Viện trưởng lãnh đạo. Viện trưởng Viện kiểm sát nhân dân cấp dưới chịu sự lãnh đạo của Viện trưởng Viện kiểm sát nhân dân cấp trên; Viện trưởng VKSND các địa phương, Viện trưởng Viện kiểm sát quân sự các cấp chịu sự lãnh đạo thống nhất của Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  - Viện kiểm sát nhân dân cùng với các cơ quan tư pháp khác là công cụ hữu hiệu bảo vệ pháp luật, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân, góp phần bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất, góp phần bảo vệ công lý, giữ vững an ninh chính trị, trật tự an toàn xã hội, tạo môi trường ổn định cho sự phát triển kinh tế, hội nhập quốc tế, xây dựng và bảo vệ Tổ quốc.`
            },
            {
              title: '1.3. Chức năng, nhiệm vụ, quyền hạn của Viện kiểm sát nhân dân',
              content: `Theo Điều 107 Hiến pháp năm 2013 Viện kiểm sát nhân dân thực hành quyền công tố, kiểm sát hoạt động tư pháp. Điều 1 Luật tổ chức Viện kiểm sát nhân dân năm 2002, Viện kiểm sát nhân dân có chức năng thực hành quyền công tố và kiểm sát các hoạt động tư pháp.
  
  Viện kiểm sát nhân dân có nhiệm vụ bảo vệ pháp luật, bảo vệ quyền con người, quyền công dân, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân, góp phần bảo đảm pháp luật được chấp hành nghiêm chỉnh và thống nhất.
  
  Viện kiểm sát nhân dân tối cao thực hành quyền công tố và kiểm sát hoạt động tư pháp, góp phần bảo đảm cho pháp luật được chấp hành nghiêm chỉnh và thống nhất. Các Viện kiểm sát nhân dân địa phương thực hành quyền công tố và kiểm sát hoạt động tư pháp ở địa phương mình. Các Viện kiểm sát quân sự thực hành quyền công tố và kiểm sát các hoạt động tư pháp theo quy định của pháp luật. Điều 3 Luật tổ chức Viện kiểm sát nhân dân năm 2002 quy định Viện kiểm sát nhân dân thực hiện chức năng, nhiệm vụ của mình bằng những công tác sau đây.
  
  1. Thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong việc điều tra các vụ án hình sự của các cơ quan điều tra và các cơ quan khác được giao nhiệm vụ tiến hành một số hoạt động điều tra;
  2. Điều tra một số loại tội xâm phạm hoạt động tư pháp mà người phạm tội là cán bộ thuộc các cơ quan tư pháp;
  3. Thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong việc xét xử các vụ án hình sự;
  4. Kiểm sát việc giải quyết các vụ án dân sự, hôn nhân và gia đình, hành chính, kinh tế, lao động và những việc khác theo quy định của pháp luật;
  5. Kiểm sát việc tuân theo pháp luật trong việc thi hành bản án, quyết định của Toà án nhân dân;
  6. Kiểm sát việc tuân theo pháp luật trong việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  
  Viện kiểm sát nhân dân là cơ quan duy nhất được giao chức năng thực hành quyền công tố. Hoạt động thực hành quyền công tố chỉ diễn ra trong hai giai đoạn của tố tụng hình sự là giai đoạn điều tra các vụ án hình sự và giai đoạn xét xử các vụ án hình sự. Hoạt động công tố được thực hiện ngay từ khi khởi tố vụ án hình sự và trong suốt quá trình tố tụng hình sự nhằm bảo đảm không bỏ lọt tội phạm và người phạm tội, không làm oan người không có tội.
  
  Theo quy định tại Điều 13 Luật tổ chức Viện kiểm sát nhân dân năm 2002, khi thực hành quyền công tố trong giai đoạn điều tra, Viện kiểm sát nhân dân có những nhiệm vụ và quyền hạn sau đây:
  
  1. Khởi tố vụ án hình sự, khởi tố bị can; Yêu cầu cơ quan điều tra khởi tố hoặc thay đổi quyết định khởi tố vụ án hình sự, khởi tố bị can;
  2. Đề ra yêu cầu điều tra và yêu cầu cơ quan điều tra tiến hành điều tra; trực tiếp tiến hành một số hoạt động điều tra theo quy định của pháp luật;
  3. Yêu cầu Thủ trưởng cơ quan điều tra thay đổi Điều tra viên theo quy định của pháp luật; nếu hành vi của Điều tra viên có dấu hiệu tội phạm thì khởi tố về hình sự;
  4. Quyết định áp dụng, thay đổi, huỷ bỏ biện pháp bắt, tạm giữ, tạm giam và các biện pháp ngăn chặn khác, phê chuẩn, không phê chuẩn các quyết định của cơ quan điều tra theo quy định của pháp luật;
  5. Huỷ bỏ các quyết định trái pháp luật của cơ quan điều tra;
  6. Quyết định việc truy tố bị can; quyết định đình chỉ hoặc tạm đình chỉ điều tra, đình chỉ hoặc tạm đình chỉ vụ án.
  
  Khi thực hành quyền công tố trong giai đoạn xét xử các vụ án hình sự, Điều 17 Luật tổ chức Viện kiểm sát nhân dân năm 2002 quy định Viện kiểm sát nhân dân có những nhiệm vụ và quyền hạn sau đây:
  
  1. Đọc cáo trạng, quyết định của Viện kiểm sát nhân dân liên quan đến việc giải quyết vụ án tại phiên toà;
  2. Thực hiện việc luận tội đối với bị cáo tại phiên toà sơ thẩm, phát biểu quan điểm về việc giải quyết vụ án tại phiên toà phúc thẩm; tranh luận với người bào chữa và những người tham gia tố tụng khác tại phiên toà sơ thẩm, phúc thẩm;
  3. Phát biểu quan điểm của Viện kiểm sát nhân dân về việc giải quyết vụ án tại phiên toà giám đốc thẩm, tái thẩm.
  
  Theo Hiến pháp năm 2013 và Luật tổ chức Viện kiểm sát nhân dân năm 2002, Viện kiểm sát nhân dân chỉ thực hiện hoạt động kiểm sát việc tuân theo pháp luật trong các hoạt động tư pháp. Hoạt động kiểm sát việc tuân theo pháp luật trong các hoạt động tư pháp của Viện kiểm sát nhân dân được thực hiện thông qua các hoạt động kiểm sát cụ thể như sau:
  
  Thứ nhất, công tác kiểm sát điều tra các vụ án hình sự, bao gồm các hoạt động kiểm sát việc tuân theo pháp luật trong hoạt động điều tra của các cơ quan điều tra và các cơ quan khác được giao nhiệm vụ tiến hành một số hoạt động điều tra.
  
  Thứ hai, kiểm sát xét xử các vụ án hình sự, bao gồm các hoạt động: Kiểm sát việc tuân theo pháp luật trong hoạt động xét xử của Toà án nhân dân; kiểm sát việc tuân theo pháp luật của những người tham gia tố tụng; kiểm sát các bản án và quyết định của Toà án nhân dân theo quy định của pháp luật; yêu cầu Toà án nhân dân cùng cấp và cấp dưới chuyển hồ sơ những vụ án hình sự để xem xét, quyết định việc kháng nghị.
  
  Thứ ba, kiểm sát việc giải quyết của Tòa án đối với các vụ việc dân sự, hôn nhân và gia đình, kinh tế, lao động, các vụ án hành chính và những việc khác theo quy định của pháp luật.
  
  Thứ tư, kiểm sát thi hành án, bao gồm các hoạt động: Kiểm sát việc tuân theo pháp luật của Toà án nhân dân, cơ quan thi hành án, Chấp hành viên, cơ quan, tổ chức, đơn vị và cá nhân có liên quan trong việc thi hành bản án, quyết định về hình sự, dân sự đã có hiệu lực pháp luật và những bản án, quyết định được thi hành ngay theo quy định của pháp luật.
  
  Thứ năm, kiểm sát việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù, bao gồm các hoạt động kiểm sát việc tuân theo pháp luật của các cơ quan, đơn vị và người có trách nhiệm trong việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.`
            },
            {
              title: '1.4. Những nguyên tắc cơ bản trong tổ chức và hoạt động của Viện kiểm sát nhân dân',
              content: `Viện kiểm sát nhân dân được tổ chức và hoạt động trên cơ sở các nguyên tắc tổ chức và hoạt động của bộ máy nhà nước ta nói chung. Song, do có vị trí, chức năng và nhiệm vụ mang tính đặc thù nên hệ thống các Viện kiểm sát nhân dân được tổ chức và hoạt động theo những nguyên tắc đặc thù. Đó là nguyên tắc tập trung, thống nhất lãnh đạo trong ngành và nguyên tắc độc lập, không lệ thuộc vào bất cứ một cơ quan nhà nước nào ở địa phương.
  
  Nguyên tắc tập trung, thống nhất lãnh đạo trong ngành
  Nguyên tắc này bắt nguồn từ nguyên tắc tập trung dân chủ và nhằm bảo đảm tính thống nhất của pháp chế.
  Các cơ quan nhà nước ở địa phương một mặt trực thuộc Chính phủ hoặc Bộ chủ quản, mặt khác lại trực thuộc Hội đồng nhân dân hoặc ủy ban nhân dân địa phương. Nguyên tắc này được gọi là nguyên tắc phụ thuộc hai chiều.
  Viện kiểm sát nhân dân ở nước ta không được tổ chức và hoạt động theo nguyên tắc phụ thuộc hai chiều nêu trên, mà theo nguyên tắc tập trung, thống nhất lãnh đạo trong ngành.
  Theo nguyên tắc này, Viện kiểm sát nhân dân do Viện trưởng lãnh đạo. Viện trưởng Viện kiểm sát nhân dân cấp dưới chịu sự lãnh đạo của Viện trưởng Viện kiểm sát nhân dân cấp trên. Viện trưởng Viện kiểm sát nhân dân các địa phương, Viện trưởng Viện kiểm sát quân sự các cấp chịu sự lãnh đạo thống nhất của Viện trưởng Viện kiểm sát nhân dân tối cao (Điều 109 Hiến pháp 2013 và Điều 8 Luật tổ chức Viện kiểm sát nhân dân năm 2002). Viện trưởng, Phó viện trưởng, Kiểm sát viên Viện kiểm sát nhân dân các địa phương, Phó viện trưởng Viện kiểm sát quân sự quân khu và khu vực, Điều tra viên của Viện kiểm sát nhân dân đều do Viện trưởng Viện kiểm sát nhân dân tối cao bổ nhiệm, miễn nhiệm và cách chức (Điều 9 Luật tổ chức Viện kiểm sát nhân dân năm 2002).
  Như vậy, tất cả các Viện kiểm sát nhân dân từ trên xuống dưới tạo thành một hệ thống thống nhất. Mọi hoạt động của Viện kiểm sát nhân dân, dù ở cấp nào, đều đặt dưới sự lãnh đạo của Viện trưởng. Viện trưởng Viện kiểm sát nhân dân phải chịu trách nhiệm cá nhân về toàn bộ hoạt động của Viện kiểm sát do mình lãnh đạo trước Viện trưởng Viện kiểm sát nhân dân tối cao. Viện trưởng Viện kiểm sát nhân dân tối cao chịu trách nhiệm cá nhân về hoạt động của toàn ngành kiểm sát trước Quốc hội, ủy ban Thường vụ Quốc hội, Chủ tịch nước.
  Việc thực hiện nguyên tắc tập trung, thống nhất lãnh đạo trong ngành bảo đảm cho các cấp kiểm sát hoạt động đồng bộ, thống nhất, tạo điều kiện nâng cao hiệu quả hoạt động thực hành quyền công tố và hoạt động kiểm sát.
  Tuy nhiên, cũng cần lưu ý là ở Viện kiểm sát nhân dân tối cao và Viện kiểm sát nhân dân cấp tỉnh có Ủy ban kiểm sát. Ủy ban kiểm sát làm việc tập thể, thảo luận và quyết định theo đa số những vấn đề quan trọng như phương hướng, nhiệm vụ, kế hoạch công tác, dự án luật, dự án pháp lệnh... (các điều 32 và 35 Luật tổ chức Viện kiểm sát nhân dân năm 2002). Khi Viện trưởng không nhất trí với ý kiến của đa số thành viên ủy ban kiểm sát thì vẫn thực hiện theo quyết định của đa số, nhưng có quyền báo cáo lên cấp trên (lên Ủy ban Thường vụ Quốc hội nếu là Viện trưởng Viện kiểm sát nhân dân tối cao; lên Viện trưởng Viện kiểm sát nhân dân tối cao nếu là Viện trưởng Viện kiểm sát nhân dân cấp tỉnh). Như vậy, quy định này vừa bảo đảm mở rộng dân chủ, phát huy trí tuệ của tập thể, vừa đề cao trách nhiệm của Viện trưởng.
  
  Nguyên tắc không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương
  Trong tổ chức và hoạt động của mình, Viện kiểm sát nhân dân không lệ thuộc vào bất cứ một cơ quan nhà nước nào ở địa phương. Nguyên tắc này có mối quan hệ mật thiết với nguyên tắc tập trung, thống nhất lãnh đạo trong ngành. Nguyên tắc này nhằm tạo ra điều kiện để ngành kiểm sát nhân dân thực hiện tốt nhiệm vụ của mình là bảo đảm cho pháp luật được thi hành một cách nghiêm chỉnh và thống nhất.
  Theo Hiến pháp năm 2013, Luật tổ chức của Viện kiểm sát nhân dân trong năm 2002, toàn bộ hoạt động của Viện kiểm sát nhân dân được đặt dưới sự giám sát toàn diện, thường xuyên và chặt chẽ của Quốc hội, Ủy ban Thường vụ Quốc hội và Chủ tịch nước. Viện trưởng Viện kiểm sát nhân dân tối cao chịu trách nhiệm và báo cáo công tác trước Quốc hội, trong thời gian Quốc hội không họp thì chịu trách nhiệm và báo cáo trước Ủy ban Thường vụ Quốc hội và Chủ tịch nước (Điều 108 Hiến pháp năm 2013; Điều 9 Luật tổ chức Viện kiểm sát nhân dân năm 2002).
  Nội dung nguyên tắc Viện kiểm sát nhân dân không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương thể hiện ở chỗ: Các Viện kiểm sát nhân dân thực hiện chức năng, nhiệm vụ của mình một cách độc lập, không chịu sự chi phối bởi các cơ quan nhà nước ở địa phương, mà chỉ chịu sự lãnh đạo của Viện trưởng Viện kiểm sát nhân dân tối cao. Khi hoạt động, các Viện kiểm sát nhân dân chỉ phụ thuộc vào Hiến pháp, các đạo luật, pháp lệnh và các văn bản quy phạm pháp luật của Quốc hội, ủy ban thường vụ Quốc hội, Chính phủ, Thủ tướng Chính phủ và Chỉ thị của Viện trưởng Viện kiểm sát nhân dân tối cao. Điều đó cũng có nghĩa là các cơ quan nhà nước ở địa phương không có quyền can thiệp vào hoạt động của Viện kiểm sát nhân dân.
  Về mặt tổ chức, Viện trưởng Viện kiểm sát nhân dân tối cao quyết định bộ máy và biên chế của Viện kiểm sát nhân dân các cấp; bổ nhiệm, miễn nhiệm, cách chức Viện trưởng, Phó Viện trưởng, Kiểm sát viên các Viện kiểm sát nhân dân địa phương.
  Thừa nhận nguyên tắc không lệ thuộc vào bất kỳ cơ quan nhà nước nào ở địa phương cũng cần lưu ý là, theo quy định của Hiến pháp năm 2013 và Luật tổ chức Viện kiểm sát nhân dân năm 2002 thì Viện trưởng Viện kiểm sát nhân dân địa phương chịu sự giám sát của Hội đồng nhân dân cùng cấp, chịu trách nhiệm báo cáo công tác trước Hội đồng nhân dân, trả lời chất vấn của các đại biểu Hội đồng nhân dân về tình hình chấp hành pháp luật ở địa phương và hoạt động của Viện kiểm sát nhân dân ở địa phương. Mặt khác, qua thực tiễn hoạt động của Viện kiểm sát nhân dân, Viện trưởng có quyền kiến nghị với Hội đồng nhân dân về việc phòng ngừa tội phạm và những biểu hiện vi phạm pháp luật để bảo đảm cho pháp luật được chấp hành nghiêm chỉnh.`
            },
          ],
        },
        {
          title: '2. KIỂM SÁT VIÊN VIỆN KIỂM SÁT',
          subsections: [
            {
              title: '2.1. Tiêu chuẩn Kiểm sát viên',
              content: `Tiêu chuẩn chung:
  - Căn cứ Điều 2 Pháp lệnh Kiểm sát viên năm 2002 được sửa đổi bổ sung năm 2011 (sau đây gọi tắt là Pháp lệnh Kiểm sát viên) thì Công dân Việt Nam trung thành với Tổ quốc và Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam, có phẩm chất đạo đức tốt, liêm khiết và trung thực, có trình độ cử nhân luật, đã được đào tạo về nghiệp vụ kiểm sát, có tinh thần kiên quyết bảo vệ pháp chế xã hội chủ nghĩa, có thời gian làm công tác thực tiễn theo quy định của Pháp lệnh Kiểm sát viên, có sức khoẻ bảo đảm hoàn thành nhiệm vụ được giao, thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên.
  - Việc xác định các tiêu chuẩn Kiểm sát viên quy định tại Điều 2 Pháp lệnh Kiểm sát viên cần căn cứ vào quy định tại Thông tư liên tịch số 01/2003/TTLT-TANDTC-BQP-BNV-UBTWMTTQVN để vận dụng cho phù hợp.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên:
  
  Tiêu chuẩn cụ thể của Kiểm sát viên sơ cấp:
  Theo quy định tại Điều 18 Pháp lệnh Kiểm sát viên thì người có đủ tiêu chuẩn quy định tại Điều 2 của Pháp lệnh Kiểm sát viên, có thời gian làm công tác pháp luật từ bốn năm trở lên, có năng lực thực hành quyền công tố và kiểm sát các hoạt động tư pháp thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên sơ cấp của Viện kiểm sát nhân dân; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên sơ cấp của Viện kiểm sát quân sự.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên trung cấp:
  Theo quy định tại Điều 19 Pháp lệnh Kiểm sát viên thì:
  + Người có đủ tiêu chuẩn quy định tại Điều 2 của Pháp lệnh Kiểm sát viên và đã là Kiểm sát viên sơ cấp ít nhất là năm năm, có năng lực thực hành quyền công tố và kiểm sát các hoạt động tư pháp, có khả năng hướng dẫn nghiệp vụ kiểm sát đối với Kiểm sát viên sơ cấp thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên trung cấp của Viện Kiểm sát nhân dân; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát quân sự.
  + Trong trường hợp do nhu cầu cán bộ của ngành Kiểm sát nhân dân, người có đủ tiêu chuẩn quy định tại Điều 2 của Pháp lệnh Kiểm sát viên và đã có thời gian làm công tác pháp luật từ mười năm trở lên, có năng lực thực hành quyền công tố và kiểm sát các hoạt động tư pháp, có khả năng hướng dẫn nghiệp vụ kiểm sát đối với Kiểm sát viên sơ cấp, thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên trung cấp của Viện Kiểm sát nhân dân; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên trung cấp của Viện kiểm sát quân sự.
  
  Tiêu chuẩn cụ thể của Kiểm sát viên Viện kiểm sát nhân dân tối cao, Viện kiểm sát quân sự trung ương:
  Theo quy định tại các điều 20, 21 Pháp lệnh Kiểm sát viên thì:
  + Người có đủ tiêu chuẩn quy định tại Điều 2 của Pháp lệnh Kiểm sát viên và đã là Kiểm sát viên trung cấp ít nhất là năm năm, có năng lực thực hành quyền công tố và kiểm sát các hoạt động tư pháp, có khả năng hướng dẫn nghiệp vụ kiểm sát đối với Kiểm sát viên sơ cấp, Kiểm sát viên trung cấp, thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên Viện kiểm sát nhân dân tối cao; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên Viện kiểm sát quân sự Trung ương.
  + Trong trường hợp do nhu cầu cán bộ của ngành Kiểm sát nhân dân, người có đủ tiêu chuẩn quy định tại Điều 2 của Pháp lệnh Kiểm sát viên và đã có thời gian làm công tác pháp luật từ mười lăm năm trở lên, có năng lực thực hành quyền công tố và kiểm sát các hoạt động tư pháp, có khả năng hướng dẫn nghiệp vụ kiểm sát đối với Kiểm sát viên sơ cấp, Kiểm sát viên trung cấp, thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên Viện Kiểm sát nhân dân tối cao; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên Viện kiểm sát quân sự Trung ương.
  + Trong trường hợp cần thiết, người đang công tác trong ngành Kiểm sát nhân dân hoặc người được cơ quan, tổ chức có thẩm quyền điều động đến công tác tại ngành Kiểm sát nhân dân, tuy chưa đủ thời gian làm Kiểm sát viên sơ cấp, Kiểm sát viên trung cấp hoặc chưa đủ thời gian làm công tác pháp luật, nhưng có đủ các tiêu chuẩn khác quy định tại các điều 18, 19, 20 của Pháp lệnh Kiểm sát viên, thì cũng có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên sơ cấp hoặc Kiểm sát viên trung cấp của Viện kiểm sát nhân dân hoặc Kiểm sát viên Viện Kiểm sát nhân dân tối cao; nếu người đó là sĩ quan quân đội tại ngũ thì có thể được tuyển chọn và bổ nhiệm làm Kiểm sát viên sơ cấp hoặc Kiểm sát viên trung cấp của Viện kiểm sát quân sự hoặc Kiểm sát viên Viện kiểm sát quân sự Trung ương.`
            },
            {
              title: '2.2. Quy trình tuyển chọn, bổ nhiệm, miễn nhiệm, cách chức Kiểm sát viên',
              content: `
  Quy trình tuyển chọn, bổ nhiệm Kiểm sát viên:
  Quy trình tuyển chọn, bổ nhiệm Kiểm sát viên VKSND và Viện kiểm sát quân sự các cấp gồm các bước sau:
  
  - Một là, Ban cán sự Đảng VKSND, Viện kiểm sát quân sự các cấp căn cứ vào nhu cầu cán bộ, xác định chủ trương bổ nhiệm Kiểm sát viên thuộc thẩm quyền quản lý.
  - Hai là, cơ quan tham mưu về công tác cán bộ lập hồ sơ trích ngang của cán bộ, tập hợp các loại đơn thư khiếu nại, tố cáo và các báo cáo kết luận có liên quan đến việc bổ nhiệm, bổ nhiệm lại đối với cán bộ (nếu có) để báo cáo Ban cán sự Đảng cùng cấp xem xét.
  - Ba là, cán bộ thuộc đối tượng bổ nhiệm, bổ nhiệm lại làm bản tự kiểm điểm, đánh giá ưu khuyết điểm việc thực hiện chức trách nhiệm vụ được giao, kèm theo ý kiến nhận xét đánh giá của thủ trưởng đơn vị.
  - Bốn là, đơn vị có cán bộ thuộc đối tượng bổ nhiệm, bổ nhiệm lại tổ chức cho tập thể Kiểm sát viên, cán bộ trong đơn vị tham gia ý kiến. Tổ chức bỏ phiếu thăm dò tín nhiệm (với đối tượng bổ nhiệm lần đầu), lấy ý kiến nhận xét của chi uỷ, chi bộ, cơ sở, trưởng ban công tác mặt trận, tổ dân phố... nơi cư trú thường xuyên của đối tượng được đề nghị xem xét bổ nhiệm. Với cán bộ bổ nhiệm lại thực hiện việc nhận xét, đánh giá cán bộ theo đúng quy trình trước khi xem xét bổ nhiệm lại.
  - Năm là, Viện trưởng VKSND cấp tỉnh, Viện trưởng Viện kiểm sát quân sự cấp quân khu, thủ trưởng các đơn vị thuộc VKSND tối cao cùng với tập thể lãnh đạo tổng hợp kết quả tín nhiệm và xác minh, kết luận những vấn đề mới nẩy sinh đối với cán bộ (nếu có).
  - Sáu là, Lãnh đạo đơn vị, Thường vụ Đảng uỷ hoặc Đảng uỷ (chi uỷ) cơ quan, đơn vị... nhận xét đánh giá và có ý kiến đề nghị bằng văn bản về nhân sự được đề nghị bổ nhiệm.
  - Bảy là, Uỷ ban kiểm sát VKSND, Viện kiểm sát quân sự các cấp họp xét chọn và đề nghị Hội đồng tuyển chọn Kiểm sát viên Viện kiểm sát các cấp tuyển chọn Kiểm sát viên.
  - Tám là, Hội đồng tuyển chọn Kiểm sát viên Viện kiểm sát các cấp họp tuyển chọn người đủ tiêu chuẩn theo quy định của Pháp lệnh Kiểm sát viên để trình cấp có thẩm quyền xem xét bổ nhiệm. Trên cơ sở kết quả của Hội đồng tuyển chọn, Viện trưởng VKSND tối cao trình Chủ tịch nước bổ nhiệm Kiểm sát viên VKSND tối cao, Kiểm sát viên Viện kiểm sát quân sự Trung ương; Chủ tịch Hội đồng tuyển chọn Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị Viện trưởng VKSND tối cao bổ nhiệm Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Kiểm sát viên Viện kiểm sát quân sự cấp quân khu, khu vực.
  
  Quy trình miễn nhiệm Kiểm sát viên:
  Quy trình miễn nhiệm Kiểm sát viên tiến hành như sau:
  
  - Một là, Kiểm sát viên làm đơn xin miễn nhiệm, nêu rõ lý do xin miễn nhiệm;
  - Hai là, Uỷ ban kiểm sát họp xét để trình Hội đồng tuyển chọn xem xét;
  - Ba là, Hội đồng tuyển chọn họp xem xét, trình cấp có thẩm quyền quyết định;
  - Bốn là, trên cơ sở kết quả của Hội đồng tuyển chọn, Viện trưởng VKSND tối cao trình Chủ tịch nước miễn nhiệm Kiểm sát viên VKSND tối cao, Kiểm sát viên Viện kiểm sát quân sự Trung ương; Chủ tịch Hội đồng tuyển chọn Kiểm sát viên VKSND cấp tỉnh, cấp huyện, Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị Viện trưởng VKSND tối cao miễn nhiệm chức danh Kiểm sát viên.
  
  Quy trình miễn nhiệm Kiểm sát viên đối với trường hợp đương nhiên miễn nhiệm theo quy định tại khoản 1 Điều 27 Pháp lệnh Kiểm sát viên:
  
  - Viện trưởng VKSND tối cao trình miễn nhiệm đối với Kiểm sát viên VKSND tối cao, Kiểm sát viên Viện kiểm sát quân sự Trung ương;
  - Viện trưởng VKSND cấp tỉnh đề nghị miễn nhiệm đối với Kiểm sát viên cấp tỉnh, cấp huyện. Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị miễn nhiệm đối với Kiểm sát viên Viện kiểm sát quân sự cấp quân khu, khu vực.
  
  Quy trình đề nghị cách chức Kiểm sát viên VKSND các cấp:
  Các bước tiến hành cách chức Kiểm sát viên:
  
  - Một là, Kiểm sát viên bị đề nghị cách chức làm bản tự kiểm điểm;
  - Hai là, cơ quan, đơn vị nơi Kiểm sát viên công tác tổ chức kiểm tra xác minh vi phạm và kiểm điểm làm rõ sai phạm của người bị đề nghị cách chức;
  - Ba là, Hội đồng kỷ luật cơ quan, đơn vị nơi Kiểm sát viên công tác họp xem xét đề nghị hình thức kỷ luật để cấp có thẩm quyền quyết định;
  - Bốn là, Uỷ ban kiểm sát Viện kiểm sát các cấp họp xem xét việc cách chức đối với chức danh Kiểm sát viên;
  - Năm là, Hội đồng tuyển chọn Kiểm sát viên các cấp họp xem xét đề nghị cách chức chức danh Kiểm sát viên;
  - Sáu là, đề nghị cách chức.
  
  Các trường hợp đương nhiên bị cách chức theo khoản 1 Điều 28 Pháp lệnh Kiểm sát viên:
  
  - Viện trưởng VKSND tối cao trình Chủ tịch nước quyết định cách chức đối với Kiểm sát viên VKSND tối cao và Kiểm sát viên Viện kiểm sát quân sự Trung ương.
  - Chủ tịch Hội đồng tuyển chọn Kiểm sát viên VKSND cấp tỉnh đề nghị Viện trưởng VKSND tối cao cách chức Kiểm sát viên trung cấp và Kiểm sát viên sơ cấp.
  - Viện trưởng Viện kiểm sát quân sự Trung ương đề nghị Viện trưởng VKSND tối cao cách chức Kiểm sát viên trung cấp và Kiểm sát viên sơ cấp của Viện kiểm sát quân sự cấp quân khu và khu vực.`
            },
            {
              title: '2.3. Nhiệm vụ, quyền hạn của Kiểm sát viên',
              content: `
  Nhiệm vụ, quyền hạn chung:
  - Kiểm sát viên thực hiện nhiệm vụ thực hành quyền công tố, kiểm sát các hoạt động tư pháp thuộc thẩm quyền Viện kiểm sát cấp mình theo phân công của Viện trưởng và chịu trách nhiệm trước Viện trưởng.
  - Khi thực hiện nhiệm vụ, Kiểm sát viên phải tuân theo pháp luật và chịu sự chỉ đạo trực tiếp của Viện trưởng Viện kiểm sát cấp mình, sự lãnh đạo thống nhất của Viện trưởng Viện kiểm sát nhân dân tối cao.
  - Kiểm sát viên có quyền từ chối nhiệm vụ được giao khi có căn cứ cho rằng việc đó là trái pháp luật; nếu Viện trưởng vẫn quyết định thì Kiểm sát viên phải chấp hành, nhưng Viện trưởng phải chịu trách nhiệm về quyết định của mình; trong trường hợp này Kiểm sát viên có quyền báo cáo lên Viện trưởng cấp trên trực tiếp và không phải chịu trách nhiệm về hậu quả của việc thi hành quyết định đó.
  - Kiểm sát viên phải từ chối tiến hành tố tụng hoặc bị thay đổi trong các trường hợp do pháp luật tố tụng quy định.
  
  Kiểm sát viên không được làm những việc sau đây:
  - Những việc mà pháp luật quy định cán bộ, công chức không được làm;
  - Tư vấn cho bị can, bị cáo, đương sự hoặc người tham gia tố tụng khác làm cho việc giải quyết vụ án hoặc những việc khác không đúng quy định của pháp luật;
  - Can thiệp trái pháp luật vào việc giải quyết các vụ án hoặc lợi dụng ảnh hưởng của mình tác động đến người có trách nhiệm giải quyết vụ án;
  - Đem hồ sơ vụ án hoặc tài liệu trong hồ sơ vụ án ra khỏi cơ quan, nếu không vì nhiệm vụ được giao hoặc không được sự đồng ý của người có thẩm quyền;
  - Tiếp bị can, bị cáo, đương sự hoặc người tham gia tố tụng khác trong các vụ án mà mình có thẩm quyền giải quyết ngoài nơi quy định.
  
  Nhiệm vụ, quyền hạn cụ thể:
  - Căn cứ Điều 37 BLTTHS thì khi được phân công thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng đối với vụ án hình sự, Kiểm sát viên có những nhiệm vụ và quyền hạn sau:
    + Kiểm sát việc khởi tố, kiểm sát các hoạt động điều tra và việc lập hồ sơ vụ án của Cơ quan điều tra;
    + Đề ra yêu cầu điều tra;
    + Triệu tập và hỏi cung bị can; triệu tập và lấy lời khai của người làm chứng, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án;
    + Kiểm sát việc bắt, tạm giữ, tạm giam;
    + Tham gia phiên toà; đọc cáo trạng, quyết định của Viện kiểm sát liên quan đến việc giải quyết vụ án; hỏi, đưa ra chứng cứ và thực hiện việc luận tội; phát biểu quan điểm về việc giải quyết vụ án, tranh luận với những người tham gia tố tụng tại phiên toà;
    + Kiểm sát việc tuân theo pháp luật trong hoạt động xét xử của Tòa án, của những người tham gia tố tụng và kiểm sát các bản án, quyết định của Toà án;
    + Kiểm sát việc thi hành bản án, quyết định của Toà án;
    + Thực hiện các nhiệm vụ, quyền hạn khác thuộc thẩm quyền của Viện kiểm sát theo sự phân công của Viện trưởng Viện kiểm sát.
    Kiểm sát viên phải chịu trách nhiệm trước pháp luật và trước Viện trưởng Viện kiểm sát về những hành vi và quyết định của mình.
  
  - Căn cứ Điều 45 BLTTDS năm 2005 được sửa đổi, bổ sung năm 2011 thì khi được phân công thực hiện kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng dân sự, Kiểm sát viên có những nhiệm vụ, quyền hạn sau đây:
    + Kiểm sát việc tuân theo pháp luật trong việc giải quyết các vụ án dân sự, giải quyết việc dân sự của Toà án;
    + Kiểm sát việc tuân theo pháp luật của những người tham gia tố tụng;
    + Kiểm sát các bản án, quyết định của Toà án;
    + Tham gia phiên toà xét xử vụ án dân sự, phiên họp giải quyết việc dân sự theo quy định của BLTTDS và phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ việc dân sự;
    + Thực hiện nhiệm vụ, quyền hạn khác thuộc thẩm quyền của Viện kiểm sát theo sự phân công của Viện trưởng Viện kiểm sát.
    + Ngoài các quy định cụ thể trong BLTTHS, BLTTDS thì Kiểm sát viên còn có các nhiệm vụ, quyền hạn khác do pháp luật quy định.
  
  Trách nhiệm của Kiểm sát viên:
  - Kiểm sát viên chịu trách nhiệm trước pháp luật về việc thực hiện nhiệm vụ, quyền hạn của mình; nếu có hành vi vi phạm pháp luật thì tùy theo tính chất, mức độ vi phạm mà bị xử lý kỷ luật hoặc bị truy cứu trách nhiệm hình sự theo quy định của pháp luật.
  - Kiểm sát viên trong khi thực hiện nhiệm vụ, quyền hạn mà gây thiệt hại thì Viện kiểm sát nhân dân nơi người đó công tác phải có trách nhiệm bồi thường và người đã gây thiệt hại có trách nhiệm bồi hoàn cho Viện kiểm sát nhân dân theo quy định của pháp luật.
  - Kiểm sát viên phải giữ bí mật nhà nước và bí mật công tác theo quy định của pháp luật.
  - Kiểm sát viên phải tôn trọng nhân dân và chịu sự giám sát của nhân dân.
  - Kiểm sát viên phải gương mẫu trong việc chấp hành Hiến pháp, pháp luật, có phẩm chất đạo đức tốt, lối sống lành mạnh và tôn trọng các quy tắc sinh hoạt công cộng; tham gia tuyên truyền, phổ biến pháp luật.
  - Kiểm sát viên có trách nhiệm học tập, nghiên cứu để nâng cao năng lực và trình độ chuyên môn nghiệp vụ kiểm sát.
  - Kiểm sát viên có trách nhiệm thực hiện nghiêm túc Quyết định số 296/2008/QĐ-VKSTC ngày 18/6/2008 của Viện trưởng VKSND tối cao ban hành Quy tắc ứng xử của cán bộ, công chức, viên chức ngành Kiểm sát nhân dân.`
            },
          ],
        },
      ],
    },
    {
      part: 'Phần Thứ Hai',
      title: 'THỰC HÀNH QUYỀN CÔNG TỐ VÀ KIỂM SÁT ĐIỀU TRA VỤ ÁN HÌNH SỰ',
      sections: [
        {
          title: '1. NHIỆM VỤ, QUYỀN HẠN CỦA VIỆN KIỂM SÁT',
          subsections: [
            { title: '1.1. Khái niệm, đối tượng, phạm vi, ý nghĩa công tác thực hành quyền công tố và kiểm sát điều tra', content: `Khái niệm
  - Thực hành quyền công tố là hoạt động của Viện kiểm sát nhân dân trong tố tụng hình sự để thực hiện việc buộc tội của Nhà nước đối với người phạm tội, được thực hiện ngay từ khi giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và trong suốt quá trình khởi tố, điều tra, truy tố, xét xử vụ án hình sự.
  - Kiểm sát điều tra các vụ án hình sự là hoạt động của VKSND kiểm sát việc tuân theo pháp luật của các chủ thể tham gia quan hệ pháp luật tố tụng hình sự phát sinh trong giai đoạn điều tra, nhằm đảm bảo cho quá trình điều tra vụ án được thực hiện theo đúng quy định của pháp luật, bảo đảm việc điều tra phải khách quan, toàn diện, đầy đủ, chính xác; những vi phạm pháp luật trong quá trình điều tra phải được phát hiện, khắc phục kịp thời và xử lý nghiêm minh.
  
  Đối tượng
  Với ý nghĩa là việc sử dụng tổng hợp các quyền năng pháp lý nhằm mục đích truy cứu trách nhiệm hình sự người phạm tội, truy tố họ ra trước Tòa án để xét xử, đối tượng của hoạt động thực hành quyền công tố là tội phạm và người phạm tội. Đối tượng của công tác kiểm sát điều tra là việc tuân theo pháp luật của cơ quan điều tra, cơ quan được giao một số nhiệm vụ điều tra, những người có thẩm quyền trong điều tra và những người tham gia tố tụng khác.
  
  Phạm vi
  Theo Điều 2 Quy chế Thực hành quyền công tố và Kiểm sát điều tra vụ án hình sự ban hành kèm theo Quyết định số 07/2008/QĐ-VKSTC ngày 02/1/2008 của Viện trưởng Viện kiểm sát nhân dân tối cao (gọi tắt là quy chế THQCT & KSĐT) xác định:
  Công tác thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong việc điều tra các vụ án hình sự bắt đầu từ khi phát hiện có dấu hiệu tội phạm xảy ra đến khi kết thúc việc điều tra, Viện kiểm sát ra quyết định truy tố hoặc đình chỉ vụ án theo quy định của pháp luật.
  
  Ý nghĩa
  Điều 3 Quy chế THQCT & KSĐT xác định: Công tác thực hành quyền công tố và kiểm sát điều tra vụ án hình sự của Viện kiểm sát nhằm bảo đảm:
  - Mọi hành vi phạm tội đều phải được khởi tố, điều tra và xử lý kịp thời, không để lọt tội phạm và người phạm tội, không làm oan người vô tội;
  - Không để người nào bị khởi tố, bị bắt, tạm giữ, tạm giam, bị hạn chế các quyền công dân, bị xâm phạm tính mạng, sức khoẻ, tài sản, tự do, danh dự và nhân phẩm một cách trái pháp luật;
  - Việc điều tra phải khách quan, toàn diện, đầy đủ, chính xác, đúng pháp luật; những vi phạm pháp luật trong quá trình điều tra phải được phát hiện kịp thời; khắc phục và xử lý nghiêm minh;
  - Việc truy cứu trách nhiệm hình sự đối với bị can phải có căn cứ và đúng pháp luật.` },
            { title: '1.2. Nhiệm vụ, quyền hạn khi thực hành quyền công tố', content: `Theo Điều 112 BLTTHS năm 2003 và Khoản 1 Điều 4 Quy chế THQCT & KSĐT, khi thực hành quyền công tố trong giai đoạn điều tra, Viện kiểm sát có nhiệm vụ, quyền hạn:
  
  - Khởi tố vụ án hình sự, khởi tố bị can; yêu cầu Cơ quan điều tra khởi tố hoặc thay đổi quyết định khởi tố vụ án hình sự, khởi tố bị can;
  - Đề ra yêu cầu điều tra và yêu cầu Cơ quan điều tra tiến hành điều tra; khi xét thấy cần thiết, trực tiếp tiến hành một số hoạt động điều tra theo quy định của pháp luật;
  - Yêu cầu Thủ trưởng Cơ quan điều tra thay đổi Điều tra viên theo quy định của pháp luật; nếu hành vi của Điều tra viên có dấu hiệu tội phạm thì khởi tố về hình sự;
  - Quyết định áp dụng, thay đổi hoặc huỷ bỏ biện pháp bắt, tạm giữ, tạm giam và các biện pháp ngăn chặn khác; quyết định phê chuẩn, quyết định không phê chuẩn các quyết định của Cơ quan điều tra theo quy định của pháp luật. Trường hợp không phê chuẩn thì trong quyết định không phê chuẩn phải nêu rõ lý do;
  - Huỷ bỏ các quyết định không có căn cứ và trái pháp luật của Cơ quan điều tra; yêu cầu Cơ quan điều tra truy nã bị can;
  - Quyết định việc truy tố bị can; quyết định đình chỉ hoặc tạm đình chỉ vụ án.` },
            { title: '1.3. Nhiệm vụ, quyền hạn khi kiểm sát điều tra', content: `Theo Điều 113 BLTTHS năm 2003 và Khoản 2 Điều 4 Quy chế THQCT & KSĐT, khi thực hiện công tác kiểm sát điều tra, Viện kiểm sát có nhiệm vụ, quyền hạn:
  
  - Kiểm sát việc khởi tố, kiểm sát các hoạt động điều tra và việc lập hồ sơ vụ án của Cơ quan điều tra;
  - Kiểm sát việc tuân theo pháp luật của người tham gia tố tụng;
  - Giải quyết các tranh chấp về thẩm quyền điều tra;
  - Yêu cầu Cơ quan điều tra khắc phục vi phạm pháp luật trong hoạt động điều tra; yêu cầu Cơ quan điều tra cung cấp tài liệu cần thiết về vi phạm pháp luật của Điều tra viên; yêu cầu Thủ trưởng Cơ quan điều tra xử lý nghiêm minh Điều tra viên vi phạm pháp luật trong khi tiến hành điều tra;
  - Kiến nghị với cơ quan, tổ chức và đơn vị hữu quan áp dụng các biện pháp phòng ngừa tội phạm và vi phạm pháp luật.` },
          ],
        },
        {
          title: '2. CÁC HOẠT ĐỘNG CỤ THỂ',
          subsections: [
            { title: '2.1. Khởi tố vụ án, bị can', content: `Theo Điều 10 Quy chế THQCT & KSĐT và Điều 11 Thông tư liên tịch số 06/2013/TTLT-BCA-BQP-BTC-BNN&PTNT-VKSNDTC hướng dẫn thi hành quy định của BLTTHS về tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố: Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra phân công Kiểm sát viên tiếp nhận, quản lý đầy đủ tố giác, tin báo về tội phạm do cá nhân, cơ quan, tổ chức và kiến nghị khởi tố do cơ quan Nhà nước chuyển đến.
  
  - Kiểm sát viên khi được giao nhiệm vụ tiếp nhận tố giác, tin báo về tội phạm yêu cầu đầu tiên là phải đánh giá sơ bộ bước đầu về tính chất của tố giác, tin báo đó để có phương pháp xử lý kịp thời, đúng pháp luật.
    + Đối với các tố giác, tin báo về tội phạm có tính khẩn cấp và yêu cầu đặt ra là cần phải khám nghiệm hiện trường hoặc cần ngăn chặn ngay hành vi phạm tội thì Kiểm sát viên được phân công phải tiến hành sơ vấn người báo tin để nhanh chóng nắm được thông tin ban đầu và báo cáo ngay với lãnh đạo để có biện pháp xử lý kịp thời. Nội dung sơ vấn ngắn gọn, như: Sự việc gì đã xảy ra?; địa điểm xảy ra? Nếu ở nông thôn thì ghi rõ thôn, xóm, bản, xã, huyện; nếu ở thành phố thì ghi rõ số nhà, đường phố, phường, quận…; thời gian xảy ra sự việc hoặc thời gian phát hiện; những người biết sự việc xảy ra; hậu quả xảy ra (thiệt hại về người, tài sản…); ai là người thực hiện (nếu họ biết)? Có thể ghi lại số điện thoại hoặc địa chỉ của người báo tin để liên hệ với họ khi cần thiết.
    + Nếu vụ việc xảy ra có nhiều người tham gia và có tính chất đặc biệt nghiêm trọng, nếu không kịp thời ngăn chặn thì hậu quả xảy ra không thể lường hết được hoặc ảnh hưởng xấu đến tình hình an ninh trật tự ở địa phương thì Kiểm sát viên phải báo cáo ngay với lãnh đạo để phối hợp với cơ quan Công an có biện pháp giải quyết.
    + Nếu sự việc xảy ra cần phải khám nghiệm hiện trường, như trộm cắp, giết người, phát hiện có tử thi, cháy nổ, sau khi nhận được tố giác, tin báo, Kiểm sát viên vào sổ thụ lý và báo cáo nội dung sự việc với Lãnh đạo viện để và thông báo với Cơ quan điều tra cùng cấp để phối hợp tổ chức bảo vệ hiện trường, tổ chức cấp cứu và lấy sinh cung (nếu nạn nhân sắp chết); truy bắt người thực hiện hành vi phạm tội (nếu xác định được ngay sau khi sự việc xảy ra) và tiến hành khám nghiệm đối với các vụ việc thuộc thẩm quyền …
    + Đối với các tố giác, tin báo về tội phạm do cơ quan, tổ chức hoặc cá nhân trực tiếp đến Viện kiểm sát cung cấp, Kiểm sát viên phải vào sổ thụ lý; ghi rõ ngày, tháng, năm tiếp nhận; nội dung tố giác, tin báo về tội phạm, kiến nghị khởi tố; tên, tuổi và địa chỉ của người hoặc cơ quan, tổ chức cung cấp; sau đó tiến hành phân tích đánh giá bước đầu về các thông tin, tài liệu đã thu thập được để báo cáo và xin ý kiến chỉ đạo của Lãnh đạo đồng thời làm thủ tục chuyển cho Cơ quan điều tra có thẩm quyền để tiến hành thẩm tra, xác minh, đồng thời lập kế hoạch theo dõi, kiểm tra kết quả giải quyết của Cơ quan điều tra.
    + Nếu tố giác, tin báo về tội phạm được gửi đến VKSND bằng đơn, thư, công văn thông qua bưu điện cũng như các tố giác, tin báo về tội phạm do Viện kiểm sát trực tiếp thu thập được thông qua các phương tiện thông tin đại chúng thì Kiểm sát viên sau khi vào sổ thụ lý phải nghiên cứu nội dung sự việc để báo cáo lãnh đạo xin ý kiến trước khi chuyển cho Cơ quan điều tra có thẩm quyền giải quyết.
    + Đối với kiến nghị khởi tố vụ án hình sự do cơ quan nhà nước chuyển đến thường kèm theo các tài liệu, chứng cứ đã thu thập được trong quá trình kiểm tra, thanh tra cùng với bản kết luận về hành vi vi phạm pháp luật có dấu hiệu tội phạm (hồ sơ thanh tra, kiểm tra). Trong trường hợp này, Kiểm sát viên được phân công phải tiến hành nghiên cứu, phân loại, đánh giá các tài liệu chứng cứ để xác định có hay không có hành vi phạm tội xảy ra để báo cáo với lãnh đạo. Nếu có căn cứ xác định sự việc xảy ra có dấu hiệu tội phạm thì Kiểm sát viên làm báo cáo bằng văn bản đề nghị lãnh đạo ra quyết định chuyển toàn bộ hồ sơ cho Cơ quan điều tra và yêu cầu khởi tố vụ án hình sự. Nếu qua nghiên cứu xác định chưa có đủ căn cứ để khởi tố vụ án hình sự thì Kiểm sát viên báo cáo với lãnh đạo làm thủ tục chuyển hồ sơ, tài liệu cho Cơ quan điều tra để tiếp tục kiểm tra, xác minh thêm và giải quyết theo thẩm quyền.
    + Đối với các tố giác, tin báo về tội phạm xâm phạm các hoạt động tư pháp, tội tham nhũng trong hoạt động tư pháp (Theo Luật tổ chức VKSND sửa đổi) mà người thực hiện là cán bộ thuộc các cơ quan tư pháp thì sau khi tiếp nhận, Kiểm sát viên phải báo cáo với lãnh đạo để chuyển ngay đến Cục điều tra hình sự thuộc VKSND tối cao thẩm tra, xác minh và giải quyết theo thẩm quyền.
  
  - Kiểm sát viên được phân công phải kiểm sát chặt chẽ việc tiếp nhận và giải quyết của Cơ quan điều tra cùng cấp đối với các tố giác, tin báo về tội phạm và kiến nghị khởi tố.
  - Kiểm sát viên phải kiểm tra quá trình giải quyết tố giác, tin báo về tội phạm đảm bảo hoạt động của Cơ quan điều tra theo đúng các quy định của pháp luật về trình tự, thủ tục và thời hạn giải quyết; nếu phát hiện có vi phạm pháp luật thì yêu cầu Cơ quan điều tra khắc phục kịp thời hoặc báo cáo lãnh đạo ra văn bản kiến nghị.
  - Hàng tuần, Kiểm sát viên yêu cầu Cơ quan điều tra cùng cấp thông báo đầy đủ cho Viện kiểm sát các tố giác, tin báo về tội phạm và kiến nghị khởi tố mà Cơ quan điều tra đã tiếp nhận được; đồng thời phối hợp để phân loại, xử lý kịp thời.
  - Kiểm sát viên cần căn cứ vào quy định tại tiết c, điểm 7 Mục I Thông tư liên tịch số 01/2005 để tiến hành hoạt động kiểm sát. Theo đó, "Cơ quan Công an có trách nhiệm thống kê kết quả tiếp nhận, xử lý tố giác, tin báo về tội phạm từ kết quả xử lý những vụ vi phạm thuộc thẩm quyền xử lý của mình và chuyển kết quả tổng hợp thống kê sang Viện kiểm sát cùng cấp, sau khi loại thống kê này được thực hiện”.
  - Theo quy định tại khoản 2 Điều 103 BLTTHS, trong thời hạn 20 ngày, kể từ ngày nhận được tố giác, tin báo về tội phạm, kiến nghị khởi tố, Cơ quan điều tra trong phạm vi trách nhiệm của mình phải kiểm tra, xác minh nguồn tin; nếu xác định có dấu hiệu tội phạm xảy ra thì ra quyết định khởi tố vụ án hình sự; nếu có một trong những căn cứ quy định tại Điều 107 BLTTHS thì ra quyết định không khởi tố vụ án hình sự. Trong thời hạn 24 giờ, kể từ khi ra quyết định khởi tố hoặc không khởi tố vụ án hình sự, Cơ quan điều tra phải gửi các quyết định đó kèm theo các tài liệu liên quan cho Viện kiểm sát cùng cấp để tiến hành kiểm sát.
  - Hàng tháng, Viện trưởng hoặc Phó Viện trưởng Viện kiểm sát cấp huyện, Lãnh đạo đơn vị kiểm sát điều tra cấp tỉnh chủ trì, phối hợp với Cơ quan điều tra cùng cấp nắm số lượng, kết quả giải quyết các tố giác, tin báo về tội phạm và kiến nghị khởi tố đã tiếp nhận; nếu phát hiện có tố giác, tin báo về tội phạm và kiến nghị khởi tố chưa được giải quyết theo thời hạn luật định thì yêu cầu Cơ quan điều tra nêu rõ lý do, hướng giải quyết và thông báo kết quả cho Viện kiểm sát theo quy định tại Điều 103 BLTTHS.
  
  Khi phát hiện việc tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố không đầy đủ, vi phạm pháp luật thì Viện kiểm sát nhân dân yêu cầu Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra thực hiện các hoạt động sau đây:
  - Tiếp nhận, kiểm tra, xác minh, ra quyết định giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố đầy đủ, đúng pháp luật;
  - Kiểm tra việc tiếp nhận, giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố và thông báo kết quả cho Viện kiểm sát nhân dân;
  - Cung cấp tài liệu về vi phạm pháp luật trong việc tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố;
  - Khắc phục vi phạm pháp luật và xử lý nghiêm người vi phạm.
  
  Trong quá trình thực hành quyền công tố và kiểm sát việc giải quyết tin báo, tố giác về tội phạm và kiến nghị khởi tố nếu cần thiết VKS có thể đề ra yêu cầu kiểm tra, xác minh và yêu cầu cơ quan có thẩm quyền giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố; Trực tiếp giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố trong trường hợp phát hiện có vi phạm pháp luật nghiêm trọng hoặc có dấu hiệu bỏ lọt tội phạm mà VKS nhân dân đã yêu cầu nhưng không được khắc phục (Luật Tổ chức VKSND sửa đổi).
  
  KIỂM SÁT VIỆC KHỞI TỐ VỤ ÁN HÌNH SỰ, VIỆC THAY ĐỔI HOẶC BỔ SUNG QUYẾT ĐỊNH KHỞI TỐ VỤ ÁN HÌNH SỰ
  
  Theo Điều 11 Quy chế THQCT & KSĐT: Trong thời hạn ba ngày làm việc, kể từ khi nhận được quyết định khởi tố vụ án của Cơ quan điều tra hoặc cơ quan khác được giao tiến hành một số hoạt động điều tra, Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra cử Kiểm sát viên tiến hành kiểm tra tính có căn cứ và hợp pháp của quyết định khởi tố vụ án để xem xét, xử lý.
  
  - Kiểm sát viên phải nghiên cứu các tài liệu dùng làm căn cứ để khởi tố vụ án hình sự, bao gồm: Các tố giác, tin báo về tội phạm, kiến nghị khởi tố và các tài liệu kèm theo do cơ quan, tổ chức, cá nhân cung cấp; các tài liệu kiểm tra, xác minh tố giác, tin báo về tội phạm của Cơ quan điều tra và các cơ quan khác được giao nhiệm vụ tiến hành một số hoạt động điều tra; biên bản khám nghiệm hiện trường, khám nghiệm tử thi, khám xét... cùng các tài liệu, dấu vết, tang vật đã được phát hiện thu giữ (đối với các vụ án có khám nghiệm hiện trường); đơn yêu cầu khởi tố của người bị hại hoặc của người đại diện hợp pháp của người bị hại là người chưa thành niên, người có nhược điểm về thể chất hoặc tâm thần theo quy định tại Điều 105 BLTTHS; biên bản và kết quả giám định dấu vết, tang vật như dấu vết máu, dấu vết súng đạn, dấu vết đường vân; chất ma túy…; biên bản và kết quả giám định thương tật; biên bản và kết quả định giá tài sản; biên bản ghi lời khai của người bị hại, người làm chứng...
  - Đối với các vụ án khởi tố theo yêu cầu của người bị hại, Kiểm sát viên phải nghiên cứu, xem xét quyết định khởi tố và các tài liệu có liên quan để xác định việc khởi tố vụ án hình sự có thuộc các trường hợp được quy định tại Điều 105 BLTTHS hay không? Sau khi kiểm tra tính có căn cứ và hợp pháp của quyết định khởi tố thì Kiểm sát viên được cử phải báo cáo kết quả nghiên cứu với Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra để xem xét xử lý như sau:
    + Nếu thấy quyết định khởi tố vụ án có căn cứ và hợp pháp thì ra quyết định phân công Kiểm sát viên thực hành quyền công tố và kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng đối với vụ án và thông báo bằng văn bản cho cơ quan đã khởi tố biết; nếu chưa rõ căn cứ thì yêu cầu cơ quan đã khởi tố bổ sung tài liệu, chứng cứ làm rõ căn cứ khởi tố.
    + Nếu thấy quyết định khởi tố vụ án rõ ràng là không có căn cứ thì ra văn bản yêu cầu cơ quan đã khởi tố ra quyết định huỷ bỏ; nếu cơ quan đã khởi tố không nhất trí thì báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định huỷ bỏ quyết định khởi tố vụ án theo quy định tại khoản 2 Điều 109 BLTTHS và điểm 7.1 mục 7 Thông tư liên ngành số 05/2005/TTLN-VKSTC-BCA-BQP ngày 07/9/2005.
    + Nếu thấy tội phạm đã khởi tố không đúng với hành vi phạm tội hoặc còn có tội phạm khác chưa được khởi tố thì Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu cơ quan đã khởi tố ra quyết định thay đổi hoặc bổ sung quyết định khởi tố vụ án hình sự; nếu Cơ quan đã khởi tố không nhất trí thì báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định thay đổi hoặc bổ sung quyết định khởi tố vụ án hình sự.
    + Trong thời hạn 24 giờ kể từ khi thay đổi hoặc bổ sung, Kiểm sát viên gửi các quyết định này cho cơ quan đã khởi tố để tiến hành điều tra theo quy định tại khoản 2 Điều 106 BLTTHS.
    + Nếu thấy quyết định thay đổi hoặc bổ sung quyết định khởi tố vụ án hình sự của cơ quan đã ra quyết định không có căn cứ thì Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu cơ quan đó quyết định hoặc trực tiếp ra quyết định huỷ bỏ quyết định đó.
  
  - Đối với quyết định khởi tố vụ án hình sự của Hội đồng xét xử, Kiểm sát viên thụ lý vụ án phải kiểm tra tính có căn cứ của quyết định khởi tố đó và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xử lý như sau:
    + Nếu quyết định khởi tố vụ án hình sự có căn cứ thì chuyển quyết định khởi tố vụ án hình sự kèm theo các tài liệu có liên quan đến Cơ quan điều tra có thẩm quyền để tiến hành điều tra;
    + Nếu quyết định khởi tố vụ án hình sự không có căn cứ thì kháng nghị lên Toà án cấp trên.
  
  KIỂM SÁT VIỆC RA QUYẾT ĐỊNH KHÔNG KHỞI TỐ VỤ ÁN HÌNH SỰ
  
  Theo Điều 12 Quy chế THQCT & KSĐT: Trong thời hạn ba ngày làm việc, kể từ khi nhận được quyết định không khởi tố vụ án hình sự và các tài liệu có liên quan của Cơ quan điều tra hoặc các cơ quan khác được giao nhiệm vụ tiến hành một số hoạt động điều tra, Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra phân công Kiểm sát viên kiểm tra tính có căn cứ và hợp pháp của các quyết định đó.
  
  - Các tài liệu, chứng cứ mà Kiểm sát viên cần phải kiểm tra, xem xét, đánh giá bao gồm: Quyết định không khởi tố vụ án hình sự; các tài liệu, chứng cứ ban đầu do các cơ quan, tổ chức, đơn vị vũ trang và cá nhân cung cấp kèm theo đơn tố giác, tin báo về tội phạm hoặc kiến nghị khởi tố đã được Cơ quan điều tra có thẩm quyền kiểm tra, xác minh; biên bản khám nghiệm hiện trường, khám nghiệm tử thi (Đối với các trường hợp chết người chưa rõ nguyên nhân, tai nạn giao thông) biên bản khám nghiệm hiện trường (đối với các trường hợp trộm cắp tài sản; cướp tài sản, hiếp dâm...) cùng với các tài liệu, tang vật đã được phát hiện, thu giữ; kết quả giám định các dấu vết, tang vật như giám định dấu vết máu, dấu vết súng đạn, dấu vết đường vân...; biên bản đã ghi lời khai của người bị hại, người làm chứng...
  - Trên cơ sở kết quả kiểm tra các tài liệu, chứng cứ dùng làm cơ sở để ra quyết định không khởi tố vụ án, Kiểm sát viên báo cáo tính có căn cứ và hợp pháp của quyết định đó với Viện trưởng, Phó Viện trưởng hoặc lãnh đạo đơn vị và xử lý như sau:
    + Nếu thấy quyết định không khởi tố vụ án hình sự của cơ quan đã khởi tố có căn cứ thì thông báo cho các cơ quan đó biết; nếu chưa rõ căn cứ thì yêu cầu các cơ quan này bổ sung tài liệu, chứng cứ để làm rõ.
    + Nếu thấy quyết định không khởi tố vụ án hình sự của Cơ quan điều tra không có căn cứ thì yêu cầu Cơ quan điều tra huỷ bỏ và ra quyết định khởi tố vụ án; hoặc Kiểm sát viên báo cáo người có thẩm quyền ra quyết định huỷ bỏ quyết định không khởi tố vụ án và ra quyết định khởi tố vụ án theo quy định tại khoản 2 Điều 109 BLTTHS và gửi cho Cơ quan điều tra để tiến hành điều tra.
    + Nếu thấy quyết định không khởi tố vụ án hình sự của cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra không có căn cứ thì Kiểm sát viên báo cáo người có thẩm quyền ra quyết định huỷ bỏ quyết định này và ra quyết định khởi tố vụ án hình sự; đồng thời, yêu cầu cơ quan đã ra quyết định không khởi tố vụ án chuyển toàn bộ tài liệu có liên quan cho Cơ quan điều tra có thẩm quyền để tiến hành điều tra.
    + Kiểm sát việc ra quyết định tạm đình chỉ việc giải quyết tin báo, tố giác về tội phạm, kiến nghị khởi tố của Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra.
    BLTTHS năm 2014 quy định: trong trường hợp chưa xác định được người bị tố giác, báo tin về tội phạm, kiến nghị khởi tố hoặc trong trường hợp Đã trưng cầu giám định, yêu cầu nước ngoài tương trợ tư pháp nhưng chưa có kết quả giám định, kết quả tương trợ tư pháp mà đã hết thời hạn giải quyết tố giác, tin báo về tội phạm, kiến nghị khởi tố thì Cơ quan điều tra, cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra ra quyết định tạm đình chỉ việc giải quyết tin báo, tố giác tội phạm , kiến nghị khởi tố.
    Đối với trường hợp này, kiểm sát viên phải kiểm tra tính có căn cứ và hợp pháp của quyết định tạm đình chỉ trên: Nếu trong trường hợp không có căn cứ thì kiểm sát viên báo cáo lãnh đạo ra quyết định hủy bỏ quyết định tạm đình chỉ trên để tiếp tục tiến hành giải quyết theo quy định của pháp luật. (Theo dự thảo BLTTHS năm 2003)
  
  GIẢI QUYẾT YÊU CẦU KHỞI TỐ VỤ ÁN HÌNH SỰ CỦA HỘI ĐỒNG XÉT XỬ
  
  Theo quy định tại Điều 104 BLTTHS năm 2003, Hội đồng xét xử ra quyết định khởi tố hoặc yêu cầu Viện kiểm sát khởi tố vụ án hình sự nếu qua việc xét xử tại phiên tòa mà phát hiện được tội phạm hoặc người phạm tội mới cần phải điều tra. Yêu cầu khởi tố của Hội đồng xét xử được gửi cho Viện kiểm sát để xem xét, quyết định khởi tố.
  
  - Khi nhận được yêu cầu khởi tố vụ án hình sự của Hội đồng xét xử, Kiểm sát viên thụ lý vụ án tiến hành kiểm tra các tài liệu, chứng cứ và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền để xử lý như sau:
    + Nếu thấy yêu cầu khởi tố vụ án của Hội đồng xét xử có căn cứ thì ra quyết định khởi tố vụ án hình sự và chuyển ngay quyết định đó kèm theo tài liệu có liên quan đến Cơ quan điều tra có thẩm quyền để tiến hành điều tra;
    + Nếu thấy yêu cầu khởi tố vụ án hình sự của Hội đồng xét xử không có căn cứ thì ra quyết định không khởi tố vụ án hình sự và gửi quyết định đó cho Toà án nơi Hội đồng xét xử yêu cầu khởi tố.
  
  XÉT PHÊ CHUẨN QUYẾT ĐỊNH KHỞI TỐ BỊ CAN VÀ QUYẾT ĐỊNH THAY ĐỔI HOẶC BỔ SUNG QUYẾT ĐỊNH KHỞI TỐ BỊ CAN
  
  Theo Điều 126 BLTTHS năm 2003 và Điều 13 Quy chế THQCT & KSĐT:
  
  - Trong thời hạn ba ngày làm việc, kể từ ngày nhận được quyết định khởi tố bị can của Cơ quan điều tra hoặc cơ quan khác được giao nhiệm vụ tiến hành một số hoạt động điều tra, Kiểm sát viên thụ lý vụ án tiến hành kiểm tra tính có căn cứ và hợp pháp của quyết định khởi tố bị can.
    Kiểm sát viên phải tiến hành nghiên cứu, kiểm tra các văn bản, tài liệu, chứng cứ có liên quan, như: Công văn đề nghị xét phê chuẩn quyết định khởi tố bị can; Quyết định khởi tố vụ án; Quyết định khởi tố bị can; Biên bản giao quyết định khởi tố bị can. Các tài liệu làm căn cứ khởi tố bị can bao gồm: Đơn tố giác, tin báo về tội phạm và các tài liệu ban đầu do cơ quan, tổ chức, cá nhân cung cấp; tài liệu do Cơ quan điều tra kiểm tra, xác minh; Biên bản khám nghiệm hiện trường, khám nghiệm tử thi; Biên bản, kết luận giám định; Biên bản, kết quả định giá tài sản; Biên bản ghi lời khai của người làm chứng, người bị hại; Biên bản nhận dạng, đối chất; Biên bản bắt, khám xét khẩn cấp; Biên bản phạm tội quả tang; Biên bản ghi lời khai của người bị tình nghị thực hiện tội phạm, người bị bắt, bị tạm giữ; biên bản hỏi cung bị can; Trích, sao quyết định xử phạt hành chính; Bản kê các tài liệu trong hồ sơ và từng trang tài liệu được đánh dấu bút lục của Cơ quan điều tra.
  - Sau khi kiểm tra tính có căn cứ và tính hợp pháp của quyết định khởi tố bị can, nếu thấy quyết định khởi tố bị can có căn cứ và hợp pháp thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền để quyết định phê chuẩn quyết định khởi tố bị can và gửi ngay cho cơ quan đã khởi tố. Nếu thấy chưa rõ căn cứ xác định bị can phạm tội thì Kiểm sát viên yêu cầu cơ quan đã khởi tố bổ sung tài liệu, chứng cứ làm rõ căn cứ khởi tố.
  - Kiểm sát viên thụ lý giải quyết vụ án có thể hỏi cung bị can, lấy lời khai người làm chứng, người bị hại để làm rõ căn cứ khởi tố bị can trước khi báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, quyết định việc phê chuẩn hay huỷ bỏ quyết định khởi tố bị can. Biên bản ghi lời khai những người này do Kiểm sát viên lập được chuyển cho cơ quan đã khởi tố để đưa vào hồ sơ vụ án.
  - Nếu thấy ngoài bị can đã bị khởi tố còn có người khác đã thực hiện hành vi phạm tội trong vụ án chưa bị khởi tố thì Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu cơ quan có thẩm quyền ra quyết định khởi tố bị can đối với người đó; trong trường hợp sau khi nhận hồ sơ và kết luận điều tra mà phát hiện có người khác đã thực hiện hành vi phạm tội trong vụ án mà chưa bị khởi tố thì Kiểm sát viên báo cáo Viện trưởng hoặc Phó Viện trưởng để xem xét, quyết định việc khởi tố bị can theo qui định tại khoản 5 Điều 126 BLTTHS.
  - Nếu hết thời hạn tạm giữ vẫn không đủ căn cứ phê chuẩn quyết định khởi tố bị can đối với người đang bị tạm giữ thì Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định huỷ bỏ quyết định khởi tố bị can và yêu cầu cơ quan đã khởi tố bị can trả tự do ngay cho người bị tạm giữ.
  - Trong quá trình kiểm sát điều tra, nếu thấy hành vi phạm tội của bị can không phạm vào tội đã bị khởi tố mà phạm vào tội khác hoặc còn có hành vi phạm tội khác với tội danh đã khởi tố thì Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra ra quyết định thay đổi hoặc bổ sung quyết định khởi tố bị can hoặc trực tiếp ra quyết định thay đổi hoặc bổ sung quyết định khởi tố bị can và gửi cho Cơ quan điều tra để tiến hành điều tra trong thời hạn 24 giờ, kể từ khi ra quyết định thay đổi hoặc bổ sung quyết định khởi tố bị can, theo quy định tại khoản 2 Điều 127 BLTTHS.
  - Trong thời hạn ba ngày, kể từ ngày nhận được quyết định thay đổi hoặc bổ sung quyết định khởi tố bị can của Cơ quan điều tra, Kiểm sát viên thụ lý giải quyết vụ án kiểm tra tài liệu, chứng cứ, báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định phê chuẩn hoặc huỷ bỏ quyết định bổ sung hoặc thay đổi quyết định khởi tố bị can và gửi cho Cơ quan điều tra.
  - Trường hợp phải thay đổi hoặc bổ sung quyết định khởi tố bị can thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra ra quyết định thay đổi hoặc bổ sung quyết định khởi tố vụ án hình sự.
  - Nếu quá trình điều tra xác định được hành vi của bị can phạm vào tội được quy định tại khoản khác với khoản trong cùng một điều luật về cùng một tội danh đã khởi tố đối với bị can thì không phải thay đổi quyết định khởi tố bị can.
  - Nếu thấy cần tạm giam bị can theo thời hạn của tội phạm quy định tại khoản của điều luật có khung hình phạt nặng hơn hoặc chuyển vụ án để điều tra, truy tố theo thẩm quyền thì phải ghi rõ lý do này trong lệnh tạm giam hoặc trong quyết định chuyển vụ án.` },
            { title: '2.2. Kiểm sát biện pháp ngăn chặn', content: `XÉT PHÊ CHUẨN VIỆC BẮT NGƯỜI TRONG TRƯỜNG HỢP KHẨN CẤP
  
  - Theo khoản 4 Điều 81 BLTTHS, trong mọi trường hợp, việc bắt khẩn cấp phải được báo ngay cho Viện kiểm sát cùng cấp bằng văn bản kèm theo tài liệu liên quan đến việc bắt khẩn cấp để xét phê chuẩn. Trong thời hạn 12 giờ, kể từ khi nhận được đề nghị xét phê chuẩn và tài liệu liên quan đến việc bắt khẩn cấp, (thời hạn 12 giờ xét phê chuẩn được tính liên tục kể cả trong và ngoài giờ làm việc), Viện kiểm sát phải ra quyết định phê chuẩn hoặc quyết định không phê chuẩn. Nếu Viện kiểm sát quyết định không phê chuẩn thì người đã ra lệnh bắt phải trả tự do ngay cho người bị bắt.
  - Ngay sau khi nhận được hồ sơ đề nghị xét phê chuẩn lệnh bắt người trong trường hợp khẩn cấp, Kiểm sát viên thụ lý giải quyết vụ án kiểm tra các tài liệu, chứng cứ chứng minh tính có căn cứ của việc bắt khẩn cấp đối với từng trường hợp quy định tại khoản 1 Điều 81 BLTTHS.
  - Nếu qua nghiên cứu hồ sơ thấy có dấu hiệu của việc lạm dụng việc bắt khẩn cấp, tài liệu, chứng cứ trong hồ sơ chưa thể hiện rõ căn cứ để bắt khẩn cấp hoặc người bị bắt không nhận tội, các chứng cứ trong hồ sơ có mâu thuẫn, người bị bắt là người nước ngoài, người có chức sắc trong tôn giáo, người có uy tín trong đồng bào dân tộc ít người hoặc trong trường hợp cần thiết khác thì Kiểm sát viên trực tiếp gặp, hỏi người bị bắt trước khi báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, quyết định việc phê chuẩn.
  - Khi cần gặp, hỏi người bị bắt khẩn cấp, Kiểm sát viên thông báo trước với Cơ quan điều tra để phối hợp trong quá trình gặp, hỏi người bị bắt. Biên bản ghi lời khai của người bị bắt do Kiểm sát viên lập phải thực hiện theo đúng quy định tại Điều 95 và Điều 125 BLTTHS và được lưu vào hồ sơ vụ án và hồ sơ kiểm sát.
  - Trong thời hạn 12 giờ, kể từ khi nhận được hồ sơ đề nghị xét phê chuẩn và tài liệu liên quan đến việc bắt khẩn cấp, Viện kiểm sát phải quyết định việc phê chuẩn hoặc không phê chuẩn. Thời hạn này được tính liên tục, kể cả trong và ngoài giờ làm việc.
  
  KIỂM SÁT VIỆC TẠM GIỮ
  
  - Theo khoản 3 Điều 86 BLTTHS, trong thời hạn 12 giờ, kể từ khi ra quyết định tạm giữ, quyết định tạm giữ phải được gửi cho Viện kiểm sát cùng cấp. Nếu xét thấy việc tạm giữ không có căn cứ hoặc không cần thiết thì Viện kiểm sát ra quyết định hủy bỏ quyết định tạm giữ và người ra quyết định tạm giữ phải trả tự do ngay cho người bị tạm giữ.
  - Khi nhận được quyết định tạm giữ, gia hạn tạm giữ của Cơ quan điều tra, Kiểm sát viên tiến hành kiểm tra ngay tính có căn cứ và hợp pháp của việc tạm giữ, gia hạn tạm giữ để báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xử lý như sau:
    + Nếu thấy việc tạm giữ không có căn cứ hoặc không cần thiết thì yêu cầu Cơ quan điều tra ra quyết định huỷ bỏ quyết định tạm giữ hoặc trực tiếp ra quyết định huỷ bỏ quyết định tạm giữ và yêu cầu Cơ quan điều tra trả tự do ngay cho người bị tạm giữ.
    + Nếu xét thấy việc gia hạn tạm giữ không có căn cứ hoặc không cần thiết thì ra quyết định không phê chuẩn quyết định gia hạn tạm giữ và yêu cầu người đã ra quyết định tạm giữ trả tự do ngay cho người bị tạm giữ theo quy định tại Điều 87 BLTTHS.
    + Nếu thấy việc gia hạn tạm giữ có căn cứ và cần thiết thì ra quyết định phê chuẩn quyết định gia hạn tạm giữ.
    + Hàng tuần, Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra phối hợp với Thủ trưởng, Phó Thủ trưởng Cơ quan điều tra nắm số người bị bắt, bị tạm giữ, gia hạn tạm giữ; số người chuyển sang tạm giam; số người được trả tự do hoặc áp dụng biện pháp ngăn chặn khác; số người Viện kiểm sát không phê chuẩn việc bắt khẩn cấp, không phê chuẩn gia hạn tạm giữ; số người bị bắt không xử lý được bằng biện pháp hình sự; phát hiện và tổng hợp vi phạm của Cơ quan điều tra và báo cáo bằng văn bản lên Viện trưởng Viện kiểm sát cấp trên trực tiếp.
  
  PHÊ CHUẨN LỆNH BẮT BỊ CAN ĐỂ TẠM GIAM, LỆNH TẠM GIAM, QUYẾT ĐỊNH ÁP DỤNG, THAY ĐỔI HOẶC HUỶ BỎ BIỆN PHÁP TẠM GIAM
  
  - Theo các quy định tại Điều 80 và Điều 88 BLTTHS thì Thủ trưởng, Phó Thủ trưởng Cơ quan điều tra các cấp có quyền ra lệnh bắt bị can để tạm giam và ra lệnh tạm giam nhưng phải được Viện kiểm sát cùng cấp phê chuẩn trước khi thi hành.
  - Trong thời hạn ba ngày, kể từ khi nhận được đề nghị xét phê chuẩn lệnh bắt bị can để tạm giam, lệnh tạm giam kèm theo tài liệu có liên quan của Cơ quan điều tra, Kiểm sát viên kiểm tra tài liệu, chứng cứ, đối chiếu với quy định tại Điều 80 và Điều 88 BLTTHS để làm rõ thẩm quyền, đối tượng, điều kiện tạm giam đối với từng trường hợp và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, quyết định việc phê chuẩn và hoàn trả hồ sơ ngay cho Cơ quan điều tra. Trường hợp chưa rõ căn cứ thì ra văn bản yêu cầu Cơ quan điều tra bổ sung tài liệu chứng cứ làm rõ căn cứ để xem xét, quyết định việc phê chuẩn.
  - Theo quy định tại khoản 2 Điều 88 BLTTHS, đối với bị can là phụ nữ có thai hoặc đang nuôi con dưới ba mươi sáu tháng tuổi, là người già yếu, người bị bệnh nặng mà nơi cư trú rõ ràng thì không tạm giam mà áp dụng biện pháp ngăn chặn khác, trừ những trường hợp sau đây: Bị can bỏ trốn và bị bắt theo lệnh truy nã; bị can được áp dụng biện pháp ngăn chặn khác nhưng tiếp tục phạm tội hoặc cố ý gây cản trở nghiêm trọng đến việc điều tra, truy tố; bị can phạm tội xâm phạm an ninh quốc gia và có đủ căn cứ cho rằng nếu không tạm giam đối với họ thì họ sẽ gây nguy hại đến an ninh quốc gia.
    Nếu thấy đủ căn cứ để tạm giam bị can theo quy định tại Điều 88 BLTTHS và cần thiết phải tạm giam bị can, nhưng Cơ quan điều tra không ra lệnh bắt bị can để tạm giam, thì Kiểm sát viên thụ lý giải quyết vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra ra lệnh bắt bị can để tạm giam.
  - Sau khi phê chuẩn lệnh bắt bị can để tạm giam, lệnh tạm giam bị can, Kiểm sát viên thụ lý giải quyết vụ án phải kiểm sát chặt chẽ việc thi hành lệnh bắt bị can và thời hạn tạm giam bị can để kịp thời báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, xử lý như sau:
    + Nếu còn thời hạn tạm giam nhưng thấy biện pháp tạm giam đối với bị can không còn cần thiết thì đề nghị Cơ quan điều tra ra quyết định huỷ bỏ biện pháp tạm giam hoặc thay thế bằng một biện pháp ngăn chặn khác.
    + Nếu thời hạn tạm giam còn không quá 10 ngày mà Cơ quan điều tra chưa có văn bản đề nghị Viện kiểm sát gia hạn tạm giam bị can, thì Kiểm sát viên trao đổi với Điều tra viên để phối hợp xem xét vấn đề này.
    Trong thời hạn không quá 5 ngày trước khi hết hạn tạm giam, Kiểm sát viên thụ lý vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền để xem xét, quyết định một trong các phương án xử lý việc tạm giam bị can, như đề nghị Cơ quan điều tra huỷ bỏ, thay thế biện pháp tạm giam; gia hạn tạm giam đối với bị can hoặc Viện kiểm sát trực tiếp huỷ bỏ biện pháp tạm giam đối với bị can.
  
  QUYẾT ĐỊNH GIA HẠN TẠM GIAM ĐỂ ĐIỀU TRA
  
  - Theo quy định tại khoản 2 Điều 120 BLTTHS, trong trường hợp vụ án có nhiều tình tiết phức tạp, xét cần phải có thời gian dài hơn cho việc điều tra và không có căn cứ để thay đổi hoặc huỷ bỏ biện pháp tạm giam thì chậm nhất là mười ngày trước khi hết hạn tạm giam, Cơ quan điều tra phải có văn bản đề nghị Viện kiểm sát gia hạn tạm giam.
  - Đối với các vụ án được thụ lý điều tra ở cấp tỉnh và thuộc trường hợp được quy định tại đoạn 1 khoản 5 Điều 120 BLTTHS, Viện trưởng Viện kiểm sát nhân dân tối cao uỷ quyền cho Kiểm sát viên giữ chức vụ Vụ trưởng đơn vị thực hành quyền công tố và kiểm sát điều tra xem xét, quyết định việc gia hạn tạm giam lần thứ ba.
  - Trong trường hợp vụ án được thụ lý điều tra ở cấp Trung ương, Viện trưởng Viện kiểm sát nhân dân tối cao uỷ quyền cho Kiểm sát viên giữ chức vụ Vụ trưởng đơn vị thực hành quyền công tố và kiểm sát điều tra xem xét, quyết định việc gia hạn thời hạn tạm giam lần thứ nhất và lần thứ hai; Viện trưởng Viện kiểm sát nhân dân tối cao hoặc Phó Viện trưởng Viện kiểm sát nhân dân tối cao được Viện trưởng Viện kiểm sát nhân dân tối cao uỷ quyền xem xét, quyết định việc gia hạn tạm giam lần thứ ba.
  - Trong trường hợp cần thiết đối với tội xâm phạm an ninh quốc gia, Viện trưởng Viện kiểm sát nhân dân tối cao hoặc Phó Viện trưởng Viện kiểm sát nhân dân tối cao được Viện trưởng Viện kiểm sát nhân dân tối cao uỷ quyền xem xét, quyết định gia hạn tạm giam thêm một lần nữa không quá bốn tháng.
  - Những trường hợp gia hạn tạm giam bị can thuộc thẩm quyền của Viện kiểm sát cấp trên trực tiếp thì Viện kiểm sát cấp dưới phải có văn bản đề nghị gia hạn, trong đó báo cáo rõ các vấn đề như: Nội dung vụ án, hành vi phạm tội của bị can, lý do đề nghị gia hạn và chuyển hồ sơ vụ án lên Viện kiểm sát cấp trên.
    + Chậm nhất năm ngày làm việc trước khi hết hạn tạm giam, hồ sơ vụ án kèm theo văn bản đề nghị gia hạn phải có ở Viện kiểm sát cấp trên để xem xét, quyết định việc gia hạn.
    + Trong thời hạn không quá năm ngày làm việc, kể từ khi nhận được văn bản đề nghị và hồ sơ vụ án, Viện kiểm sát cấp trên phải ra quyết định gia hạn hoặc không gia hạn tạm giam; nếu không gia hạn tạm giam thì trong quyết định không gia hạn tạm giam phải nêu rõ lý do và được gửi ngay cho Viện kiểm sát cấp dưới.
  
  KIỂM SÁT VIỆC ÁP DỤNG, THAY ĐỔI HOẶC HUỶ BỎ CÁC BIỆN PHÁP NGĂN CHẶN KHÁC
  
  Kiểm sát viên thụ lý giải quyết vụ án phải kiểm sát chặt chẽ việc áp dụng, thay đổi hoặc huỷ bỏ các biện pháp ngăn chặn khác của Cơ quan điều tra, gồm: Cấm đi khỏi nơi cư trú (Điều 91 BLTTHS), bảo lĩnh (Điều 92 BLTTHS), đặt tiền hoặc tài sản có giá trị để bảo đảm (Điều 93 BLTTHS), bảo đảm việc áp dụng các biện pháp ngăn chặn này có căn cứ, đúng quy định của pháp luật.` },
            { title: '2.3. Kiểm sát hoạt động điều tra', content: `ĐỀ RA YÊU CẦU ĐIỀU TRA
  
  Để thực hiện tốt chức năng thực hành quyền công tố trong quá trình điều tra vụ án hình sự, Kiểm sát viên cần chủ động trao đổi với Điều tra viên được phân công điều tra vụ án về những vấn đề cần điều tra ngay từ khi kiểm sát việc khởi tố vụ án, khởi tố bị can, khám nghiệm hiện trường và các hoạt động điều tra khác của cơ quan điều tra.
  
  - Kiểm sát viên có thể đề ra yêu cầu điều tra bằng lời nói hoặc bằng văn bản trong quá trình trực tiếp kiểm sát khám nghiệm hiện trường, khám nghiệm tử thi, khám xét, hỏi cung bị can, lấy lời khai người làm chứng, người bị hại, đối chất, thực nghiệm điều tra. Đối với các hoạt động điều tra khác, sau khi phê chuẩn quyết định khởi tố bị can, Kiểm sát viên phải có văn bản yêu cầu điều tra, nêu rõ những vấn đề cần điều tra để thu thập, củng cố chứng cứ; hoàn thiện các thủ tục tố tụng hoặc để làm rõ những tình tiết liên quan đến những vấn đề phải chứng minh trong vụ án hình sự được quy định tại Điều 63 BLTTHS.
  - Đối với những vụ án trọng điểm, phức tạp, những vụ án được dư luận đặc biệt quan tâm và những trường hợp thấy có thể phải thay đổi, bổ sung quyết định khởi tố vụ án, khởi tố bị can thì Kiểm sát viên phải báo cáo xin ý kiến chỉ đạo của Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền trước khi ký văn bản yêu cầu điều tra. Văn bản yêu cầu điều tra phải được lưu vào hồ sơ kiểm sát một bản.
  - Kiểm sát viên phải kiểm sát chặt chẽ hoạt động điều tra của Điều tra viên, bảo đảm các yêu cầu điều tra được thực hiện đầy đủ. Khi thấy có vấn đề cần phải điều tra thêm, Kiểm sát viên kịp thời bổ sung yêu cầu điều tra; nếu Điều tra viên đề nghị, Kiểm sát viên có trách nhiệm giải thích rõ nội dung những yêu cầu điều tra. Trường hợp Điều tra viên không nhất trí thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, kiến nghị với Thủ trưởng Cơ quan điều tra giải quyết. Nếu do điều kiện khách quan mà Cơ quan điều tra không thực hiện được đầy đủ các yêu cầu điều tra thì phải nêu rõ lý do trong Bản kết luận điều tra vụ án.
  
  KIỂM SÁT VIỆC KHÁM NGHIỆM HIỆN TRƯỜNG
  
  Kiểm sát viên phải kiểm sát việc khám nghiệm hiện trường đối với tất cả các vụ việc mà Cơ quan điều tra tiến hành khám nghiệm. Đối với những vụ án gây hậu quả đặc biệt nghiêm trọng, những vụ án giết người không quả tang hoặc những vụ án phức tạp thì Viện trưởng, Phó Viện trưởng trực tiếp hoặc cùng Kiểm sát viên kiểm sát việc khám nghiệm hiện trường.
  
  - Trước khi khám nghiệm hiện trường, Kiểm sát viên phải chủ động nắm tình hình, yêu cầu Điều tra viên thông báo sự việc xảy ra để tham gia ý kiến vào việc chuẩn bị khám nghiệm, chủ động yêu cầu Điều tra viên tiến hành khám nghiệm hiện trường và lập biên bản khám nghiệm hiện trường theo đúng quy định tại Điều 150 và Điều 154 BLTTHS.
  - Nếu thấy người làm chứng, người bị hại hoặc bị can có thể chết hoặc mất khả năng khai báo, thì Kiểm sát viên phải yêu cầu Điều tra viên lấy lời khai ngay và ghi âm lời khai của họ.
  - Trong quá trình khám nghiệm hiện trường, Kiểm sát viên phải kiểm sát chặt chẽ các hoạt động khám nghiệm. Kiểm sát viên có thể chụp ảnh, vẽ sơ đồ, mô tả hiện trường, xem xét tại chỗ dấu vết, đồ vật, tài liệu có liên quan đến vụ án, lấy lời khai và ghi âm lời khai của người bị hại, người làm chứng... Các tài liệu này được lưu trong hồ sơ kiểm sát.
  
  **Một số vấn đề Kiểm sát viên cần chú ý khi kiểm sát khám nghiệm hiện trường:**
  1. Kiểm sát viên phải nắm tình hình về hiện trường (qua thông báo của Điều tra viên, dư luận nhân dân xung quanh hiện trường); tự mình quan sát và phân tích các yếu tố để kiểm tra tình trạng hiện trường xem còn nguyên vẹn hay đã bị thay đổi, nguyên nhân dẫn đến sự thay đổi ấy (các yếu tố con người, yếu tố thời tiết mưa nắng, bão lụt và động vật qua lại…); xác định phạm vi cần khám nghiệm và những loại dấu vết, đồ vật cần được xem xét, thu giữ.
  2. Đề xuất yêu cầu khám nghiệm cho phù hợp trên cơ sở tư duy logic; nghiên cứu quy luật hình thành dấu vết để suy đoán có thể phát hiện được loại dấu vết nào, ở đâu; dấu vết hình thành đúng hay trái với quy luật thông thường, sự phù hợp hay mâu thuẫn giữa các dấu vết, vật chứng để yêu cầu thu thập đầy đủ dấu vết, tránh làm mất dấu vết hoặc làm thay đổi tình trạng hiện trường. Chú ý xác định có hay không việc tạo hiện trường giả sau khi gây án.
  3. Yêu cầu Điều tra viên, kỹ thuật viên thực hiện đúng thủ tục tố tụng, phương pháp khám nghiệm trong việc vẽ sơ đồ, chụp ảnh; đo đạc theo đúng kích thước; tỷ lệ để mô tả đúng thực trạng hiện trường, thu lượm và xem xét tại chỗ dấu vết của tội phạm, đồ vật, tài liệu có liên quan đến vụ án.
  4. Phối hợp cùng với Điều tra viên đánh giá dấu vết, vật chứng đã thu lượm được để đặt ra các giả thuyết điều tra, định hướng cho việc khám nghiệm, thu lượm dấu vết được đầy đủ, chính xác và công tác truy tìm vật chứng, truy bắt thủ phạm.
  5. Chú ý xác định các dấu vết, đồ vật, các tài liệu quan trọng cần xem xét; những dấu vết, đồ vật, mẫu vật, tài liệu cần thu giữ, bảo quản nguyên trạng để phục vụ cho việc giám định và sử dụng làm chứng cứ.
  6. Kiểm tra việc lấy lời khai những người biết về sự việc ngay tại hiện trường; trường hợp người làm chứng, người bị hại hoặc bị can có thể chết hoặc mất khả năng khai báo.
  7. Kiểm sát viên phải ghi chép cẩn thận các tình tiết, đặc điểm các dấu vết quan trọng tại hiện trường; vẽ sơ đồ đặc điểm tả những phần, vị trí quan trọng để có cơ sở, tư liệu đối chiếu kiểm tra biên bản, sơ đồ khám nghiệm hiện trường. Yêu cầu biên bản khám nghiệm hiện trường phải được lập, sơ đồ hiện trường phải được vẽ ngay tại nơi khám nghiệm.
  8. Phối hợp cùng Điều tra viên phân tích, đánh giá đúng kết quả khám nghiệm; xem xét quyết định tiếp tục bảo vệ hiện trường để có thể khám nghiệm bổ sung, khám nghiệm lại; xác định rõ những dấu vết, vật chứng cần được trưng cầu giám định; nội dung cần trưng cầu để phục vụ cho công tác điều tra, giải quyết vụ án.
  9. Yêu cầu Điều tra viên và những người tham gia khám nghiệm giữ bí mật về kết quả khám nghiệm hiện trường, coi đó là bí mật điều tra không được tiết lộ, gây khó khăn cho công tác điều tra.
  10. Sau khi khám nghiệm, Kiểm sát viên phải báo cáo Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra về kết quả khám nghiệm hiện trường để có ý kiến chỉ đạo; trong khi kiểm sát việc khám nghiệm hoặc sau khi kết thúc khám nghiệm, nếu thấy việc khám nghiệm chưa đầy đủ, vi phạm các quy định tại Điều 150 và Điều 154 BLTTHS thì yêu cầu Điều tra viên khắc phục.
  
  KIỂM SÁT VIỆC KHÁM NGHIỆM TỬ THI
  
  Kiểm sát viên phải kiểm sát việc khám nghiệm tử thi trong mọi trường hợp khám nghiệm tử thi theo sự phân công. Khi thấy cần thiết, Viện trưởng, Phó Viện trưởng có thể trực tiếp hoặc cùng Kiểm sát viên kiểm sát việc khám nghiệm tử thi.
  
  - Kiểm sát viên phải chủ động yêu cầu Điều tra viên thực hiện đúng các quy định tại Điều 151 và Điều 154 BLTTHS về khám nghiệm tử thi và lập biên bản khám nghiệm tử thi.
  - Trong quá trình khám nghiệm, Kiểm sát viên yêu cầu Hội đồng khám nghiệm xem xét đầy đủ các dấu vết, thu thập tài liệu, chứng cứ để làm rõ nguyên nhân chết, tung tích của nạn nhân.
    + Trường hợp phải khai quật tử thi để khám nghiệm thì Kiểm sát viên phải kiểm tra về sự cần thiết khai quật; trình tự, thủ tục tiến hành khai quật theo đúng quy định của pháp luật tố tụng hình sự.
    + Sau khi khám nghiệm, Kiểm sát viên vào sổ thụ lý khám nghiệm; đồng thời báo cáo Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra về kết quả khám nghiệm tử thi để có ý kiến chỉ đạo.
    + Nếu phát hiện việc khám nghiệm vi phạm các quy định tại Điều 151 và Điều 154 BLTTHS, Kiểm sát viên cần trao đổi với Điều tra viên khắc phục vi phạm hoặc báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra khắc phục kịp thời.
  
  KIỂM SÁT VIỆC KHÁM XÉT, THU GIỮ, TẠM GIỮ VẬT CHỨNG, KÊ BIÊN TÀI SẢN
  
  Kiểm sát viên kiểm sát việc khám xét, thu giữ, tạm giữ vật chứng, kê biên tài sản phải yêu cầu Điều tra viên và những người tham gia khám xét chấp hành đúng các quy định tại các Điều 75, 140, 141, 142, 143, 144, 145, 146, 147 và 148 BLTTHS và các quy định pháp luật hiện hành.
  
  - Đối với những trường hợp Cơ quan điều tra đề nghị phê chuẩn lệnh khám người, chỗ ở, chỗ làm việc, địa điểm; lệnh thu giữ thư tín, bưu kiện, bưu phẩm thì Kiểm sát viên kiểm tra tính có căn cứ và hợp pháp của các lệnh này và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xử lý như sau:
    + Nếu đề nghị phê chuẩn của Cơ quan điều tra có đủ căn cứ thì ra quyết định phê chuẩn;
    + Nếu đề nghị phê chuẩn của Cơ quan điều tra không có căn cứ thì ra quyết định không phê chuẩn và nêu rõ lý do.
  - Đối với những trường hợp không thể trì hoãn, lệnh khám xét hoặc thu giữ bưu kiện, bưu phẩm không có sự phê chuẩn của Viện kiểm sát, thì ngay sau khi nhận được văn bản thông báo việc khám xét, Kiểm sát viên kiểm tra tính có căn cứ và hợp pháp của các lệnh, biên bản khám xét để kịp thời phát hiện vi phạm, báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền có văn bản yêu cầu Cơ quan điều tra khắc phục; đồng thời, theo dõi và kiểm tra việc bảo quản tài sản, xử lý vật chứng, giải quyết xử lý kịp thời những vấn đề liên quan đến vật chứng, tài sản theo quy định tại Điều 75 và Điều 76 BLTTHS.
  
  KIỂM SÁT VIỆC LẤY LỜI KHAI NGƯỜI LÀM CHỨNG, NGƯỜI BỊ HẠI, NGUYÊN ĐƠN, BỊ ĐƠN DÂN SỰ, NGƯỜI CÓ QUYỀN LỢI, NGHĨA VỤ LIÊN QUAN ĐẾN VỤ ÁN
  
  Để thu thập chứng cứ, xác định sự thật vụ án, Kiểm sát viên cần chủ động yêu cầu Điều tra viên kịp thời lấy lời khai của những người làm chứng và người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án; không để sót những người làm chứng quan trọng mà họ trực tiếp nghe được, nhìn thấy hành vi phạm tội, bảo đảm cho họ thực hiện quyền đưa ra tài liệu, đồ vật và những yêu cầu của mình để làm rõ vụ án; nếu thấy cần thiết thì đồng thời với việc ghi lời khai, có thể tiến hành ghi âm, chụp ảnh, ghi hình.
  
  - Khi kiểm sát việc lấy lời khai người làm chứng, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án, Kiểm sát viên yêu cầu Điều tra viên thực hiện đúng các quy định tại các Điều 133, 134, 135, 136 và 137 BLTTHS.
  - Trong quá trình điều tra và sau khi kết thúc điều tra vụ án, Kiểm sát viên có thể triệu tập và lấy lời khai người làm chứng, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án để kiểm tra chứng cứ trong các trường hợp lời khai của họ có mâu thuẫn với nhau hoặc mâu thuẫn với những chứng cứ khác đã thu thập hoặc có nghi ngờ về tính trung thực, khách quan trong lời khai của họ. Nếu việc triệu tập để lấy lời khai thực hiện trước khi kết thúc điều tra thì Kiểm sát viên thông báo cho Điều tra viên thụ lý vụ án về thời gian, địa điểm tiến hành việc lấy lời khai của những người này trước khi lấy lời khai để phối hợp thực hiện.
  - Kiểm sát viên phải thực hiện đúng quy định tại các Điều 133, 135, 136 và 137 BLTTHS trong việc triệu tập, lấy lời khai và ghi biên bản lời khai. Biên bản ghi lời khai do Kiểm sát viên tiến hành phải được đưa vào hồ sơ vụ án và sao lưu hồ sơ kiểm sát một bản.
  
  KIỂM SÁT VIỆC HỎI CUNG BỊ CAN
  
  Kiểm sát viên cần chủ động bàn với Điều tra viên kế hoạch và đề ra yêu cầu hỏi cung bị can ngay sau khi khởi tố bị can để làm rõ những vấn đề liên quan đến tội phạm đã khởi tố. Nếu thấy việc hỏi cung chưa đạt yêu cầu hoặc có vấn đề mới phát sinh thì Kiểm sát viên tiếp tục nêu yêu cầu để Điều tra viên hỏi cung làm rõ. Kiểm sát viên kiểm sát chặt chẽ việc hỏi cung bị can và việc lập biên bản hỏi cung bị can của Điều tra viên, bảo đảm việc hỏi cung và lập biên bản hỏi cung bị can thực hiện đúng trình tự, thủ tục quy định tại Điều 131 và Điều 132 BLTTHS.
  
  - Trong quá trình điều tra vụ án, khi có đề nghị của Cơ quan điều tra hoặc thấy bị can kêu oan, lời khai của bị can trước sau không thống nhất, lúc nhận tội, lúc chối tội; bị can khiếu nại về việc điều tra; có căn cứ để nghi ngờ về tính xác thực trong lời khai bị can hoặc trường hợp bị can bị khởi tố về tội đặc biệt nghiêm trọng thì Kiểm sát viên trực tiếp gặp, hỏi cung bị can. Trước khi hỏi cung, Kiểm sát viên phải báo cáo Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra để xin ý kiến chỉ đạo và thông báo trước cho Điều tra viên biết.
  - Sau khi kết thúc điều tra, nhận hồ sơ vụ án từ Cơ quan điều tra chuyển sang, Kiểm sát viên có thể trực tiếp hỏi cung bị can để kiểm tra tài liệu, chứng cứ có trong hồ sơ vụ án.
    Việc hỏi cung bị can và lập biên bản hỏi cung bị can do Kiểm sát viên tiến hành phải thực hiện theo đúng quy định tại Điều 131 và Điều 132 BLTTHS. Biên bản hỏi cung bị can của Kiểm sát viên phải được đưa vào hồ sơ vụ án và sao lưu hồ sơ kiểm sát một bản.
  
  KIỂM SÁT VIỆC ĐỐI CHẤT VÀ NHẬN DẠNG
  
  Trong quá trình kiểm sát điều tra, nếu thấy có mâu thuẫn trong lời khai giữa bị can, người bị hại, người làm chứng, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan đến vụ án, hoặc khi cần thiết phải nhận dạng người hay đồ vật, Kiểm sát viên yêu cầu Điều tra viên tiến hành việc đối chất hoặc nhận dạng.
  
  - Kiểm sát viên kiểm sát chặt chẽ việc đối chất hoặc nhận dạng, bảo đảm các hoạt động này được thực hiện theo đúng các quy định tại Điều 138 và Điều 139 BLTTHS. Kiểm sát viên có thể trực tiếp hoặc phối hợp cùng Điều tra viên tiến hành việc đối chất. Khi trực tiếp tiến hành đối chất, Kiểm sát viên thông báo trước cho Điều tra viên biết.
  - Sau khi kết thúc điều tra, Viện kiểm sát đã nhận hồ sơ vụ án, nếu thấy có mâu thuẫn trong lời khai của những người tham gia tố tụng thì Kiểm sát viên có thể tiến hành đối chất để làm rõ mà không phải trả hồ sơ cho Cơ quan điều tra để điều tra bổ sung. Nếu thấy cần phải nhận dạng thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra tiến hành việc nhận dạng.
  - Việc đối chất và lập biên bản đối chất do Kiểm sát viên tiến hành phải được thực hiện theo đúng quy định tại Điều 138 BLTTHS. Biên bản đối chất phải được đưa vào hồ sơ vụ án và sao, lưu hồ sơ kiểm sát một bản.
  
  KIỂM SÁT VIỆC THỰC NGHIỆM ĐIỀU TRA
  
  Kiểm sát viên cần yêu cầu Điều tra viên thực nghiệm điều tra đối với những vụ án cần kiểm tra và xác minh những tài liệu, những tình tiết có ý nghĩa đối với vụ án. Kiểm sát viên cần nghiên cứu nội dung, kế hoạch thực nghiệm điều tra; kiểm sát việc thực nghiệm điều tra, bảo đảm việc thực nghiệm điều tra và lập biên bản thực nghiệm điều tra tuân thủ đúng các quy định tại Điều 153 và Điều 154 BLTTHS.
  
  - Kiểm sát viên có thể trực tiếp hoặc cùng Điều tra viên tiến hành việc thực nghiệm điều tra. Khi tiến hành thực nghiệm điều tra, Kiểm sát viên thông báo trước cho Điều tra viên biết.
    Sau khi kết thúc điều tra, Viện kiểm sát đã nhận hồ sơ vụ án, qua nghiên cứu xét thấy cần phải thực nghiệm điều tra hoặc thực nghiệm điều tra lại để kiểm tra, đánh giá chứng cứ, tình tiết vụ án thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền trả hồ sơ cho Cơ quan điều tra để thực nghiệm điều tra hoặc thực nghiệm điều tra lại.
    Trường hợp thấy việc thực nghiệm điều tra hoặc thực nghiệm điều tra lại đối với hành vi, tình huống đơn giản thì Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra tổ chức việc thực nghiệm điều tra. Việc thực nghiệm điều tra và lập biên bản thực nghiệm điều tra của Viện kiểm sát phải tuân thủ các quy định tại Điều 153 và Điều 154 BLTTHS. Biên bản thực nghiệm điều tra phải được đưa vào hồ sơ vụ án và sao lưu hồ sơ kiểm sát một bản.
  
  KIỂM SÁT VIỆC TRƯNG CẦU GIÁM ĐỊNH VÀ VIỆC GIÁM ĐỊNH
  
  Kiểm sát viên cần chủ động phát hiện các vấn đề cần phải giám định để báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra tiến hành trưng cầu giám định. Kiểm sát viên phải kiểm sát việc trưng cầu giám định của Cơ quan điều tra và việc giám định của người giám định theo đúng quy định tại các Điều 155, 156, 157 và 158 BLTTHS.
  
  Kiểm sát viên có quyền tham dự việc giám định đối với những trường hợp phức tạp, nhưng phải báo trước cho người giám định.
  
  - Kiểm sát viên kiểm sát việc giám định nhằm bảo đảm nội dung trưng cầu giám định phải cụ thể, sát sự việc và những vấn đề cần kết luận; kết luận giám định phải giải đáp các nội dung của quyết định trưng cầu giám định.
  - Nếu thấy nội dung kết luận giám định chưa rõ, chưa đầy đủ hoặc phát sinh những vấn đề mới liên quan đến các tình tiết vụ án đã được kết luận trước đó, thì Kiểm sát viên thụ lý giải quyết vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra trưng cầu giám định bổ sung hoặc trực tiếp ra quyết định trưng cầu giám định bổ sung.
  - Nếu thấy có nghi ngờ về kết quả giám định hoặc có mâu thuẫn trong các kết luận giám định về cùng một vấn đề thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra ra quyết định trưng cầu giám định lại hoặc trực tiếp ra quyết định trưng cầu giám định lại.
    Kiểm sát viên phải kiểm sát để đảm bảo việc giám định bổ sung và giám định lại theo đúng quy định tại Điều 159 BLTTHS.
  
  KIỂM SÁT VIỆC DÙNG TIẾNG NÓI VÀ CHỮ VIẾT TRONG TỐ TỤNG HÌNH SỰ
  
  - Kiểm sát viên thực hiện các hoạt động kiểm sát để đảm bảo mọi hoạt động tố tụng hình sự được tiến hành bằng tiếng Việt; người tham gia tố tụng dùng tiếng nói và chữ viết của dân tộc mình theo quy định của BLTTHS.
  - Đối với người bị tạm giữ, bị can và những người tham gia tố tụng khác mà không sử dụng được tiếng Việt hoặc bị câm, bị điếc, Kiểm sát viên cần chủ động yêu cầu Điều tra viên bảo đảm cho họ có quyền thông qua người phiên dịch hoặc người biết dấu hiệu của người câm, người điếc để thực hiện quyền và nghĩa vụ của mình.
    Kiểm sát viên cần chủ động yêu cầu Điều tra viên giải thích quyền và nghĩa vụ của người phiên dịch cũng như người biết dấu hiệu của người câm, người điếc theo quy định của pháp luật. Việc phiên dịch, diễn tả bằng tiếng việt dấu hiệu của người câm, người điếc phải được ghi biên bản theo quy định tại Điều 95 BLTTHS và đưa vào hồ sơ vụ án.
  
  KIỂM SÁT VIỆC THỰC HIỆN QUYỀN VÀ NGHĨA VỤ CỦA NHỮNG NGƯỜI THAM GIA TỐ TỤNG
  
  Kiểm sát viên cần chủ động yêu cầu Điều tra viên giải thích và bảo đảm thực hiện quyền và nghĩa vụ của người bị bắt, bị tạm giữ, bị can và những người tham gia tố tụng khác trong hoạt động điều tra theo quy định tại Điều 62 BLTTHS. Việc giải thích quyền và nghĩa vụ của người tham gia tố tụng phải được ghi vào biên bản theo quy định tại Điều 95 BLTTHS và đưa vào hồ sơ vụ án.
  
  - Trong quá trình kiểm sát điều tra, khi xác định bắt buộc phải có người bào chữa theo quy định tại khoản 2 Điều 57 BLTTHS mà bị can hoặc người đại diện hợp pháp của họ không mời người bào chữa, thì Kiểm sát viên yêu cầu Điều tra viên báo cáo Thủ trưởng, Phó Thủ trưởng Cơ quan điều tra yêu cầu Đoàn luật sư phân công Văn phòng luật sư cử người bào chữa cho họ hoặc đề nghị Uỷ ban Mặt trận Tổ quốc Việt Nam, tổ chức thành viên của Mặt trận cử người bào chữa cho thành viên của tổ chức mình.
    + Trường hợp các tổ chức trên đã cử người bào chữa, nhưng bị can hoặc người đại diện hợp pháp của họ yêu cầu thay đổi người bào chữa thì Kiểm sát viên căn cứ vào khoản 2 và khoản 3 Điều 56 BLTTHS yêu cầu Điều tra viên báo cáo Thủ trưởng hoặc Phó Thủ trưởng Cơ quan điều tra xem xét, giải quyết.
    + Trường hợp các tổ chức trên đã cử người bào chữa, nhưng bị can và người đại diện hợp pháp của họ từ chối người bào chữa thì Kiểm sát viên phải yêu cầu Điều tra viên lập biên bản và đưa vào hồ sơ vụ án.
  - Trong thời hạn ba ngày làm việc, kể từ khi nhận được đề nghị tham gia tố tụng trong giai đoạn truy tố của người bào chữa, người bảo vệ quyền lợi của đương sự, Kiểm sát viên xem xét các giấy tờ liên quan đến việc bào chữa, việc bảo vệ quyền lợi của đương sự theo quy định của pháp luật và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền cấp giấy chứng nhận người bào chữa, người bảo vệ quyền lợi của đương sự để họ tham gia tố tụng; trường hợp từ chối cấp giấy chứng nhận phải nêu rõ lý do và thông báo cho họ biết.
  
  KIỂM SÁT VIỆC NHẬP HOẶC TÁCH VỤ ÁN HÌNH SỰ ĐỂ TIẾN HÀNH ĐIỀU TRA
  
  Khi nhận được quyết định nhập hoặc tách vụ án hình sự của Cơ quan điều tra, nếu thấy việc nhập hoặc tách vụ án hình sự không có căn cứ thì Kiểm sát viên thụ lý giải quyết vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định huỷ bỏ quyết định nhập hoặc tách vụ án hình sự, bảo đảm việc nhập hoặc tách vụ án hình sự theo đúng quy định tại Điều 117 BLTTHS.
  
  GIẢI QUYẾT TRANH CHẤP VỀ THẨM QUYỀN ĐIỀU TRA
  
  - Khi có tranh chấp về thẩm quyền điều tra giữa các Cơ quan điều tra thuộc các ngành khác nhau thì Viện trưởng Viện kiểm sát cùng cấp nơi tội phạm xảy ra hoặc nơi phát hiện tội phạm quyết định.
  - Khi có tranh chấp về thẩm quyền điều tra giữa các Cơ quan điều tra cùng ngành ở cấp nào thì Viện trưởng Viện kiểm sát cấp đó yêu cầu Thủ trưởng quản lý cùng cấp giải quyết.
  - Trong trường hợp cần thiết, Cơ quan điều tra có thẩm quyền có quyền yêu cầu cơ quan được giao nhiệm vụ tiến hành một số hoạt động điều tra chuyển ngay hồ sơ vụ án để trực tiếp điều tra. Khi có tranh chấp về thẩm quyền điều tra giữa Bộ đội biên phòng, Hải quan, Kiểm lâm, lực lượng Cảnh sát biển thì Viện trưởng Viện kiểm sát có thẩm quyền nơi xảy ra vụ án quyết định.
  
  KIỂM SÁT VIỆC LẬP HỒ SƠ VỤ ÁN
  
  Kiểm sát viên phải kiểm sát chặt chẽ việc lập hồ sơ vụ án hình sự của Điều tra viên, bảo đảm từng trang tài liệu trong hồ sơ bắt khẩn cấp, hồ sơ khởi tố vụ án, hồ sơ khởi tố bị can và các hồ sơ khác trong quá trình điều tra phải được đóng dấu bút lục của Cơ quan điều tra và kèm theo bảng kê đầy đủ tên tài liệu, số trang từng tài liệu và lưu trong hồ sơ vụ án. Nếu các hồ sơ gửi Viện kiểm sát xét phê chuẩn, thì sau khi kết thúc việc phê chuẩn, Kiểm sát viên thụ lý giải quyết vụ án phải đóng dấu bút lục của Viện kiểm sát vào các tài liệu đó và chuyển cho Cơ quan điều tra đưa vào hồ sơ vụ án. Trong quá trình khởi tố, điều tra, tài liệu của Cơ quan điều tra hoặc của Viện kiểm sát thu thập đều phải được đưa vào hồ sơ vụ án theo đúng trình tự tố tụng hình sự như khởi tố, điều tra vụ án. Sau khi kết thúc điều tra, các tài liệu trong hồ sơ do Cơ quan điều tra thống nhất đánh số thứ tự một lần và lập bảng thống kê đầy đủ các tài liệu có trong hồ sơ vụ án từ 01 cho đến hết.
  
  **Kiểm sát viên phải thực hiện một số yêu cầu sau khi kiểm sát việc lập hồ sơ vụ án của Điều tra viên:**
  1. Nâng cao chất lượng đề ra yêu cầu điều tra và yêu cầu Cơ quan điều tra tiến hành điều tra. Việc này giúp cho Kiểm sát viên kiểm sát được các tài liệu có trong hồ sơ vụ án.
  2. Trong quá trình kiểm sát việc thiết lập các tài liệu, thu thập chứng cứ của Điều tra viên thông qua việc kiểm sát nội dung và hình thức của các tài liệu, chứng cứ có trong hồ sơ vụ án thì cần chú ý đến nội dung các biên bản được lập trong các hoạt động tố tụng… đảm bảo các tài liệu này phải được thiết lập theo đúng trình tự của quy định BLTTHS và đảm bảo tính chặt chẽ về nội dung.
  3. Kiểm sát viên phải chú ý kiểm sát tính khách quan và sự phù hợp về thời gian, địa điểm trong các tài liệu do Điều tra viên thu thập, như: Thời gian, địa điểm hỏi cung hoặc ghi lời khai không được mâu thuẫn với nhau.
  4. Kiểm sát viên phải yêu cầu Điều tra viên cung cấp đầy đủ tài liệu khi xem xét phê chuẩn các quyết định của Cơ quan điều tra theo đúng quy định của Thông tư liên tịch số 05/2005 như các tài liệu trong hồ sơ xét phê chuẩn lệnh bắt người trong trường hợp khẩn cấp; hồ sơ đề nghị xét phê chuẩn quyết định khởi tố bị can và phê chuẩn lệnh tạm giam trong trường hợp người đang bị tạm giữ bị khởi tố bị can; hồ sơ đề nghị xét phê chuẩn quyết định khởi tố bị can (trường hợp không bị tạm giữ), quyết định thay đổi hoặc bổ sung quyết định khởi tố bị can v.v.
  5. Khi xét phê chuẩn các quyết định hoặc khi nghiên cứu hồ sơ vụ án, Kiểm sát viên nên phô tô những tài liệu quan trọng để lưu vào hồ sơ kiểm sát. Tuy nhiên, cũng cần tránh tình trạng lấy việc phô tô tất cả các tài liệu thay cho việc trích cứu tài liệu trong hồ sơ chính của vụ án khi lập hồ sơ kiểm sát.
  6. Khi Kiểm sát viên tiến hành một số hoạt động điều tra ngay trong giai đoạn điều tra vụ án hình sự như: Hỏi cung bị can, ghi lời khai người làm chứng, đối chất, thực nghiệm điều tra... Những hoạt động này là một biện pháp nhằm kiểm sát quá trình lập hồ sơ của Điều tra viên, thẩm định lại các tài liệu đã được thu thập trong hồ sơ vụ án. Đối với các tài liệu do Kiểm sát viên thu thập trong quá trình xét phê chuẩn các quyết định của Cơ quan điều tra như: Biên bản ghi lời khai người tạm giữ, biên bản hỏi cung bị can… phải được chuyển cho Cơ quan điều tra để đưa vào hồ sơ vụ án. Việc chuyển giao này phải được lập thành biên bản ghi rõ tên tài liệu, số trang tài liệu.
  7. Khi kiểm sát việc lập hồ sơ vụ án của Điều tra viên còn cần phải kiểm sát việc tuân thủ các thủ tục tố tụng của các tài liệu, chứng cứ trong hồ sơ vụ án: Kiểm sát nội dung các quyết định tố tụng như: Quyết định khởi tố vụ án, khởi tố bị can; quyết định phục hồi điều tra vụ án, bị can, quyết định tạm giữ và lệnh tạm giam… đảm bảo cho các quyết định này được thiết lập đúng theo các quy định của tố tụng hình sự; đúng mẫu ban hành của Bộ Công an; do người có thẩm quyền ra quyết định; đủ căn cứ ban hành quyết định; thể hiện rõ nội dung hành vi; điều khoản áp dụng, thậm chí cả con dấu, chữ ký, dấu chức danh cũng phải đảm bảo đúng quy định của tố tụng.
  8. Kiểm sát viên cần đặc biệt chú ý kiểm sát nội dung hành vi bị khởi tố và điều luật áp dụng trong các quyết định khởi tố vụ án, quyết định khởi tố bị can, vì vấn đề này trong thực tế Điều tra viên không để ý và thường có sai sót dẫn đến vi phạm tố tụng. Kiểm sát viên phải kiểm sát việc tống đạt, giao nhận, thông báo các quyết định tố tụng tới các đối tượng có liên quan và những người tham gia tố tụng khác nhằm đảm bảo các quyền lợi và nghĩa vụ có liên quan của những người tham gia tố tụng, như: Tống đạt các quyết định khởi tố bị can; quyết định thay đổi, bổ sung Quyết định khởi tố bị can và các quyết định khác của Cơ quan điều tra, các quyết định phê chuẩn, không phê chuẩn của Viện kiểm sát tới bị can.
  
  - Sau khi kết thúc điều tra, nhận hồ sơ vụ án, những tài liệu do Viện kiểm sát thu thập ở giai đoạn truy tố phải được đưa vào hồ sơ vụ án và đánh số thứ tự tiếp theo số tài liệu trong hồ sơ do Cơ quan điều tra chuyển sang; không được thay đổi thứ tự bút lục trong hồ sơ vụ án.
  
  GIỮ BÍ MẬT ĐIỀU TRA
  
  Kiểm sát viên phải giữ bí mật điều tra; đồng thời, yêu cầu Điều tra viên giữ bí mật điều tra và yêu cầu người tham gia tố tụng, người chứng kiến không được tiết lộ bí mật điều tra. Nếu phát hiện cán bộ điều tra, Điều tra viên, người tham gia tố tụng, người chứng kiến tiết lộ bí mật điều tra, thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng xem xét, xử lý, kiến nghị xử lý theo quy định của pháp luật.
  
  VIỆC CHUYỂN VỤ ÁN ĐỂ ĐIỀU TRA THEO THẨM QUYỀN
  
  Trường hợp thấy vụ án không thuộc thẩm quyền điều tra của Cơ quan điều tra cấp mình, Kiểm sát viên thụ lý giải quyết vụ án báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra tiến hành các thủ tục để Viện kiểm sát cùng cấp ra quyết định chuyển vụ án cho Cơ quan điều tra có thẩm quyền tiếp tục điều tra theo quy định tại Điều 116 BLTTHS.
  
  Nếu phải chuyển vụ án ra ngoài phạm vi tỉnh, thành phố trực thuộc Trung ương hoặc ngoài phạm vi quân khu thì Cơ quan điều tra cấp huyện, Cơ quan điều tra cấp khu vực tiến hành các thủ tục để Viện kiểm sát cấp huyện, Viện kiểm sát quân sự khu vực có văn bản đề nghị Viện kiểm sát cấp tỉnh, Viện kiểm sát quân sự cấp quân khu ra quyết định chuyển vụ án. Nếu vụ án do Cơ quan điều tra cấp tỉnh, Cơ quan điều tra quân sự cấp quân khu đề nghị chuyển thì Viện kiểm sát cấp tỉnh, Viện kiểm sát quân sự cấp quân khu ra quyết định chuyển vụ án. Trong thời hạn ba ngày, kể từ khi nhận được đề nghị chuyển vụ án của Viện kiểm sát cấp huyện, Viện kiểm sát quân sự khu vực hoặc của Cơ quan điều tra cấp tỉnh, Cơ quan điều tra quân sự cấp quân khu thì Viện kiểm sát cấp tỉnh, Viện kiểm sát quân sự cấp quân khu phải ra quyết định chuyển vụ án.
  
  Trong thời hạn 24 giờ, kể từ khi ra quyết định chuyển vụ án, Viện kiểm sát có thẩm quyền phải gửi quyết định chuyển vụ án cho Cơ quan điều tra, Viện kiểm sát cấp huyện, Viện kiểm sát quân sự khu vực, Cơ quan điều tra cấp tỉnh, Cơ quan điều tra cấp quân khu đã đề nghị chuyển vụ án.
  
  - Khi chuyển vụ án để điều tra theo thẩm quyền, Viện kiểm sát nơi chuyển vụ án phải chuyển hồ sơ kiểm sát điều tra vụ án cho Viện kiểm sát có thẩm quyền giải quyết. Hồ sơ kiểm sát điều tra vụ án chuyển cho Viện kiểm sát nơi tiếp nhận phải được đánh số bút lục của Viện kiểm sát nơi chuyển vụ án và lập danh mục thống kê các tài liệu kèm theo.
  
  KIỂM SÁT VIỆC CHẤP HÀNH THỜI HẠN ĐIỀU TRA, PHỤC HỒI ĐIỀU TRA, ĐIỀU TRA BỔ SUNG, ĐIỀU TRA LẠI
  
  - Kiểm sát viên phải thường xuyên yêu cầu Điều tra viên chấp hành thời hạn điều tra, thời hạn phục hồi điều tra, điều tra bổ sung, điều tra lại theo quy định tại Điều 119 và Điều 121 BLTTHS.
  - Trường hợp cần gia hạn điều tra do tính chất phức tạp của vụ án theo đề nghị của Cơ quan điều tra, Kiểm sát viên phải kiểm tra các căn cứ để gia hạn điều tra và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, quyết định việc gia hạn thời hạn điều tra.
  - Đối với trường hợp thuộc thẩm quyền gia hạn của Viện kiểm sát cấp trên, Viện kiểm sát cấp dưới phải có văn bản báo cáo rõ nội dung vụ án và lý do xin gia hạn do Viện trưởng hoặc Phó Viện trưởng ký, gửi cùng hồ sơ vụ án lên Viện kiểm sát cấp trên. Chậm nhất là năm ngày trước khi hết hạn điều tra, văn bản đề nghị gia hạn điều tra của Viện kiểm sát cấp dưới kèm theo hồ sơ vụ án phải có ở Viện kiểm sát cấp trên. Trước khi hết hạn điều tra, Viện trưởng hoặc Phó Viện trưởng Viện kiểm sát cấp trên phải xét, quyết định gia hạn hoặc không gia hạn thời hạn điều tra vụ án; nếu không gia hạn phải nêu rõ lý do và thông báo cho Viện kiểm sát cấp dưới biết.
  
  PHÁT HIỆN VÀ XỬ LÝ VI PHẠM
  
  - Kiểm sát viên thụ lý giải quyết vụ án phải kịp thời phát hiện vi phạm pháp luật trong hoạt động điều tra để yêu cầu khắc phục, báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Thủ trưởng Cơ quan điều tra xử lý nghiêm minh Điều tra viên đã vi phạm pháp luật trong khi tiến hành điều tra. Nếu vi phạm của Điều tra viên có dấu hiệu tội phạm, thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra có thẩm quyền khởi tố vụ án hình sự. Nếu hành vi của Điều tra viên có dấu hiệu tội phạm xâm phạm hoạt động tư pháp thì báo cáo Viện trưởng Viện kiểm sát nhân dân tối cao giao cho Cục điều tra của Viện kiểm sát nhân dân tối cao khởi tố, điều tra theo thẩm quyền.
  - Đối với các quyết định không có căn cứ và trái pháp luật của Phó Thủ trưởng Cơ quan điều tra và Điều tra viên thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Thủ trưởng Cơ quan điều tra ra quyết định thay đổi hoặc huỷ bỏ hoặc trực tiếp ra quyết định thay đổi hoặc huỷ bỏ. Đối với các quyết định không có căn cứ và trái pháp luật của Thủ trưởng Cơ quan điều tra thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định thay đổi hoặc huỷ bỏ.
  - Đối với các quyết định của Cơ quan điều tra đã được Viện kiểm sát phê chuẩn mà phát hiện không có căn cứ và trái pháp luật thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định thay đổi hoặc huỷ bỏ.
    Quyết định thay đổi hoặc huỷ bỏ các quyết định của Cơ quan điều tra phải được gửi ngay cho Cơ quan điều tra để thực hiện.
  - Trong quá trình thực hành quyền công tố và kiểm sát điều tra vụ án hình sự, Kiểm sát viên có trách nhiệm tổng hợp các vi phạm pháp luật của Cơ quan điều tra, các vi phạm pháp luật và những sơ hở thiếu sót trong các lĩnh vực quản lý kinh tế, xã hội của các cơ quan, tổ chức có liên quan, báo cáo Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra ra văn bản kiến nghị khắc phục, áp dụng các biện pháp phòng ngừa tội phạm và vi phạm pháp luật.` },
            { title: '2.4. Tạm đình chỉ, đình chỉ, kết thúc điều tra', content: `KIỂM SÁT VIỆC TẠM ĐÌNH CHỈ ĐIỀU TRA, TRUY NÃ BỊ CAN
  
  - Theo Điều 37 Quy chế THQCT & KSĐT, Kiểm sát viên kiểm sát việc tạm đình chỉ điều tra của Cơ quan điều tra, bảo đảm các trường hợp tạm đình chỉ điều tra thực hiện theo đúng quy định tại Điều 160 BLTTHS; nếu thấy quyết định tạm đình chỉ điều tra không có căn cứ thì báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định huỷ bỏ quyết định tạm đình chỉ điều tra của Cơ quan điều tra và yêu cầu Cơ quan điều tra phục hồi điều tra theo quy định tại Điều 165 BLTTHS.
  - Khi phát hiện bị can trốn hoặc không xác định được bị can ở đâu thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra ra quyết định truy nã bị can trước khi tạm đình chỉ điều tra theo quy định tại Điều 161 BLTTHS. Quyết định truy nã bị can cần ghi đầy đủ tội danh mà bị can bị khởi tố.
  - Viện trưởng, Phó Viện trưởng hoặc lãnh đạo đơn vị kiểm sát điều tra phải phân công Kiểm sát viên thường xuyên theo dõi, quản lý các vụ án đã tạm đình chỉ. Khi thấy lý do tạm đình chỉ không còn thì Kiểm sát viên được phân công thụ lý giải quyết vụ án phải báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra văn bản yêu cầu Cơ quan điều tra phục hồi điều tra vụ án để tiến hành điều tra.
  - Khi Kiểm sát viên được phân công thụ lý vụ án tạm đình chỉ điều tra chuyển công tác; chuyển làm việc khác hoặc có lý do khác phải nghỉ việc thì Viện trưởng, Phó Viện trưởng hoặc Lãnh đạo đơn vị kiểm sát điều tra phải phân công Kiểm sát viên khác tiếp tục theo dõi, quản lý vụ án đó.
  - Viện kiểm sát các cấp phải mở sổ quản lý, theo dõi các vụ án tạm đình chỉ và định kỳ (3 tháng, 6 tháng, 1 năm) báo cáo Viện trưởng Viện kiểm sát cùng cấp và Viện kiểm sát cấp trên trực tiếp.
  
  KIỂM SÁT VIỆC KẾT THÚC ĐIỀU TRA
  
  Theo Điều 38 Quy chế THQCT & KSĐT, Kiểm sát viên kiểm sát chặt chẽ việc kết thúc điều tra vụ án, bảo đảm các vụ án đã được khởi tố, điều tra phải được kết thúc bằng bản kết luận điều tra đề nghị truy tố hoặc bản kết luận điều tra kèm theo quyết định đình chỉ điều tra của Cơ quan điều tra. Bản kết luận điều tra đề nghị truy tố và bản kết luận điều tra kèm theo quyết định đình chỉ điều tra của Cơ quan điều tra phải thể hiện được đầy đủ các nội dung được quy định tại Điều 163 và Điều 164 BLTTHS. Bản kết luận điều tra đề nghị truy tố hoặc quyết định đình chỉ điều tra phải được gửi cho bị can, người bào chữa theo quy định tại khoản 4 Điều 162 BLTTHS.
  
  - Trường hợp Cơ quan điều tra đã làm bản kết luận điều tra đề nghị truy tố nhưng hồ sơ chưa chuyển sang Viện kiểm sát, nếu qua kiểm sát việc kết thúc điều tra Kiểm sát viên thấy có đủ căn cứ đình chỉ điều tra thì báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền có ý kiến để Cơ quan điều tra làm lại bản kết luận điều tra và ra quyết định đình chỉ điều tra.
  
  KIỂM SÁT VIỆC ĐÌNH CHỈ ĐIỀU TRA
  
  Theo Điều 39 Quy chế THQCT & KSĐT, Trong thời hạn mười lăm ngày, kể từ khi nhận được quyết định đình chỉ điều tra kèm theo hồ sơ vụ án, Kiểm sát viên nghiên cứu hồ sơ vụ án để kiểm tra tính có căn cứ và hợp pháp của quyết định đình chỉ điều tra theo quy định tại Điều 164 BLTTHS và báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, xử lý như sau:
  1. Nếu quyết định đình chỉ điều tra có căn cứ thì có văn bản trả lại hồ sơ cho Cơ quan điều tra để giải quyết theo thẩm quyền;
  2. Nếu quyết định đình chỉ điều tra không có căn cứ thì ra quyết định huỷ bỏ quyết định đình chỉ điều tra của Cơ quan điều tra và yêu cầu Cơ quan điều tra phục hồi điều tra;
  3. Nếu thấy đủ căn cứ để truy tố thì quyết định huỷ bỏ quyết định đình chỉ điều tra và ra quyết định truy tố bị can.
  
  - Trong trường hợp quyết định đình chỉ điều tra có căn cứ thì Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền phải yêu cầu Cơ quan điều tra ra quyết định đình chỉ điều tra huỷ bỏ ngay biện pháp ngăn chặn, trả lại các đồ vật, tài liệu đã tạm giữ hoặc tịch thu cho bị can hoặc người có liên quan. Đối với biện pháp ngăn chặn do Viện kiểm sát phê chuẩn thì yêu cầu Cơ quan điều tra tiến hành các thủ tục để Viện kiểm sát ra quyết định huỷ bỏ.
  
  KIỂM SÁT VIỆC PHỤC HỒI ĐIỀU TRA
  
  Theo Điều 40 Quy chế THQCT & KSĐT, khi nhận được quyết định phục hồi điều tra vụ án của Cơ quan điều tra, Kiểm sát viên kiểm tra căn cứ phục hồi điều tra theo quy định tại Điều 165 BLTTHS, báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, xử lý như sau:
  1. Nếu quyết định phục hồi điều tra có căn cứ thì cử Kiểm sát viên tiến hành tố tụng đối với vụ án;
  2. Nếu quyết định phục hồi điều tra không có căn cứ thì ra quyết định huỷ bỏ quyết định phục hồi điều tra của Cơ quan điều tra.
  
  - Nếu việc đình chỉ điều tra theo quy định tại điểm 5 và điểm 6 Điều 107 BLTTHS (đã hết thời hiệu truy cứu trách nhiệm hình sự; tội phạm đã được đại xá) mà bị can không đồng ý và yêu cầu điều tra lại thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra ra quyết định phục hồi điều tra hoặc trực tiếp ra quyết định phục hồi điều tra và gửi quyết định đó cho Cơ quan điều tra để tiến hành điều tra.` },
            { title: '2.5. Quyết định truy tố, đình chỉ vụ án', content: `
              GIAI ĐOẠN TRUY TỐ: NHIỆM VỤ, QUYỀN HẠN VKSND
  I. THỰC HÀNH QUYỀN CÔNG TỐ
  - Áp dụng, thay đổi, hủy bỏ biện pháp bắt, tạm giữ, tạm giam, hạn chế quyền con người/công dân; yêu cầu CQĐT truy nã bị can.
  - Yêu cầu cơ quan, tổ chức, cá nhân cung cấp tài liệu liên quan.
  - Tự điều tra bổ sung chứng cứ (không cần trả hồ sơ) hoặc khi Tòa yêu cầu.
  - Khởi tố/thay đổi/bổ sung khởi tố vụ án, bị can; trả hồ sơ bổ sung.
  - Tách, nhập, chuyển vụ án; áp dụng thủ tục rút gọn, bắt buộc chữa bệnh.
  - Gia hạn/không gia hạn truy tố, ngăn chặn.
  - Truy tố/không truy tố bị can.
  - Đình chỉ/tạm đình chỉ/phục hồi vụ án, bị can.
  - Các quyền khác theo BLTTHS.
  
  II. KIỂM SÁT HOẠT ĐỘNG TƯ PHÁP
  - Kiểm sát tố tụng; xử lý vi phạm.
  - Kiến nghị phòng ngừa tội phạm.
  - Các quyền kiểm sát khác theo BLTTHS.
  
  III. THỰC HIỆN CỤ THỂ
  1. Tiếp nhận & thụ lý (Điều 41 Quy chế)
     - Đối chiếu bản kê tài liệu/vật chứng; kiểm tra giao Kết luận ĐT (khoản 4 Điều 162 BLTTHS).
     - Thiếu → chưa nhận.
     - Đủ → ký nhận, vào sổ, ghi ngày (góc trên trái bìa), báo lãnh đạo, giao KSV (xác nhận sổ thụ lý).
  
  2. Biện pháp ngăn chặn (Điều 42 Quy chế)
     - Kiểm tra ngay; báo lãnh đạo quyết định áp dụng/thay đổi/hủy.
     - Tạm giam:
       + Còn > thời hạn truy tố (khoản 1 Điều 166) → không cần lệnh mới.
       + Còn nhưng không đủ → trước 5 ngày hết hạn, ra lệnh mới (tổng ≤ thời hạn truy tố); chuyển Giám thị/Trưởng nhà tạm giữ.
  
  3. Thời hạn truy tố (Điều 43 Quy chế)
     - Theo khoản 1 Điều 166 BLTTHS.
     - ≤10 ngày trước hết hạn, nếu phức tạp → báo lãnh đạo gia hạn.
  
  4. Nghiên cứu hồ sơ
     a. Thủ tục tố tụng
        - Kiểm tra quyết định, giao quyết định, hành vi tố tụng (khám nghiệm, đối chất, lấy lời khai...).
     b. Nhân thân bị can
        - Lý lịch tư pháp (mẫu Bộ Công an), xác nhận địa phương.
        - Giấy khai sinh, giám định sức khỏe/tâm thần, tài liệu gia đình (liệt sỹ, thương binh...).
        - Tiền án/sự: so sánh lý lịch, trích lục, bản án; xác định xóa án, tái phạm.
     c. Kết luận ĐT & chứng cứ
        - Kết luận ĐT: nội dung, diễn biến, chứng cứ, tội danh (Điều 163, 164).
        - Chứng cứ: hợp pháp, xác thực, liên quan; buộc/gỡ tội.
        - Lời khai: bị can (nhận/chối/kêu oan → phúc cung), bị hại, người liên quan, người làm chứng.
        - Biên bản: khám nghiệm, thu giữ, đối chất, nhận dạng.
        - Giám định: bắt buộc (khoản 3 Điều 155), đầy đủ, căn cứ; yêu cầu giải thích/giám định lại.
        - Thiệt hại: vật chất (định giá - NĐ 26/2005), phi vật chất (dư luận).
        - Tăng nặng (Điều 48 BLHS), giảm nhẹ (Điều 46 + NQ 01/2000).
        - Quyết định khác: xử lý vật chứng, truy nã, đình chỉ.
     d. Đánh giá
        - Đủ/thiếu? Bổ sung gì?
        - Tội danh, điều khoản BLHS.
        - Ghi chép: khoa học, bút lục, ngày/giờ/địa điểm; không sao chép toàn bộ.
  
  5. Báo cáo án
     - Văn bản (Phiếu đề xuất/Báo cáo án).
     - Nội dung:
       + Lý lịch, nhân thân, tiền án/sự.
       + Tóm tắt vụ án, chứng cứ, quan điểm ĐT & VKS.
       + Đề xuất: truy tố (tội danh, điều khoản), trả bổ sung, đình chỉ... (căn cứ, lập luận).
  
  6. Quyết định truy tố (Điều 42 Quy chế)
     - Đủ căn cứ → dự thảo Cáo trạng (Điều 167, mẫu VKSNDTC).
     - Thiếu → trả bổ sung (Điều 168).
     - Đình chỉ: khoản 2 Điều 105, Điều 107 BLTTHS; Điều 19, 25, khoản 2 Điều 69 BLHS.
     - Tạm đình chỉ: bệnh tâm thần/ hiểm nghèo (giám định); bỏ trốn (yêu cầu truy nã).
     - 3 ngày: thông báo/giao quyết định (bị can/bào chữa, biên bản); chuyển Tòa.
     - Quyết định cấp dưới → gửi cấp trên; trái luật → hủy, tiếp tục.
  
  7. Trả hồ sơ bổ sung (Điều 168 BLTTHS)
     - Thiếu chứng cứ quan trọng (Điều 63, 64; TTLT 01/2010):
       + Hành vi phạm tội, thời gian/địa điểm, thủ đoạn.
       + Người thực hiện, lỗi, năng lực TNHS, mục đích/động cơ.
       + Tăng nặng/giảm nhẹ, nhân thân, thiệt hại.
     - Không trả nếu: truy tố/xét xử được; không thu thập được (ví dụ: chỉ 2/3 nhân chứng).
     - Tội khác/đồng phạm khác (không tách - khoản 2 Điều 117).
     - Vi phạm nghiêm trọng thủ tục:
       + Không phê chuẩn, không bào chữa (khoản 2 Điều 57).
       + Không giao quyết định, không phiên dịch (Điều 61).
       + Mờm cung, bức cung, không đúng thẩm quyền...
     - Không trả nếu: vi phạm nhẹ; bị can đủ 18 tuổi khi truy tố.
  
  8. Đình chỉ/Tạm đình chỉ
     - Đình chỉ: căn cứ trên.
     - Tạm đình chỉ: 2 trường hợp trên.
     - Nhiều bị can → áp dụng riêng.
     - 3 ngày: thông báo/giao quyết định (biên bản).
  
  9. Cáo trạng
     - Căn cứ: Điều 13 Luật TCVKSND, Điều 36, 166, 167 BLTTHS.
     - Bố cục:
       1. Căn cứ pháp lý: khởi tố, phục hồi, nhập/tách, chuyển vụ án.
       2. Hành vi phạm tội:
          - Thời gian (chính xác/khoảng), địa điểm (chi tiết).
          - Hành vi, thủ đoạn, động cơ, hậu quả, chứng cứ (bút lục, điển hình).
          - Đồng phạm: vai trò riêng; nhiều tội/bị can: theo thời gian/vai trò/tính chất.
          - Thiệt hại: giá trị, xử lý vật chứng, bồi thường.
       3. Kết luận:
          - Tóm tắt hành vi, hậu quả, vai trò (từ chính → phụ; tội nặng → nhẹ).
          - Lý lịch bị can (đầy đủ, thành tích, tạm giữ/giam).
       4. Quyết định: Truy tố + Tòa + tội danh + điều khoản.
          - Kèm: hồ sơ (tập/trang), vật chứng, danh sách triệu tập.
     - Ký: Viện trưởng/Phó (cấp dưới); ủy quyền Vụ trưởng (VKSNDTC).
     - 3 ngày: giao bị can (biên bản), gửi Tòa, VKS trên, CQĐT.
     - Hình thức: đúng mẫu 107 (QĐ 07/2008), sạch sẽ, thuyết phục.
  
  10. Chuyển vụ án (Điều 45 Quy chế)
      - Không thẩm quyền → chuyển VKS có thẩm quyền (khoản 4 Điều 166); sao lưu hồ sơ kiểm sát.
      - Cấp tỉnh → huyện: chuyển làm cáo trạng.
      - Trung ương:
        + Tòa tỉnh: làm cáo trạng, ủy quyền THQCT & KSXX sơ thẩm.
        + Tòa huyện: chuyển cấp huyện, thông báo cấp tỉnh theo dõi.
      - Án phức tạp/trọng điểm: cấp dưới tham gia nghiên cứu từ đầu; khắc phục sai sót.
      - Thống nhất → chuyển Tòa; khác → báo cấp trên.
      - Tòa trả bổ sung: kiểm tra căn cứ → chuyển lên/yêu cầu CQĐT hoặc trả Tòa.
              ` },
            { title: '2.6. Thủ tục tố tụng với người chưa thành niên', content: `Thực hành quyền công tố và kiểm sát việc áp dụng thủ tục tố tụng đối với người bị bắt, bị tạm giữ, bị can là người chưa thành niên
  1. Trong vụ án hình sự có người bị bắt, người bị tạm giữ, bị can là người chưa thành niên thì Kiểm sát viên phải yêu cầu Điều tra viên xác định rõ tuổi, mức độ phát triển về thể chất, tinh thần và khả năng nhận thức về hành vi phạm tội; điều kiện sinh sống và giáo dục; có hay không có người thành niên xúi giục; nguyên nhân và điều kiện phạm tội của người chưa thành niên.
  2. Đối tượng áp dụng thủ tục tố tụng đối với người chưa thành niên là người bị bắt, người bị tạm giữ, bị can, bị cáo là người từ đủ 14 tuổi đến dưới 18 tuổi
  3. Nắm vững các nguyên tắc xử lý đối với người chưa thành niên phạm tội quy định tại Điều 69 BLHS
  4. Để xác định tuổi của người chưa thành niên, phải xác định chính xác ngày, tháng, năm sinh của họ, căn cứ vào các tài liệu hợp pháp như giấy khai sinh, sổ hộ khẩu gia đình, các giấy tờ, tài liệu khác. Cần phải áp dụng mọi biện pháp để xác định độ tuổi được chính xác. Trong trường hợp cơ quan tiến hành tố tụng đã áp dụng mọi biện pháp hợp pháp mà vẫn không xác định được ngày, tháng sinh của bị can, bị cáo thì căn cứ vào điều 6 thông tư 01/2011/TTLT-VKSTC-TANDTC-BCA-BTP-BLĐTBXH ngày 12/07/2011. Tuổi của bị can, bị cáo được xác định như sau:
     + Trường hợp xác định được tháng sinh cụ thể nhưng không xác định được ngày thì trong tháng đó lấy ngày cuối cùng của tháng đó làm ngày sinh của bị can, bị cáo.
     + Trường hợp xác định được quý cụ thể của năm, nhưng không xác định được ngày tháng nào trong quý đó thì lấy ngày cuối cùng của tháng cuối cùng trong quý đó làm ngày sinh của bị can, bị cáo;
     + Trường hợp xác định được cụ thể nửa đầu năm hay nửa cuối năm, nhưng không xác định được ngày tháng nào trong nửa đầu năm hoặc nửa cuối năm đó thì lấy ngày 30 tháng 6 hoặc ngày 31 tháng 12 tương ứng của năm đó làm ngày sinh của bị can, bị cáo;
     + Trường hợp xác định được năm sinh cụ thể nhưng không xác định được ngày tháng sinh của bị can, bị cáo thì lấy ngày 31 tháng 12 của năm đó làm ngày sinh của bị can, bị cáo.
     + Trường hợp không xác định được năm sinh của bị can, bị cáo là người chưa thành niên thì phải tiến hành giám định để xác định tuổi của họ.
  5. Nếu thấy đủ căn cứ truy cứu trách nhiệm hình sự đối với người chưa thành niên phạm tội, Kiểm sát viên báo cáo Viện trưởng; Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra quyết định phê chuẩn quyết định khởi tố bị can; xem xét việc phê chuẩn các lệnh bắt, lệnh gia hạn tạm giữ, lệnh tạm giam của Cơ quan điều tra theo quy định tại Điều 302 và Điều 303 BLTTHS; nếu thấy không đủ căn cứ để truy cứu trách nhiệm hình sự đối với người chưa thành niên thì báo cáo, đề xuất việc không phê chuẩn quyết định khởi tố bị can và các quyết định tố tụng khác.
  6. Trong quá trình khởi tố, điều tra, truy tố các vụ án do người chưa thành niên phạm tội gây ra, cơ quan tiến hành tố tụng cần thực hiện đúng nguyên tắc xử lý đối với người chưa thành niên phạm tội quy định tại Điều 69 Bộ luật hình sự. Đặc biệt cần xem xét việc miễn trách nhiệm hình sự nếu có đủ điều kiện quy định tại Khoản 2 Điều 69 Bộ luật hình sự, thì Viện kiểm sát ra quyết định miễn trách nhiệm hình sự và giao họ cho gia đình, cơ quan hoặc tổ chức giám sát, giáo dục nhằm giúp họ tự sửa chữa lỗi lầm và tái hòa nhập cộng đồng.
  7. Khi kiểm sát việc lấy lời khai, hoặc hỏi cung những người bị tạm giữ, bị can là người từ đủ 14 tuổi đến dưới 16 tuổi hoặc là người chưa thành niên có nhược điểm về tâm thần hoặc thể chất hoặc trong những trường hợp cần thiết khác, Kiểm sát viên phải yêu cầu Điều tra viên triệu tập đại diện của gia đình, đại diện của nhà trường, Đoàn thanh niên Cộng sản Hồ Chí Minh, tổ chức khác nơi người đó học tập, lao động, sinh sống tham gia tố tụng. Trường hợp đã được triệu tập mà đại diện gia đình cố ý vắng mặt mà không có lý do chính đáng thì việc lấy lời khai hoặc hỏi cung những người này vẫn được tiến hành và biên bản lấy lời khai hoặc biên bản hỏi cung phải ghi rõ lý do đó theo quy định tại Điều 306 BLTTHS.
  
  Thực hành quyền công tố và kiểm sát việc áp dụng biện pháp bắt buộc chữa bệnh
  1. Khi có căn cứ cho rằng người thực hiện hành vi nguy hiểm cho xã hội không có năng lực trách nhiệm hình sự theo quy định tại Điều 13 BLHS thì Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền yêu cầu Cơ quan điều tra trưng cầu giám định pháp y (nếu vụ án đang trong giai đoạn điều tra) hoặc trực tiếp trưng cầu giám định pháp y (nếu vụ án đã kết thúc điều tra, hồ sơ vụ án đã chuyển sang Viện kiểm sát) để làm sáng tỏ tình trạng tâm thần và bệnh tâm thần của người có hành vi nguy hiểm cho xã hội và xác định người có hành vi nguy hiểm cho xã hội có khả năng nhận thức hoặc điều khiển hành vi của mình hay không.
     Căn cứ vào kết luận của Hội đồng giám định pháp y, Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền có thể quyết định áp dụng biện pháp bắt buộc chữa bệnh đối với người thực hiện hành vi nguy hiểm cho xã hội theo quy định tại khoản 2 Điều 311 BLTTHS; nếu thấy không cần thiết phải áp dụng biện pháp bắt buộc chữa bệnh thì có thể giao họ cho gia đình hoặc người giám hộ trông nom dưới sự giám sát của cơ quan Nhà nước có thẩm quyền theo quy định tại khoản 1 Điều 43 BLHS.
  2. Sau khi nhận được hồ sơ vụ án và bản kết luận điều tra đối với trường hợp đã trưng cầu giám định pháp y, Kiểm sát viên kiểm tra kỹ hồ sơ vụ án, kết luận của Hội đồng giám định pháp y để báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên có thẩm quyền ra quyết định xử lý vụ án theo quy định tại Điều 313 BLTTHS.
  
  Thực hành quyền công tố, kiểm sát việc áp dụng thủ tục rút gọn
  1. Sau khi nhận được quyết định khởi tố vụ án, theo đề nghị của Cơ quan điều tra hoặc xét thấy vụ án có đủ các điều kiện quy định tại Điều 319 BLTTHS, Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền xem xét, ra quyết định áp dụng thủ tục rút gọn và gửi ngay quyết định đó cho Cơ quan điều tra và bị can hoặc người đại diện hợp pháp của họ trong thời hạn 24 giờ, kể từ khi ra quyết định áp dụng thủ tục rút gọn.
     Nếu quyết định áp dụng thủ tục rút gọn bị khiếu nại thì trong thời hạn ba ngày, kể từ ngày nhận được khiếu nại, Viện trưởng Viện kiểm sát có trách nhiệm giải quyết khiếu nại; nếu khiếu nại đó có căn cứ thì Viện trưởng ra quyết định huỷ bỏ quyết định áp dụng thủ tục rút gọn và vụ án được tiến hành theo thủ tục chung.
  2. Sau khi có quyết định áp dụng thủ tục rút gọn, Kiểm sát viên kiểm sát chặt chẽ thời hạn điều tra và việc lập hồ sơ vụ án của Điều tra viên, bảo đảm thời hạn tạm giữ, tạm giam bị can để điều tra, truy tố theo đúng quy định tại các Điều 321 và 322 BLTTHS. Trong thời hạn bốn ngày, kể từ ngày nhận được quyết định đề nghị truy tố của Cơ quan điều tra và hồ sơ vụ án, Kiểm sát viên báo cáo Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được Viện trưởng uỷ quyền ra một trong những quyết định sau đây: Truy tố bị can ra trước Toà án bằng quyết định truy tố; trả hồ sơ điều tra bổ sung; tạm đình chỉ vụ án; đình chỉ vụ án.` },
          ],
        },
        {
          title: '3. QUẢN LÝ, CHỈ ĐẠO',
          subsections: [
            { title: '3.1. Lập và quản lý hồ sơ kiểm sát', content: `1. Khi thực hiện công tác thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự, Kiểm sát viên phải lập hồ sơ kiểm sát án hình sự theo đúng quy định tại Quyết định số 07/QĐ ngày 12/01/2006 của Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  2. Hồ sơ kiểm sát điều tra án hình sự có đầy đủ các tài liệu phản ánh thủ tục tố tụng; các tài liệu điều tra thu thập được làm chứng cứ chứng minh tội phạm, người có hành vi phạm tội; các tài liệu phản ánh hoạt động của Kiểm sát viên, Lãnh đạo đơn vị kiểm sát điều tra, Phó Viện trưởng, Viện trưởng khi thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự; các tài liệu hướng dẫn chỉ đạo nghiệp vụ của Viện kiểm sát cấp trên, của Lãnh đạo liên ngành và Cấp uỷ (nếu có). Hồ sơ kiểm sát điều tra cũng phải được đánh số bút lục thứ tự từ 01 cho đến hết như hồ sơ vụ án.
  
  3. Việc quản lý, sử dụng, bảo quản hồ sơ kiểm sát điều tra vụ án hình sự được thực hiện theo Quyết định số 92 ngày 01/01/2001 và Quyết định số 07/QĐ ngày 12/01/2006 của Viện trưởng Viện kiểm sát nhân dân tối cao.` },
            { title: '3.2. Thỉnh thị và trả lời thỉnh thị', content: ` - Viện kiểm sát cấp dưới phải báo cáo thỉnh thị Viện kiểm sát cấp trên những vụ việc được quy định trong danh mục phải thỉnh thị ban hành kèm theo Quy chế về thông tin, báo cáo, quản lý công tác trong ngành Kiểm sát nhân dân và những việc khác mà Viện kiểm sát cấp dưới thấy cần thiết phải thỉnh thị Viện kiểm sát cấp trên. Báo cáo thỉnh thị Viện kiểm sát cấp trên do Viện trưởng hoặc Phó Viện trưởng Viện kiểm sát cấp dưới ký gửi kèm theo hồ sơ vụ án.
  Việc thỉnh thị và trả lời thỉnh thị phải theo đúng quy định về báo cáo thỉnh thị và trả lời thỉnh thị được quy định tại Quy chế về thông tin, báo cáo, quản lý công tác trong ngành Kiểm sát nhân dân.
  - Trong thời hạn bảy ngày (đối với án cấp huyện) và mười lăm ngày (đối với án cấp tỉnh), kể từ ngày nhận được thỉnh thị và hồ sơ vụ án, đơn vị nghiệp vụ cấp trên phải nghiên cứu kỹ hồ sơ và nội dung thỉnh thị và có văn bản hướng dẫn rõ ràng, cụ thể để Viện kiểm sát cấp dưới nghiên cứu thực hiện. Đối với những vụ án phức tạp về chứng cứ, cần có thời gian nghiên cứu dài hơn phải thông báo lại để cấp thỉnh thị biết. Thời hạn nghiên cứu và trả lời thỉnh thị không được quá thời hạn giải quyết vụ án theo luật định. Đơn vị nghiệp vụ của Viện kiểm sát cấp trên trực tiếp chịu trách nhiệm về quan điểm hướng dẫn của mình.
  Đối với hướng dẫn của đơn vị nghiệp vụ cấp trên, Viện kiểm sát cấp dưới nghiên cứu vận dụng và chịu trách nhiệm về quyết định của mình; nếu không đồng ý với hướng dẫn thì phải có văn bản nêu rõ lý do cho đơn vị nghiệp vụ cấp trên biết; nếu thấy cần thiết thì báo cáo Viện trưởng hoặc Phó Viện trưởng Viện kiểm sát cấp trên cho ý kiến chỉ đạo tiếp.` },
            { title: '3.3. Quản lý hồ sơ, tài liệu', content: `- Công văn giấy tờ, tài liệu gửi đi và đến phải được đăng ký vào sổ sách văn thư và thực hiện chế độ lưu theo đúng quy định.
  - Kiểm sát viên được phân công thực hành quyền công tố và kiểm sát điều tra, kiểm sát xét xử sơ thẩm có trách nhiệm quản lý hồ sơ vụ án, không được để mất tài liệu hồ sơ và thực hiện việc gửi lưu trữ hồ sơ theo quy định. Hết giờ làm việc, phải bảo quản hồ sơ vụ án trong tủ có khoá của cơ quan. Không được đem hồ sơ hoặc tài liệu trong hồ sơ vụ án ra khỏi cơ quan, trừ trường hợp vì lý do công vụ và được sự đồng ý của Lãnh đạo Viện hoặc Lãnh đạo đơn vị kiểm sát điều tra.
  Khi chuyển công tác hoặc vì lý do khác phải nghỉ việc, bị thay đổi, Kiểm sát viên phải bàn giao ngay đầy đủ tài liệu của vụ án và những thông tin có liên quan cho Kiểm sát viên được phân công thay thế; việc giao nhận hồ sơ, tài liệu của vụ án phải lập biên bản giao, nhận và đưa vào hồ sơ kiểm sát.` },
            { title: '3.4. Chế độ bảo mật', content: `- Kiểm sát viên làm nhiệm vụ thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự phải tuyệt đối giữ bí mật về thông tin trong vụ án. Nếu chưa có sự đồng ý của Lãnh đạo Viện thì không được cung cấp tin tức, tình hình, tài liệu, hồ sơ vụ án cho bất cứ người nào trong và ngoài cơ quan.
  - Kiểm sát viên phải giữ bí mật ý kiến của Lãnh đạo Viện, Lãnh đạo đơn vị kiểm sát điều tra đã chỉ đạo giải quyết vụ án; không được tư vấn cho bị can, người bị hại, những người tham gia tố tụng khác; không được tiếp bị can, đương sự hoặc người tham gia tố tụng khác trong các vụ án mà mình đang thụ lý ngoài nơi quy định.
  - Phiếu đề xuất của Kiểm sát viên, báo cáo thỉnh thị và các văn bản hướng dẫn nghiệp vụ đối với vụ án của Viện kiểm sát cấp trên, biên bản họp liên ngành và các văn bản khác không phải là văn bản tố tụng phải được lưu vào hồ sơ kiểm sát, không được đưa vào hồ sơ chính của vụ án.
  - Các báo cáo về thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự chỉ gửi tới các cơ quan, đơn vị có liên quan trong nội bộ ngành, không được gửi cho các ngành khác nếu không có yêu cầu của Lãnh đạo Viện. Việc gửi các tài liệu về hoạt động thực hành quyền công tố và kiểm sát điều tra theo yêu cầu của Cấp uỷ Đảng do Viện trưởng Viện kiểm sát cùng cấp quyết định.` },
          ],
        },
        { title: '4. CÁC BIỂU MẪU TỐ TỤNG', subsections: [] },
      ],
    },
    {
      part: 'Phần Thứ Ba',
      title: 'THỰC HÀNH QUYỀN CÔNG TỐ VÀ KIỂM SÁT XÉT XỬ',
      sections: [
        { 
          title: '1. CHỨC NĂNG, NHIỆM VỤ', 
          subsections: [
            { title: '1.1. Chức năng', content: ` VĂN BẢN QUY PHẠM PHÁP LUẬT
  - Bộ luật Hình sự năm 1999 (Sửa đổi, bổ sung năm 2009)- BLHS;
  - Bộ luật Tố tụng Hình sự năm 2003- BLTTHS;
  - Bộ luật Dân sự năm 2005- BLDS;
  - Bộ luật Tố tụng dân sự năm 2004- BLTTDS;
  - Luật Tổ chức Viện kiểm sát nhân dân năm 2014
  - Nghị quyết số 49-NQ/TW ngày 02.6.2005 của Bộ Chính trị về chiến lược cải cách tư pháp đến năm 2020;
  - Nghị quyết số 08-NQ/TW ngày 02.01.2002 của Bộ Chính trị về một số nhiệm vụ trọng tâm của công tác tư pháp;
  - Nghị quyết 04/2004/NQ-HĐTP ngày 5 tháng 11 năm 2004 Nghị quyết của Hội đồng Thẩm phán Tòa án nhân dân tối cao hướng dẫn thi hành một số quy định trong phần thứ ba: Xét xử sơ thẩm của BLTTHS 2003;
  - Nghị quyết 05/2005/NQ-HĐTP ngày 8 tháng 12 năm 2005 Nghị quyết của Hội đồng Thẩm phán Tòa án nhân dân tối cao hướng dẫn thi hành một số quy định trong phần thứ tư: Xét xử phúc thẩm của BLTTHS 2003;
  - Nghị quyết 02/2007/NQ-HĐTP ngày 2 tháng 10 năm 2007 2005 Nghị quyết của Hội đồng Thẩm phán Tòa án nhân dân tối cao hướng dẫn thi hành một số quy định trong phần thứ năm: Thi hành bản án và quyết định của Tòa án của BLTTHS 2003;
  - Nghị quyết số 03/2006/NQ-HĐTP ngày 08 tháng 7 năm 2006 của Hội đồng Thẩm phán Toà án nhân dân tối cao hướng dẫn một số quy định của Bộ luật Dân sự năm 2005 (gọi tắt là Nghị quyết số 03/2006/NQ-HĐTP);
  - Thông tư liên tịch số 02/2005/TTLT - VKSTC - BCA - BQP - BTP ngày 10 tháng 8 năm 2005 của Viện Kiểm sát nhân dân tối cao, Bộ Công an, Bộ Quốc phòng hường dẫn thi hành một số quy định của Bộ luật Tố tụng Hình sự năm 2003 về khiếu nại, tố cáo (gọi tắt là Thông tư liên tịch số 02/2005)
  - Thông tư liên tịch số 05/2005/TTLT - VKSTC - BCA - BQP ngày 07 tháng 9 năm 2005 của Viện Kiểm sát nhân dân tối cao, Bộ Công an, Bộ Quốc phòng hướng dẫn về quan hệ hợp tác giữa cơ quan điều tra và Viện Kiểm sát trong việc thực hiện một số quy định của Bộ luật Tố tụng Hình sự năm 2003 (gọi tắt là Thông tư liên tịch số 05/2005);
  - Thông tư liên tịch số 02/2001/TTLT - TATC - VKSTC - BCA - BTP ngày 25.12.2001 của Toà án nhân dân tối cao, Viện Kiểm sát nhân dân tối cao, Bộ Công an, Bộ Tư pháp hướng dẫn áp dụng một số quy định tại Chương XIIV "Các tội xâm phạm sở hữu trong Bộ luật Hình sự năm 1999", (gọi tắt là Thông tư liên tịch số 02/2001);
  - Quy chế công tác THQCT&KSXX hình sự;
  -  Quy chế công tác THQCT&KSĐT hình sự;
  - Nghị quyết số 509/2004/NQ-UBTVQHII ngày 29.4.2004 của UBTVQH11hướng dẫn thi hành BLTTHS (gọi tắt là Nghị quyết số 509/2004).
  - Nghị quyết số 82/2014/NQ-UBTVQH13 ngày 24.11.2014 của UBTVQH13 về việc thi hành Luật tổ chức Viện kiểm sát nhân dân
  - Chỉ thị số 03/2008/CT-VKSTC-VPT1 của Viện trưởng VKSND tối cao Ngày 19/6/2008 về tăng cường công tác kháng nghị phúc thẩm nhằm nâng cao chất lượng kháng nghị theo các yêu cầu của cải cách tư pháp;
  - Quyết định số 92 ngày 01/01/2001 của Viện trưởng VKSND tối cao
  - Quyết định số 07/QĐ ngày 12/01/2006 của Viện trưởng VKSND tối cao
  - Quyết định số 88/2004/QĐ-TTg ngày 21/5/2004 của Thủ tướng Chính phủ
  - Quyết định số 14/2005/QĐ-VKSTC ngày 21/01/2005 của Viện trưởng Viện kiểm sát nhân dân tối cao` },
            { title: '1.2. Nhiệm vụ, quyền hạn', content: `Căn cứ các điều 18, 19 Luật Tổ chức VKSND 2014 thì khi thực hành quyền công tố và kiểm sát xét xử các vụ án hình sự, Viện kiểm sát có nhiệm vụ và quyền hạn sau đây:
  - Nhiệm vụ, quyền hạn của Viện kiểm sát nhân dân khi thực hành quyền công tố trong giai đoạn xét xử vụ án hình sự
  + Công bố cáo trạng hoặc quyết định truy tố theo thủ tục rút gọn, quyết định khác về việc buộc tội đối với bị cáo tại phiên tòa.
  + Xét hỏi, luận tội, tranh luận, phát biểu quan điểm về việc giải quyết vụ án tại phiên tòa.
  + Kháng nghị bản án, quyết định của Tòa án trong trường hợp phát hiện oan, sai, bỏ lọt tội phạm, người phạm tội.
  + Thực hiện nhiệm vụ, quyền hạn khác trong việc buộc tội theo quy định của Bộ luật tố tụng hình sự.
  - Nhiệm vụ, quyền hạn của Viện kiểm sát nhân dân khi kiểm sát xét xử vụ án hình sự
  + Kiểm sát việc tuân theo pháp luật trong việc xét xử các vụ án hình sự của Tòa án.
  + Kiểm sát bản án, quyết định của Tòa án.
  + Kiểm sát hoạt động tố tụng hình sự của người tham gia tố tụng; yêu cầu, kiến nghị cơ quan, tổ chức có thẩm quyền xử lý nghiêm minh người tham gia tố tụng vi phạm pháp luật.
  + Yêu cầu Tòa án cùng cấp, cấp dưới chuyển hồ sơ vụ án hình sự để xem xét, quyết định việc kháng nghị.
  + Kháng nghị bản án, quyết định của Tòa án có vi phạm nghiêm trọng về thủ tục tố tụng.
  + Thực hiện quyền yêu cầu, kiến nghị và nhiệm vụ, quyền hạn khác trong kiểm sát xét xử vụ án hình sự theo quy định của Bộ luật tố tụng hình sự.` },
            { title: '1.3. Phạm vi', content: `Căn cứ Điều 3 Quy chế công tác THQCT&KSXX thì công tác thực hành quyền công tố và kiểm sát xét xử hình sự bắt đầu từ khi chuyển bản cáo trạng hoặc quyết định truy tố theo thủ tục rút gọn cùng hồ sơ vụ án sang Toà án để xét xử và kết thúc khi bản án và quyết định của Toà án có hiệu lực pháp luật, không bị kháng cáo, kháng nghị.` }
          ] 
        },
        { 
          title: '2. HOẠT ĐỘNG TẠI TÒA', 
          subsections: [
            { title: '2.1. Sơ thẩm', content: `
  a. Nghiên cứu hồ sơ vụ án.
  
  1. Phương pháp nghiên cứu hồ sơ vụ án.
     Kiểm sát viên có thể vận dụng một số phương pháp sau đây:
     - Phương pháp nghiên cứu toàn diện vụ án: Phương pháp này đòi hỏi Kiểm sát viên không được chủ quan chỉ tập trung nghiên cứu những tài liệu mà mình cho đó là có ý nghĩa làm nguồn chứng cứ còn tài liệu khác thì bỏ qua. Các tài liệu (muốn trở thành) chứa đựng chứng cứ (buộc tội hoặc gỡ tội) đều có mối quan hệ hữu cơ với nhau. Không thể xem xét các tài liệu một cách biệt lập, tách rời.
     - Phương pháp hệ thống, lôgic: Kiểm sát viên cần phân loại tài liệu theo tập (nhóm) hợp lý phù hợp với chủ đề nghiên cứu theo một trật tự nhất định. Kiểm sát viên cần hệ thống các tài liệu, chứng cứ chứng minh các sự kiện phạm tội, qua đó bằng hoạt động tư duy có thể dựng lại được toàn bộ vụ án diễn ra trong thực tiễn. Thông thường có thể phân thành các tập: Tập về thủ tục tố tụng; tập về kết quả khám nghiệm; tập về ý kiến của những nhà chuyên môn, kỹ thuật; tập về biên bản ghi lời khai; các tài liệu kết thúc điều tra; các tài liệu về nhân thân bị can; các tài liệu về thu giữ vật chứng, kê biên…
     - Phương pháp so sánh, tổng hợp: Hồ sơ vụ án gồm nhiều tài liệu như các tài liệu về lời khai của bị can, người bị hại, người làm chứng, biên bản khám nghiệm hiện trường, khám nghiệm tử thi v.v. trong đó có tài liệu mâu thuẫn với nhau như các lời khai của người làm chứng mâu thuẫn với các lời khai của bị can hoặc lời khai của bị can mâu thuẫn với các tài liệu khác như biên bản khám nghiệm hiện trường, khám nghiệm tử thi v.v.. Khi nghiên cứu các tài liệu có trong hồ sơ vụ án, Kiểm sát viên cần đối chiếu, so sánh để loại trừ những nội dung không hợp lý, chắt lọc các nội dung hợp lý để phân tích, đánh giá một cách tổng hợp về các tình tiết của vụ án. Phương pháp này đòi hỏi Kiểm sát viên không những nghiên cứu một cách toàn diện, lôgíc mà còn biết so sánh, tổng hợp để xác định các tình tiết có thực của vụ án, loại trừ những tình tiết không có thực của vụ án.
     - Phương pháp ghi chép hồ sơ, tài liệu: Yêu cầu của phương pháp này là đối với những lời khai của bị can, bị hại, người làm chứng… phải lược ghi những nội dung chính. Tài liệu ghi chép, cần phải sắp xếp khoa học theo từng tập, có viện dẫn bút lục trong hồ sơ để dễ tìm khi cần thiết. Tránh tình trạng không ghi chép, chỉ sao chụp (photocoppy) lại các bản lời khai, sẽ dẫn đến thiếu chủ động, lúng túng; nhất là khi gặp trường hợp bị cáo hoặc luật sư đưa ra những lý lẽ trái ngược với lời buộc tội của Kiểm sát viên. Đối với những chứng cứ quan trọng như Biên bản khám nghiệm hiện trường, kết luận giám định v.v… cần phải sao chép, photocopy để sử dụng tại phiên toà, vì những tài liệu này khi viện dẫn cần phải chính xác.
  
  2. Nghiên cứu các thủ tục tố tụng của hồ sơ vụ án.
     - Kiểm tra thủ tục giao nhận hồ sơ vụ án và vật chứng của vụ án:
       + Kiểm sát viên kiểm tra chặt chẽ thủ tục giao nhận hồ sơ và vật chứng vụ án giữa Cơ quan điều tra và Viện kiểm sát bằng cách nghiên cứu biên bản bàn giao hồ sơ và đối chiếu với từng bút lục của hồ sơ vụ án để xem có thiếu bút lục nào không.
       + Căn cứ Mục 20 Thông tư liên tịch số 05/2005 thì hồ sơ vụ án được đánh số theo trật tự nhất định và để tránh xảy ra mất mát, thất lạc thì từng trang tài liệu trong các hồ sơ này phải được đóng dấu bút lục của Cơ quan điều tra và kèm theo bản kê đầy đủ tên tài liệu, số trang từng tài liệu và lưu trong hồ sơ vụ án. Vì vậy, Kiểm sát viên phải kiểm tra từng trang, tập hồ sơ, đối chiếu với bảng kê tài liệu có trong hồ sơ để quyết định nhận hay không nhận hồ sơ. Nếu phát hiện hồ sơ thiếu bút lục thì phải trả hồ sơ để yêu cầu cơ quan điều tra khắc phục. Nếu đủ và đúng thì nhận và vào sổ thụ lý và ghi ngày nhận hồ sơ vào bìa hồ sơ.
     - Nghiên cứu các thủ tục tố tụng của hồ sơ vụ án:
       Thủ tục tố tụng trong giai đoạn này là các quyết định, hành vi tố tụng của cơ quan và người có thẩm quyền tiến hành tố tụng.
       + Quyết định tố tụng trong giai đoạn điều tra là quyết định được ban hành theo quy định của BLTTHS của Cơ quan điều tra do Thủ trưởng, Phó Thủ trưởng Cơ quan điều tra ban hành; của Viện kiểm sát do Viện trưởng, Phó Viện trưởng ban hành như: Bắt bị can để tạm giam; bắt người trong trường hợp khẩn cấp, bắt người phạm tội quả tang hoặc đang truy nã, tạm giữ, tạm giam, gia hạn tạm giữ, tạm giam, cấm đi khỏi nơi cư trú, hủy bỏ hoặc thay thế biện pháp ngăn chặn, khởi tố vụ án hình sự, khởi tố bị can, ủy thác điều tra v.v
       + Hành vi tố tụng trong giai đoạn điều tra là hành vi được thực hiện trong hoạt động tố tụng của Thủ trưởng, Phó thủ trưởng, Điều tra viên Cơ quan điều tra, Viện trưởng, Phó Viện trưởng, Kiểm sát viên Viện kiểm sát như: Hỏi cung bị can, lấy lời khai người làm chứng, đối chất, nhận dạng, khám nghiệm hiện trường, khám nghiệm tử thi, thực nghiệm điều tra v.v.
       Khi nghiên cứu các quyết định, hành vi tố tụng của cơ quan và người có thẩm quyền tiến hành tố tụng, Kiểm sát viên chú ý:
       + Kiểm tra tính hợp pháp các quyết định và hành vi tố tụng bằng cách nghiên cứu, xem xét các quyết định, hành vi tố tụng ấy đó có được ban hành đúng trình tự, thủ tục, thẩm quyền và thời hạn không? Người ra quyết định là ai, thời hạn đã đúng chưa? Người phải thi hành quyết định đã nhận được quyết định đó và được giải thích quyền và nghĩa vụ chưa? Thời hạn thực hiện các quyết định và hành vi tố tụng như thế nào, có quyết định nào hết hạn chưa?
       + Kiểm tra tính có căn cứ của các quyết định và hành vi tố tụng bằng cách nghiên cứu xem các quyết định và hành vi tố tụng đó đã đảm bảo đúng căn cứ ban hành chưa? Việc viện dẫn điều luật để áp dụng khi ra quyết định, hành vi tố tụng đã phù hợp với việc giải quyết vụ án hay chưa? Ví dụ: Khi Cơ quan điều tra ra quyết định đình chỉ vụ án thì Kiểm sát viên cần chú ý nghiên cứu, xem xét căn cứ để ra quyết định đình chỉ vụ án đã đúng chưa? Nếu phát hiện việc vận dụng pháp luật sai thì Kiểm sát viên yêu cầu Cơ quan điều tra khắc phục.
  
  3. Nghiên cứu các tài liệu, chứng cứ của hồ sơ vụ án.
     - Nghiên cứu bản kết luận điều tra:
       Bản kết luận điều tra là văn bản xác nhận kết quả của quá trình hoạt động điều tra, trong đó nêu rõ diễn biến của hành vi phạm tội, các chứng cứ chứng minh tội phạm, nhân thân bị can và quan điểm đề xuất xử lý vụ án của Cơ quan điều tra.
       Khi nghiên cứu Bản kết luận điều tra kiểm sát viên cần chú ý:
       + Nắm chắc nội dung bản kết luận điều tra như: Vụ án diễn biến như thế nào, thời gian, địa điểm xảy ra vụ án, hành vi phạm tội cụ thể của bị can, hậu quả, động cơ, mục đích phạm tội…; họ tên, tuổi, nhân thân, địa chỉ của bị can, quan điểm xử lý vụ án của Cơ quan điều tra như thế nào, việc đình chỉ điều tra có đúng không, thời hạn điều tra có đảm bảo không? Việc tách ra như vậy có đúng các tình tiết của vụ án không như thế nào, việc đình chỉ điều tra như vậy đã đúng chưa?. Việc nắm được nội dung cơ bản vụ án và các tình tiết của hành vi phạm tội thể hiện trong bản kết luận điều tra giúp cho Kiểm sát viên có những cơ sở đánh giá bước đầu về tính có căn cứ, tính hợp pháp khi nghiên cứu các tài liệu tiếp theo.
       + Nghiên cứu kỹ các nội dung về đề nghị truy tố, xem bản kết luận điều tra đã nêu rõ các chứng cứ đề chứng minh tội phạm chưa? Đã nêu rõ lý do và căn cứ đề nghị truy tố chưa? thế nào?. Căn cứ khoản 1 Điều 163 BLTTHS thì bản kết luận có nêu những ý kiến đề xuất giải quyết vụ án của Cơ quan điều tra làm sở cho việc truy tố của Viện kiểm sát. Tuy nhiên có trường hợp, căn cứ bản kết luận điều tra, nhận thức giữa cơ quan điều tra và Viện kiểm sát không thống nhất về tính chất nghiêm trọng của hành vi phạm tội. Bởi lẽ, quy định của pháp luật không bắt buộc cơ quan điều tra phải nêu rõ tội danh và điều, khoản được áp dụng.
     - Nghiên cứu biên bản hỏi cung bị can:
       Biên bản hỏi cung bị can là văn bản không những xác định kết quả cụ thể của hoạt động điều tra mà còn là tài liệu, chứng cứ nhằm làm rõ sự thật về hành vi phạm tội của bị can và đồng phạm.
       Căn cứ Điều 131 Bộ luật TTHS thì việc hỏi cung bị can do Điều tra viên hoặc Kiểm sát viên tiến hành. Khi nghiên cứu lời khai của bị can, Kiểm sát viên cần chú ý các vấn đề sau đây:
       + Nghiên cứu tính hợp pháp của biên bản hỏi cung bị can. Kiểm sát viên căn cứ các điều 131, 132 BLTTHS để kểm tra tính hợp pháp của hoạt động hỏi cung bị can. Để đảm bảo tính hợp pháp của biên bản hỏi cung bị can, Kiểm sát viên cần đối chiếu để xem xét, đánh giá biên bản hỏi cung ấy có phù hợp với các quy định của pháp luật hay không? Kiểm sát viên phải xem ai là người hỏi cung, đơn vị, chức vụ; khi hỏi cung đã giải thích quyền và nghĩa vụ của bị can theo quy định tại Điều 49 Bộ luật TTHS chưa; thời gian bắt đầu và kết thúc việc hỏi cung, nếu hỏi vào ban đêm thì người hỏi cung có ghi rõ lý do không; nếu biên bản có nhiều trang thì mỗi trang đã có chữ ký của bị can chưa, nếu hỏi nhiều lần thì mỗi lần hỏi có ghi rõ lần thứ mấy không; các câu hỏi và trả lời đã được ghi đầy đủ chưa. Nếu cuộc hỏi cung có người bào chữa, phiên dịch hoặc người đại diện hợp pháp tham dự thì người hỏi cung đã giải thích quyền, nghĩa vụ cho họ như thế nào, cuối bản cung người hỏi cung, bị can và những người tham gia hỏi cung đã ký vào biên bản như thế nào. Trong trường hợp người bào chữa hỏi bị can thì Kiểm sát viên cần kiểm tra xem biên bản hỏi cung bị can đã ghi đầy đủ chưa? Trong trường hợp bị can tự viết lời khai thì cán bộ hỏi và bị can ký xác nhận ra sao? Trường hợp có băng ghi âm cuộc hỏi cung thì người hỏi cung có thông báo cho bị can biết không; những chỗ viết thêm, gạch xoá đã được người hỏi cung và bị can ký xác nhận như thế nào. Nếu Kiểm sát viên hỏi cung thì biên bản hỏi cung cũng được kiểm tra kỹ như trên.
       + Nghiên cứu về tính có căn cứ của biên bản hỏi cung bị can. Để làm rõ tính có căn cứ của biên bản hỏi cung bị can, Kiểm sát viên cần nắm được tình hình bị can khai báo như thế nào? (bị can nhận tội, bị can không nhận tội, bị can nhận tội sau đó phản cung...); tổng hợp xem trong hồ sơ vụ án có bao nhiêu bản cung của bị can, trong đó có bao nhiêu bản cung bị can nhận tội, bao nhiêu bản cung không nhận tội, thời gian nhận tội và không nhận tội diễn ra như thế nào. Đây là những tài liệu quan trọng để đối chiếu với các lời khai của các bị can, người làm chứng khác, qua đó có đánh giá, xem xét quá trình điều tra vụ án diễn ra khách quan như thế nào. Ví dụ, trước khi bắt giam thì bị can không nhận tội, sau khi vào trại giam thì nhận tội, đến khi Kiểm sát viên hỏi cung bị can lại không nhận tội và khai rằng trong nhà tạm giam bị can bị bức cung. Từ những thông tin này Kiểm sát viên cần nghiên cứu kỹ các bản cung để xem xét tính chính xác của bản cung và dự kiến sắp tới Kiểm sát viên cần hỏi thêm nội dung gì để kết luận về tính có căn cứ của các biên bản hỏi cung bị can.
       Khi nghiên cứu biên bản hỏi cung bị can kiểm sát viên cần lưu ý một số trường hợp sau:
       + Đối với trường hợp bị can nhận tội thì cần kiểm tra xem việc nhận tội đó có nội dung như thế nào? Các tình tiết đó đã được xác minh ra sao? Kết quả xác minh có phù hợp với các chứng cứ khác không? Nếu các tình tiết của lời khai nhận tội đó đã được xác minh và phù hợp với các chứng cứ khác thì lời khai đó có cơ sở tin cậy. Đây là tài liệu, chứng cứ quan trọng của hồ sơ vụ án, Kiểm sát viên cần nghiên cứu, xem xét một cách toàn diện trong mối quan hệ với các chứng cứ khác.
       + Đối với trường hợp bị can khai nhận tội cho người khác thì Kiểm sát viên phải nghiên cứu kỹ tài liệu trong hồ sơ vụ án, kết hợp với các chứng cứ khác để xem xét vị trí, vai trò của bị can trong vụ án như thế nào. Quá trình nghiên cứu hồ sơ vụ án, Kiểm sát viên phải tự đặt các câu hỏi: Tại sao bị can lại khai nhận trách nhiệm về mình? Lời khai nhận đó đã được xác minh chưa?
       + Đối với trường hợp bị can không nhận tội thì Kiểm sát viên cần đọc kỹ các tình tiết không nhận tội như thế nào, các tình tiết đó đã được xác minh chưa? Kết quả xác minh lời khai không nhận tội đó đã bị các chứng cứ khác bác bỏ như thế nào? Nếu có căn cứ bác bỏ lời khai không chính xác đó thì biên bản hỏi cung bị can cũng cần được xác định.
       Tóm lại: Khi nghiên cứu lời khai của bị can thì dù lời khai đó có nhận tội hay không nhận tội, Kiểm sát viên phải chú ý xem lời khai đó có căn cứ hay không. Chỉ được coi là chứng cứ khi lời khai đó phù hợp với các chứng cứ khác. Đặc biệt đối với các lời khai của những bị can không biết chữ, hoặc lời khai của những người bị hạn chế về thể chất, tinh thần mà nhờ người khác viết thì Kiểm sát viên phải nghiên cứu thật kỹ lưỡng các tài liệu, chứng cứ liên quan đến vụ án để xem việc nhận tội đó có phù hợp với sự thật khách quan của vụ án không.
     - Nghiên cứu lời khai của người bị hại, nguyên đơn dân sự bị đơn dân sự, người có quyển lợi, nghĩa vụ liên quan đến vụ án:
       Căn cứ Điều 137 BLTTHS thì việc lấy lời khai của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan do Điều tra viên hoặc Kiểm sát viên tiến hành và phải được lập biên bản theo đúng quy định của pháp luật.
       Khi nghiên cứu lời khai của những người này Kiểm sát viên cần chú ý các nội dung sau:
       + Nghiên cứu tính hợp pháp của biên bản ghi lời khai: Xem người lấy lời khai đã giải thích quyền và nghĩa vụ của họ chưa, mối quan hệ giữa họ với bị can ra sao, liên quan với các tình tiết của vụ án như thế nào. Trong trường hợp lời khai của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan chưa đến 16 tuổi thì cơ quan điều tra đã mời cha, mẹ, người đại diện hợp pháp hoặc thầy giáo, cô giáo tham gia buổi hỏi cung theo đúng quy định tại khoản 5 Điều 110 BLTTHS chưa? Các lời khai của những người này đã được người lấy lời khai đọc và cùng ký tên trong các biên bản ghi lời khai như thế nào?.
       + Nghiên cứu tính có căn cứ của lời khai: Nghiên cứu, xem xét việc những người này khai về diễn biến của hành vi phạm tội như thế nào, nhất là về hành vi phạm tội của bị can ra sao; đối chiếu với lời khai của bị can và những người làm chứng khác để xem có tình tiết nào phù hợp, tình tiết nào mâu thuẫn, những mâu thuẫn đó đã được xác minh và đối chất chưa. Những tình tiết của vụ án phù hợp hoặc không phù hợp giữa các lời khai thì cần được ghi chép kỹ vào bản nghiên cứu để tổng hợp đánh giá đồng thời kiểm tra kỹ những quan điểm của họ về giải quyết bồi thường thiệt hại ra sao để xem xét việc bồi thường thiệt hại do hành vi phạm tội gây ra cho người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan.
     - Nghiên cứu lời khai của người làm chứng:
       Căn cứ Điều 55 Bộ luật TTHS thì người làm chứng là người biết được những tình tiết liên quan đến vụ án (có thể trực tiếp hay gián tiếp). Căn cứ Điều 135 BLTTHS thì Điều tra viên hoặc Kiểm sát viên tiến hành lấy lời khai của người làm chứng và phải lập biên bản theo quy định của pháp luật.
       Khi nghiên cứu lời khai của người làm chứng Kiểm sát viên cần chú ý đến các nội dung sau đây:
       + Kiểm tra tính hợp pháp của các biên bản ghi lời khai người làm chứng. Kiểm sát viên cần kiểm tra xem thời gian, địa điểm ghi lời khai, mỗi người làm chứng có bao nhiêu lời khai, khi lấy lời khai Điều tra viên đã giải thích quyền và nghĩa vụ của người làm chứng chưa, nhất là trách nhiệm của họ về việc từ chối, trốn tránh khai báo hoặc cố tình khai báo gian dối. Biên bản ghi lời khai đã phản ảnh đầy đủ các thông tin về mối quan hệ giữa người làm chứng với bị can, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan chưa? Nếu người làm chứng chưa đủ 16 tuổi thì kiểm tra xem khi hỏi cung đã có sự mặt tham dự của cha, mẹ, thầy, cô giáo hoặc người đại diện hợp pháp của họ chưa? Những người này đã ký vào biên bản cùng với người làm chứng và người ghi lời khai như thế nào? Nếu có những điểm nào mà người làm chứng hoặc người tham gia yêu cầu sửa chữa thì người ghi lời khai đã ghi bổ sung chưa?
       + Về nội dung chứng cứ lời khai của người làm chứng: Kiểm sát viên cần kiểm tra xem người hỏi đặt câu hỏi như thế nào và người làm chứng đã trình bày ra sao? Nội dung trình bày của người làm chứng là do họ biết được các tình tiết của vụ án hay là họ nghe người khác kể lại. Ngoài ra, Kiểm sát viên phải đối chiếu với các chứng cứ khác xem có phù hợp hoặc mâu thuẫn với chính lời khai của mình và với các tài liệu đã có như: lời khai của bị can, người bị hại, người làm chứng, bị đơn dân sự, nguyên đơn dân sự, người có quyền lợi nghĩa vụ liên quan.v.v. Những nội dung nào phù hợp hoặc mâu thuẫn trong lời khai của người làm chứng so với các tình tiết khác của vụ án thì Kiểm sát viên cần ghi cụ thể, rõ ràng để phân tích đánh giá một cách tổng hợp, khách quan.
     - Nghiên cứu biên bản đối chất:
       Sau khi nghiên cứu biên bản hỏi cung bị can, biên bản ghi lời khai người bị hại, bị đơn dân sự, nguyên đơn dân sự, người có quyền lợi nghĩa vụ liên quan, biên bản ghi lời khai người làm chứng, Kiểm sát viên cần nghiên cứu biên bản đối chất. Tuy nhiên, không phải trong bất kỳ vụ án nào hoạt động đối chất cũng đều được tiến hành, căn cứ Điều 138 BLTTHS thì khi có sự mâu thuẫn trong lời khai giữa hai hay nhiều người thì Điều tra viên hoặc Kiểm sát viên tiến hành đối chất, khi tiến hành đối chất phải được lập biên bản.
       Khi nghiên cứu biên bản đối chất Kiểm sát viên cần chú ý các nội dung sau đây:
       + Kiểm tra tính hợp pháp của việc đối chất: Kiểm sát viên phải kiểm tra những người được đối chất đó là ai (bị can, người bị hại, người làm chứng...), trước khi tiến hành đối chất Điều tra viên đã giải thích cho họ biết về trách nhiệm từ chối, trốn tránh khai báo hoặc cố tình khai báo gian dối chưa? Điều tra viên đã hỏi họ về mối quan hệ giữa những người tham gia đối chất với nhau chưa? Điều tra viên đã đọc lại biên bản đối chất cho những người có mặt nghe chưa? Việc ký vào biên bản như thế nào, có ai sửa chữa, ghi thêm nội dung nào vào biên bản không?
       + Về nội dung tính có căn cứ của biên bản đối chất: Kiểm sát viên cần kiểm tra các câu hỏi và trả lời của biên bản đối chất xem nội dung đã giải quyết các mâu thuẫn chưa? Những người tham gia đối chất đã trả lời về những tình tiết cần làm sáng tỏ như thế nào, họ đã trình bày và giải thích về những mâu thuẫn giữa lời khai của họ với lời khai của những người khác, giữa lời khai hiện nay và trước đây như thế nào? Qua trả lời của những người tham gia đối chất thì đã giải quyết được mâu thuẫn chưa, nội dung nào chưa được giải quyết? Những nội dung nào đã được giải quyết hoặc chưa được giải quyết, Kiểm sát viên cần ghi chép đầy đủ để tiến hành các hoạt động tiếp theo vào bản nghiên cứu của mình để giải quyết tiếp.
     - Nghiên cứu biên bản khám nghiệm hiện trường, khám nghiệm tử thi:
       Khám nghiệm hiện trường, khám nghiệm tử thi là hoạt động điều tra được tiến hành khi vụ án có hiện trường và có tử thi nhằm nghiên cứu, ghi nhận, mô tả hiện trường, phát hiện, thu lượm, đánh giá các dấu vết, tin tức, đồ vật, tài liệu có liên quan tại hiện trường để phục vụ cho công tác điều tra, phát hiện tội phạm.
       Căn cứ Điều 150 và Điều 151 BLTTHS thì mọi trường hợp khám nghiệm hiện trường, khám nghiệm tử thi đều có Kiểm sát viên tham gia. Vì vậy, Kiểm sát viên đã tham gia khám nghiệm hiện trường, khám nghiệm tử thi cần nghiên cứu kỹ một lần nữa các biên bản khám nghiệm hiện trường, khám nghiệm tử thi để tiếp tục xem xét, đánh giá các tình tiết của vụ án một cách khách quan và thận trọng.
       Khi nghiên cứu biên bản khám nghiệm hiện trường, biên bản khám nghiệm tử thi, Kiểm sát viên cần chú ý:
       + Kiểm tra về tính hợp pháp của biên bản khám nghiệm. Kiểm sát viên nghiên cứu biên bản để kiểm tra khi cơ quan điều tra tiến hành việc khám nghiệm đã thành lập hội đồng khám nghiệm chưa? Ngoài 3 thành phần bắt buộc là Điều tra viên, Kiểm sát viên và người chứng kiến thì còn ai trong số những người sau đây tham gia nữa như các nhà chuyên môn về khoa học kỹ thuật, bác sỹ pháp y, chuyên gia về súng đạn, chất nổ, chất cháy, có thể cho bị can, người bị hại, gia đình nạn nhân, người làm chứng được tham dự. Kết thúc việc khám nghiệm Hội đồng đã thông qua biên bản như thế nào? Những người tham gia ký vào biên bản ra sao? Nếu qua nghiên cứu phát hiện biên bản khám nghiệm có vi phạm pháp luật thì Kiểm sát viên phải yêu cầu khắc phục ngay.
       + Kiểm tra về tính có căn cứ của biên bản khám nghiệm. Hoạt động khám nghiệm hiện trường, khám nghiệm tử thi có bốn công việc quan trọng là: Chụp ảnh, vẽ sơ đồ hiện trường, mô tả hiện trường vào biên bản và cuối cùng là thu lượm, bảo quản vật chứng, tài liệu thu được tại hiện trường. Kiểm sát viên phải nghiên cứu thật kỹ về tính có căn cứ của các tài liệu này.
       Về bản ảnh, Kiểm sát viên phải kiểm tra kỹ xem có bao nhiêu ảnh, gồm những thể loại nào? có đủ ảnh chụp toàn cảnh, ảnh trung tâm, ảnh từng phần và ảnh chi tiết không? Kỹ thuật và phương pháp chụp đã đúng chưa? So sánh ảnh chụp hiện trường với sơ đồ hiện trường có gì phù hợp hoặc mâu thuẫn.
       Về sơ đồ hiện trường, Kiểm sát viên cần kiểm tra bản vẽ sơ đồ hiện trường để xem đã có đủ sơ đồ chung, sơ đồ từng phần và sơ đồ chi tiết chưa? Kiểm sát viên cần chú ý nghiên cứu kỹ sơ đồ hiện trường có phù hợp với bản ảnh và biên bản mô tả hiện trường không? Các số đo, mô hình hiện trường đã được thể hiện đầy đủ trên sơ đồ chưa?.
       Về việc thu lượm, bảo quản dấu vết, tài liệu, đồ vật. Đây là những dấu vết vật chất cần thiết cho việc nghiên cứu sử dụng trong quá trình điều tra, phát hiện tội phạm. Do vậy khi nghiên cứu, Kiểm sát viên phải kiểm tra việc khám nghiệm hiện trường đã được thu lượm đầy đủ các dấu vết, tài liệu, đồ vật như thế nào, đặc điểm các dấu vết đó ra sao, kích thước, màu sắc, số lượng, trọng lượng.
       Biên bản mô tả hiện trường. Sau khi nghiên cứu bản ảnh, sơ đồ hiện trường, các dấu vết, tài liệu đã thu lượm, Kiểm sát viên cần chú ý kiểm tra biên bản khám nghiệm hiện trường, khám nghiệm tử thi được ghi chép, mô tả hiện trường như thế nào, đã ghi đầy đủ kết quả đo đạc, dựng mô hình, vẽ sơ đồ, đủ các dấu vết, đồ đạc, tài liệu của hiện trường, tử thi chưa? Những dấu vết, tài liệu thu lượm được tại hiện trường, tử thi có được mô tả đầy đủ trong biên bản không và có phù hợp với đặc điểm riêng của dấu vết, tài liệu đã được thu lượm không? Các dấu vết đó được thu giữ, niêm phong, đóng gói, ký xác nhận và bảo quản như thế nào. Những ý kiến của người tham dự, chứng kiến được ghi trong biên bản ra sao? Sau khi nghiên cứu biên bản khám nghiệm hiện trường, khám nghiệm tử thi, Kiểm sát viên đối chiếu với các tài liệu điều tra khác để xem giá trị chứng minh của các tài liệu, vật chứng đã thu lượm được như thế nào. Đồng thời, qua nghiên cứu cần kiểm tra, so sánh các dấu vết, vật chứng với các chứng cứ khác để xem giữa chúng có sự phù hợp hay mâu thuẫn. Những thông tin từ hiện trường đã được Điều tra viên sử dụng trong việc điều tra phát hiện tội phạm như thế nào?
     - Nghiên cứu biên bản nhận dạng:
       Nhận dạng là hoạt động điều tra nhằm mục đích khắc phục sự nhầm lẫn, sai lầm trong nhận thức của người làm chứng, người bị hại, bị can bằng cách cho những người này xác nhận lại đối tượng mà mình đã khai trước đây.
       Khi nghiên cứu biên bản nhận dạng Kiểm sát viên cần lưu ý các nội dung sau đây:
       + Kiểm tra tính hợp pháp của biên bản nhận dạng. Căn cứ Điều 139 Bộ luật TTHS, Kiểm sát viên cần kiểm tra xem Điều tra viên đã giải thích cho những người nhận dạng biết trách nhiệm về việc từ chối, trốn tránh nhận dạng hoặc cố tình nhận dạng gian dối chưa? Đối với người nhận dạng dưới 16 tuổi thì Điều tra viên có mời cha, mẹ, người đại diện hợp pháp tham dự không? Người chứng kiến việc nhận dạng đã có mặt đầy đủ chưa? Đối tượng nhận dạng là người, ảnh, vật có đủ tối thiểu số lượng là ba hay không? Nếu là vật thì có bề ngoài giống nhau về kích thước, màu sắc, chủng loại, hình dáng, nhãn hiệu không; nếu là người thì có gần nhau về tuổi, tầm thước, hình dáng, khuôn mặt, tóc, mắt, kiểu ăn mặc quần áo không? Biên bản nhận dạng đã lập theo quy định của pháp luật chưa, những người tham gia nhận dạng đã ký vào biên bản và có ghi thêm về nội dung nào nữa không? Đây là các thủ tục bắt buộc, nếu có vi phạm thì Kiểm sát viên kiến nghị ghi chép đầy đủ để yêu cầu cơ quan điều tra khắc phục.
       + Kiểm tra tính có căn cứ của biên bản nhận dạng. Kiểm sát viên phải kiểm tra xem Điều tra viên đã đưa ra các câu hỏi về những tình tiết, đặc điểm, vết tích với người nhận dạng và nhờ đó họ có thể nhận dạng được như thế nào, nếu câu hỏi có tính chất gợi ý là vi phạm cần được ghi chép đầy đủ để yêu cầu khắc phục. Khi người nhận dạng đã nhận dạng được một vật, người, ảnh thì họ đã giải thích như thế nào về căn cứ, đặc điểm gì mà họ nhận dạng được Những nội dung này đã được ghi đầy đủ trong biên bản nhận dạng chưa?
     - Nghiên cứu biên bản khám xét, thu giữ, tạm giữ đồ vật thư tín, điện tín, bưu kiện, bưu phẩm:
       Khi nghiên cứu biên bản này, Kiểm sát viên cần chú ý các nội dung sau đây:
       + Kiểm tra tính hợp pháp của biên bản. Kiểm sát viên chú ý kiểm tra biên bản đó đã được lập theo đúng quy định của pháp luật chưa? Ai ra lệnh, ai là người thi hành? Điều tra viên đã giải thích quyền, nghĩa vụ cho những người có mặt biết chưa? Khi khám xét chỗ ở, địa điểm, chỗ làm việc thì ngoài các thành viên trong gia đình còn có đại diện chính quyền địa phương không? Nếu thu giữ thư tín, điện tín, bưu kiện, bưu phẩm thì có người phụ trách cơ quan bưu điện chứng kiến không? Nếu thu giữ đồ vật thì đã niêm phong chưa, có chữ ký của người chủ đồ vật không? Ai là người được giao bảo quản? v.v.
       + Kiểm tra nội dung biên bản: Kiểm sát viên cần kiểm tra xem nội dung biên bản đã phản ánh đầy đủ diễn biến của việc khám xét chưa? Các loại vật chứng, tài liệu, đồ vật, liên quan đến vụ án đã được thu giữ như thế nào, số lượng, chủng loại ra sao, cách ghi chép, thống kê các đồ vật bị thu giữ như thế nào? Thái độ của người bị khám xét ra sao? Kiểm sát viên phải nghiên cứu, nắm chắc các vật chứng, đồ vật, tài liệu thể hiện trong biên bản như thế nào, trên cơ sở đó kiểm tra xem Cơ quan điều tra đã xác minh làm rõ chưa? Các đồ vật, thư tín, tài liệu, điện tín, bưu kiện, bưu phẩm đã được xác minh như thế nào và so sánh với các chứng cứ khác xem nó phù hợp hay mâu thuẫn để xác định giá trị chứng minh của nguồn chứng cứ này? Đối chiếu với các lời khai của bị can và những người khác có liên quan như người bị hại, nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan khai về các đồ vật đã thu giữ như thế nào? Những nội dung nào chưa được xác minh thì ghi chép để yêu cầu làm rõ. Tiến hành kiểm tra các đồ vật đã được thu giữ có bị mất, hư hỏng gì không?
     - Nghiên cứu biên bản thực nghiệm điều tra:
       Căn cứ Điều 153 Bộ luật TTHS thì để kiểm tra, xác minh những tài liệu, tình tiết có ý nghĩa đối với vụ án, Cơ quan điều tra hoặc Viện kiểm sát sẽ tiến hành thực nghiệm điều tra và phải lập biên bản theo đúng quy định của pháp luật.
       Khi nghiên cứu biên bản thực nghiệm điều tra, Kiểm sát viên cần chú ý các nội dung sau đây:
       + Kiểm tra tính hợp pháp của biên bản thực nghiệm điều tra. Thực nghiệm điều tra do Cơ quan điều tra, Viện kiểm sát tiến hành, tuy nhiên trong trường hợp cần thiết người bị tạm giữ, bị can, người bị hại, người làm chứng cũng có thể tham dự. Do vậy, Kiểm sát viên cần kiểm tra buổi thực nghiệm hôm đó gồm có những người nào tham dự, những người đó đã ký vào biên bản chưa? Kiểm tra việc mô tả hiện trường thực nghiệm như thế nào, có đúng(hoặc gần đúng) với hiện trường thực không? Điều luật không quy định hiện trường thực nghiệm như thế nào nhưng thực tiễn cho thấy hiện trường thực nghiệm phải là hiện trường gần giống như hiện trường thật. Ví dụ, hiện trường vụ án xảy ra ban đêm thì hiện trường thực nghiệm cũng phải vào ban đêm.
       + Kiểm tra tính có căn cứ của biên bản thực nghiệm điều tra. Kiểm sát viên cần kiểm tra xem những người thực nghiệm đã diễn lại các hành vi, tình huống hoặc các hoạt động khác như thế nào. Hành vi diễn lại đó có phù hợp với lời khai của họ và phù hợp với hiện trường không? Cơ quan điều tra đã đo đạc, chụp ảnh, vẽ sơ đồ hiện trường thực nghiệm như thế nào? Trong trường hợp bị can diễn lại hành vi giết người, người bị hại có thể mô tả trên hiện trường nơi mình có mặt về những gì mà mình đã biết thì có phù hợp với nhau hay không?.
     - Nghiên cứu kết luận giám định:
       Căn cứ Điều 155 Bộ luật TTHS thì khi thấy cần thiết để kết luận những vấn đề liên quan đến vụ án thì cơ quan tiến hành tố tụng trưng cầu giám định. Cơ quan giám định sẽ kết luận theo nội dung trưng cầu của cơ quan yêu cầu.
       Khi nghiên cứu kết luận giám định, Kiểm sát viên cần lưu ý các nội dung sau đây:
       + Kiểm tra tính hợp pháp của kết luận giám định. Kiểm sát viên cần kiểm tra xem thành phần hội đồng giám định gồm những ai, có đủ trình độ để giám định không? Kiểm tra trình độ văn hoá, trình độ chuyên môn của người giám định. Đặc biệt, Kiểm sát viên cần kiểm tra xem những người giám định có phải từ chối tham gia tố tụng hoặc bị thay đổi trong những trường hợp theo quy định của pháp luật hay không;
       + Kiểm tra tính có căn cứ của nội dung kết luận. Kiểm sát viên cần kiểm tra xem cơ quan yêu cầu giám định những nội dung gì, các đồ vật, tài liệu cần giám định như thế nào, các mẫu vật tài liệu để so sánh ra sao? Cơ quan giám định đã áp dụng các phương pháp, phương tiện giám định như thế nào, có kết luận từng vấn đề ra sao, việc trả lời đã rõ ràng, chính xác từng câu hỏi của cơ quan trưng cầu giám định chưa? Có nội dung trả lời nào mà Kiểm sát viên còn băn khoăn, chưa hiểu? Nếu cơ quan trưng cầu hỏi thêm thì cơ quan giám định đã trả lời như thế nào. Nếu kết luận giám định chưa đáp ứng được yêu cầu thì có thể trưng cầu giám định lại. Căn cứ khoản 3 Điều 155 Bộ luật TTHS thì có 5 trường hợp bắt buộc phải giám định: Nguyên nhân chết, tính chất thương tật, tổn hại sức khoẻ; tình trạng tâm thần của bị can; tình trạng tâm thần của người làm chứng, người bị hại; tuổi của bị can, bị cáo, người bị hại nếu việc đó có ý nghĩa đối với vụ án; chất độc, ma tuý phóng xạ, tiền giả. Vì vậy, Kiểm sát viên cần kiểm tra kỹ, nếu những trường hợp trên đây chưa được giám định, hoặc kết luận giám định chưa rõ ràng thì phải yêu cầu giám định lại hoặc giám định bổ sung lại.
     - Nghiên cứu các quyết định xử lý vụ án của Cơ quan điều tra:
       Căn cứ quy định từ Điều 160 đến Điều 165 Bộ luật TTHS thì sau khi kết.thúc điều tra, Cơ quan điều tra sẽ có các quyết định tạm đình chỉ điều tra; truy nã bị can; kết thúc điều tra, đề nghị truy tố; đình chỉ điều tra và phục hồi điều tra… Đây là các quyết định tố tụng do Cơ quan điều tra ban hành có liên quan đến việc xử lý vụ án.
       Khi nghiên cứu các quyết định xử lý vụ án của Cơ quan điều tra, Kiểm sát viên cần chú ý các nội dung sau:
       + Kiểm tra tính hợp pháp của các quyết đinh. Pháp luật tố tụng hình sự quy định rất chặt chẽ các điều kiện thời gian, thẩm quyền ra các quyết định xử lý vụ án của Cơ quan điều tra. Kiểm sát viên cần nghiên cứu kỹ các quyết định ấy, đối chiếu với các quy định cụ thể của điều luật để xem các quyết định ấy đã đúng các thủ tục pháp lý chưa.
       + Kiểm tra về nội dung của các quyết định. Trên cơ sở nghiên cứu toàn bộ hồ sơ vụ án, Kiểm sát viên cần kiểm tra xem các quyết định đó có căn cứ hay không? Nội dung nêu trong các quyết định có phù hợp với các tình tiết của vụ án hay không? Ví dụ, cơ quan điều tra căn cứ vào điểm a khoản 2 Điều 164 Bộ luật TTHS để quyết định đình chỉ bị can có hành vi phạm tội theo khoản 1 Điều 104 BLHS vì người bị hại rút yêu cầu khởi tố. Tuy nhiên, hồ sơ vụ án có tài liệu khẳng định việc người bị hại rút yêu cầu đó là do sự khống chế, đe doạ của bị can thì quyết định đình chỉ đó là không có căn cứ.
     - Nghiên cứu giải quyết các khiếu nại, tố cáo, các dư luận xã hội về vụ án:
       Thứ nhất, nghiên cứu, giải quyết các khiếu nại tố cáo: Bộ luật TTHS 2003 có một chương mới (Chương XXXV) quy định về khiếu nại, tố cáo trong tố tụng hình sự. Liên ngành tư pháp Trung ương đã có Thông tư liên tịch Số 02/2005/TTLT-VKSTC-BCA-BQP-BTP hướng dẫn thi hành một số điểm của Chương XXXV BLTTHS. Do vậy, Kiểm sát viên cần nắm vững các quy định của hướng dẫn này để kiểm tra các khiếu nại, tố cáo đã được các cơ quan và người có thẩm quyền thụ lý và giải quyết như thế nào, có đúng thẩm quyền và thời gian theo quy định của pháp luật hay không. Việc khiếu nại, tố cáo nếu đã được giải quyết mà còn tiếp tục khiếu nại, tố cáo tiếp thì trách nhiệm thuộc cơ quan và người có thẩm quyền nào để báo cáo, đề xuất Viện trưởng cho ý kiến.
       + Kiểm sát viên phải đối chiếu với hồ sơ vụ án để xem các khiếu nại, tố cáo đó đã được các cơ quan điều tra giải quyết chưa và giải quyết như thế nào, những nội dung nào cần được xác minh làm rõ, nội dung nào cần yêu cầu cơ quan điều tra giải quyết. Trên cơ sở đó đề xuất phương án giải quyết theo đúng các quy định của pháp luật.
       + Thực tiễn cho thấy, khi Kiểm sát viên bắt đầu tống đạt cáo trạng thì thường phát sinh khiếu nại, tố cáo. Vì thời gian giải quyết khiếu nại, tố cáo trong giai đoạn này rất nhanh, không được kéo dài, do vậy Kiểm sát viên phải nghiên cứu kỹ các khiếu nại, tố cáo để giải quyết.
       Thứ hai, nghiên cứu các dư luận báo chí về vụ án: Thực tiễn điều tra, truy tố xét xử cho thấy, quá trình giải quyết vụ án là quá trình các báo chí đưa tin về vụ án, trong đó có những bài có tính chất thông tin, nhưng cũng có những bài bình luận về vụ án. Trong các bài bình luận có thể có những bài ủng hộ cơ quan pháp luật, nhưng cũng có bài phê phán cơ quan pháp luật, thậm chí có bài nêu có tính chất cường điệu vụ án. Đây là biểu hiện tính dân chủ, công khai trong đời sống chính trị, xã hội của Việt Nam. Đối với trường hợp này, Kiểm sát viên phải hết sức bình tĩnh, cầu thị để nghiên cứu các thông tin này và có biện pháp xử lý. Đây là các nguồn tin rất quan trọng giúp cho Kiểm sát viên có những tư liệu để xem xét đánh giá các tình tiết của vụ án một cách khách quan toàn diện. Khi nghiên cứu các tin tức trên các phương tiện thông tin đại chúng, Kiểm sát viên phải tổng hợp, đối chiếu, so sánh với các tình tiết của vụ án để xem các thông tin đó phản ánh như thế nào, có điểm nào đúng, điểm nào phản ảnh sai, điểm nào mới. Kiểm sát viên coi đây là nội dung quan trọng cần lưu ý khi nghiên cứu hồ sơ vụ án. Cần lưu ý rằng, các thông tin đó không phải chỉ là của phóng viên mà có thể đây là ý kiến của bị cáo, người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan.
     - Nghiên cứu các quy định của pháp luật:
       Sau khi nghiên kỹ hồ sơ vụ án và bản kết luận điều tra của Cơ quan điều tra, Kiểm sát viên cần nghiên cứu các điều luật mà kết luận điều tra viện dẫn để đề nghị truy tố bị can và các hướng dẫn áp dụng pháp luật về điều luật ấy. Khi nghiên cứu các quy định của pháp luật kiểm sát viên cần chú ý các nội dung sau đây:
       Thứ nhất, nghiên cứu cấu thành cơ bản của điều luật. Nghiên cứu cấu thành cơ bản của điều luật để nắm chắc các dấu hiệu đặc trưng của tội phạm đó, góp phần khắc phục sự nhầm lẫn giữa tội phạm này với tội phạm khác.
       Thứ hai, nghiên cứu các cấu thành cụ thể. Nghiên cứu các cấu thành cụ thể này giúp Kiểm sát viên vận dụng để áp dụng pháp luật sát đúng với tính chất, mức độ, hậu quả của hành vi phạm tội của bị can. Ngoài ra, Kiểm sát viên còn phải căn cứ các tình tiết của vụ án, nhân thân bị can, các tình tiết tăng nặng, giảm nhẹ...để áp dụng pháp luật cho chính xác.
       Thứ ba, nghiên cứu các hướng dẫn áp dụng pháp luật: Nghiên cứu các văn bản hướng dẫn thi hành Bộ luật hình sự, Bộ luật TTHS; các văn bản hướng dẫn các bộ luật khác có liên quan đến vụ án đang giải quyết. Khi xử lý vụ án mà có các tình tiết liên quan đến các văn bản hướng dẫn, thì Kiểm sát viên chú ý nghiên cứu để có quan điểm toàn diện về giải quyết vụ án. Đây không những là căn cứ để xây dựng bản cáo trạng truy tố vụ án ra Toà xét xử, bảo đảm đúng người, đúng tội, đúng pháp luật mà còn đây chính là các tài liệu quan trọng để Kiểm sát viên chuẩn bị thực hành quyền công tố tại phiên toà.
       Thứ tư, nghiên cứu các quy định của cơ quan quản lý hành chính. Tuy đây là các văn bản quy phạm của cơ quan quản lý hành chính, nhưng có ý nghĩa quan trọng khi Viện kiểm sát vận dụng truy tố bị can về hành vi phạm tội liên quan đến các quy định đó. Ví dụ, khi truy tố bị can ở kho bạc về tội thiếu trách nhiệm gây hậu quả nghiêm trong theo Điều 285 Bộ luật hình sự, thì Kiểm sát viên cần tìm hiểu Chính phủ đã có những quy định nào về trách nhiệm của cán bộ Kho bạc chưa? Bộ Tài chính đã có các văn bản hướng dẫn như thế nào.
  
  b. Kiểm tra, xác minh các tài liệu, chứng cứ của vụ án.
     Sau khi nghiên cứu toàn bộ hồ sơ vụ án, Kiểm sát viên cần dành giành thời gian để kiểm tra trực tiếp các tài liệu, chứng cứ trong các trường hợp cần thiết, nhằm một mặt củng cố thêm lòng tin nội tâm của mình về các tình tiết của vụ án, đồng thời, tiếp tục làm sáng rõ hơn các mâu thuẫn mà qua nghiên cứu hồ sơ Kiểm sát viên đã phát hiện được.
     Việc kiểm tra, xác minh các tài liệu cần tập trung các nội dung chính sau đây:
     - Kiểm tra, xem xét các vật chứng, tài liệu đã được thu giữ:
       Căn cứ Điều 140 Bộ luật TTHS, khi phát hiện các công cụ, phương tiện phạm tội, đồ vật, tài liệu khác liên đến vụ án thì cơ quan điều tra có quyền thu giữ. Những tài liệu đồ vật của vụ án có hai loại: loại gọn nhẹ như dao, kéo, gậy, các chứng từ, hoá đơn thanh toán, các giấy tờ bị làm giả như hộ chiếu, tiền giả... thì thông thường được chuyển theo hồ sơ vụ án, còn các đồ vật khác cồng kềnh thì để tại kho tang vật.
       + Đối với các đồ vật, tài liệu chuyển theo hồ sơ vụ án, thì Kiểm sát viên phải dành thời gian để nghiên cứu, xem xét các vật chứng này, đối chiếu với biên bản thu giữ có phù hợp không. Kiểm tra xem Điều tra viên đã hỏi kỹ về các tài liệu, đồ vật này như thế nào, các tài liệu giám định đã kết luận về các tài liệu đồ vật ra sao? Với cách quan sát trực tiếp như vậy và ý kiến các nhà chuyên môn thì các tài liệu, đồ vật đó (dao, kéo, giấy tờ giả, gậy gộc, cuốc...) có giá trị chứng minh như thế nào).
       + Đối với các vật chứng không chuyển theo hồ sơ mà để tại kho tang vật, thì Kiểm sát viên cũng cần trực tiếp nghiên cứu như xe ô tô, xe máy. . . để xem đặc điểm, dấu vết của vật chứng có phù hợp với biên bản thu giữ vật chứng hay không.
     - Gặp bị can:
       + Căn cứ khoản 3 Điều 131 và khoản 1 Điều 166 Bộ luật TTHS, trong quá trình thực hành quyền công tố, kiểm sát điều tra, nếu thấy cần thiết Kiểm sát viên có thể hỏi cung bị can. Theo quy định tại khoản 3 Điều 24 Quy chế THQCT&KSĐT, thì sau khi kết thúc điều tra, Kiểm sát viên phải hỏi cung bị can. Kiểm sát viên tiến hành hỏi cung bị can phải thực hiện đúng theo quy định của pháp luật. Nếu xét thấy cần thiết thì Kiểm sát viên mời Điều tra viên, trong các vụ án bắt buộc phải có luật sư tham gia, thì nên mời họ tham dự. Hỏi cung xong, Kiểm sát viên phải lập biên bản và có chữ ký của Kiểm sát viên và bị can.
       + Mục đích, yêu cầu hỏi cung bị can của Kiểm sát viên nhằm kiểm tra lại các chứng cứ, các tình tiết của vụ án. Kiểm sát viên cũng cần hỏi kỹ về các tình tiết tăng nặng, giảm nhẹ, động cơ, mục đích phạm tội, vị trí, vai trò của bị can trong vụ án, những vấn đề bồi thường thiệt hại cho nạn nhân.
       + Trong trường hợp bị cáo khai do bị bức cung nên mới khai như trước đây với Cơ quan điều tra, bây giờ xin khai lại là bị can không phạm tội. Kiểm sát viên cần phải trực tiếp gặp bị can để làm rõ. Trong trường hợp này, Kiểm sát viên cần mời Điều tra viên tham dự với tư cách là người làm chứng.
       + Bị can là vị thành niên, là người bị hạn chế về thể chất và tinh thần, bị can có thể bị áp dụng khung hình phạt tù chung thân hoặc tử hình, bị can kêu oan... thì bắt buộc Kiểm sát viên phải phúc cung. Ngoài ra, qua nghiên cứu hồ sơ vụ án nếu thấy cần tiếp tục làm rõ một số tình tiết của vụ án, thì Kiểm sát viên phải tiến hành hỏi cung bị can. Việc gặp bị can trong các trường hợp này, Kiểm sát viên nên mời Điều tra viên làm chứng và có thể nên mời luật sư tham gia
     - Gặp người làm chứng:
       + Căn cứ khoản 4 Điều 133 và khoản 6 Điều При 135 BLTTHS thì Kiểm sát viên có quyền gặp người làm chứng để kiểm tra các lời khai của họ, đặc biệt là đối với những người làm chứng có lời khai mâu thuẫn với nhau, mâu thuẫn với những người làm chứng khác hoặc mâu thuẫn với các chứng cứ khác.
       + Khi gặp người làm chứng, Kiểm sát viên phải lập biên bản theo đúng quy định của pháp luật tố tụng hình sự.
       + Đối với những người làm chứng có lời khai mâu thuẫn với nhau, mâu thuẫn với lời khai bị cáo, mâu thuẫn với chính mình thì Kiểm sát viên cần giải thích về quyền, nghĩa vụ của người làm chứng và dùng các chứng cứ khác để đấu tranh, bác bỏ những lời khai không khách quan của người làm chứng. Kiểm sát viên cần ghi chép đầy đủ những lời khai mâu thuẫn này và nội dung đã làm việc để dự kiến các tình huống tại phiên toà, làm cơ sở cho việc xét hỏi và tranh luận tại phiên toà.
     - Tiến hành đối chất:
       Việc tiến hành đối chất được quy định tại Điều 138 Bộ luật TTHS. Căn cứ khoản 5 Điều 138 Bộ luật TTHS, nếu qua nghiên cứu hồ sơ thấy giữa các lời khai của bị can, người bị hại, người làm chứng, bị đơn, nguyên đơn dân sự và những người có quyền lợi, nghĩa vụ liên quan có mâu thuẫn với nhau thì Kiểm sát viên cần tiến hành đối chất. Khi tiến hành đối chất, Kiểm sát viên cần mời Điều tra viên tham dự dự làm người chứng kiến. Các tài liệu đối chất cần được sử dụng tại phiên Toà như tài liệu chứng minh của vụ án.
     - Thực nghiệm điều tra:
       + Thực nghiệm điều tra là nhằm kiểm tra lời khai của bị can, người bị hại, người làm chứng về sự việc phạm tội, hậu quả do tội phạm gây ra có đúng với thực tế khách quan hay không. Do vậy, thực nghiệm điều tra là hoạt động kiểm tra, đánh giá tính xác thực của các lời khai về hành vi phạm tội, qua đó có thể chấp nhận hay bác bỏ các lời khai của bị can, người bị hại, người làm chứng. . .
       + Căn cứ khoản 3 Điều 153 Bộ luật TTHS thì trong trường hợp cần thiết, Viện kiểm sát có thể tiến hành thực nghiệm điều tra. Việc thực nghiệm điều tra được tiến hành theo quy định tại Điều 153 Bộ luật TTHS. Đây là hoạt động tương đối phức tạp, Kiểm sát viên phải nghiên cứu kỹ, xây dựng kế hoạch cụ thể và phối hợp với Cơ quan điều tra để thực hiện.
       + Yêu cầu của việc thực nghiệm điều tra là các dữ kiện về thời gian, địa điểm, phương tiện phải phù hợp hiện trường. Có như vậy mới bảo đảm tính phù hợp với thực tế khách quan của vụ án.
  
  c. Những vấn đề cần rút ra sau khi nghiên cứu hồ sơ và xem xét các vật chứng tài liệu:
     Để có quan điểm đánh giá chính xác về vụ án và trên cơ sở đó có biện pháp xử lý vụ án đúng với các quy định của pháp luật, Kiểm sát viên cần tổng hợp, phân tích, đánh giá về vụ án. Khi tổng hợp đánh giá cần chú ý các nội dung sau:
     - Về đánh giá nội dung vụ án. Phần này cần đánh giá khái quát về thời gian, địa điểm xảy ra tội phạm, diễn biến hành vi phạm tội của các bị can, mục đích, động cơ phạm tội, hậu quả của của hành vi phạm tội. Tuy nhiên, Kiểm sát viên cần lưu ý, qua nghiên cứu hồ sơ vụ án, xem xét các tài liệu chứng cứ, gặp bị can, nghiên cứu các đơn thư khiếu nại, tố cáo, các tin tức của báo chí đăng tải, nếu thấy cần thêm, bớt các chi tiết so với bản kết luận điều tra thì Kiểm sát viên có thể thực hiện. Trên cơ sở hồ sơ vụ án, bản kết luận điều tra và các tài liệu khác, Kiểm sát viên cần tổng hợp, đánh giá, phân tích toàn bộ vụ án, đây là hoạt động độc lập của Kiểm sát viên.
     - Hệ thống các chứng cứ buộc tội. Các chứng cứ buộc tội gồm có lời khai nhận tội của bị can, lời khai người làm chứng về các tình tiết liên quan đến hành vi của bị can, nhân thân bị can, biên bản phạm pháp quả tang, vật chứng, giám định chuyên môn, giám định pháp y, kết quả xác minh của Cơ quan điều tra và của Kiểm sát viên. . . Đây là các căn cứ hết sức quan trọng khẳng định tính có căn cứ của hành vi phạm tội của bị can, đồng thời, đây là cơ sở pháp lý để Kiểm sát viên tiến hành tranh luận, đối đáp với bị cáo, người bào chữa và những người tham gia tố tụng khác tại phiên tòa.
     - Hệ thống các chứng cứ gỡ tội. Đó là các chứng cứ chứng minh sự ngoại phạm của bị can. Những tài liệu đó bao gồm lời khai bị can, người làm chứng và các tài liệu khác khẳng định bị can không phạm tội hoặc phạm tội nhẹ hơn. Ngoài ra, chứng cứ gỡ tội còn thể hiện các tài liệu đã thu thập có nhiều mâu thuẫn, nhưng không được giải quyết, như các lời khai của bị can, người làm chứng mâu thuẫn với nhau, hoặc lời khai đó không phù hợp với hiện trường. Kiểm sát viên phải hệ thống đầy đủ và nắm chắc các mâu thuẫn này vì đó là các nội dung mà bị cáo, người bào chữa. . . sẽ sử dụng triệt để tại phiên Toà. Đối với các chứng cứ gỡ tội, Kiểm sát viên cần chú ý đối chiếu với các quy định của pháp luật để xem xét tính có căn cứ và tính hợp pháp của việc gỡ tội cho bị can. Các tình tiết tăng nặng, giảm nhẹ cũng được tổng hợp.
     - Cuối cùng, Kiểm sát viên tổng hợp vụ án theo các nội dung cơ bản như: vụ án có bao nhiêu bị can hành vi của các bị can phạm tội gì, cần áp dụng điểm, khoản, điều nào của BLHS, các tình tiết tăng nặng, giảm nhẹ trách nhiệm hình sự, các chứng cứ buộc tội, các chứng cứ gỡ tội. Trên cơ sở đó, Kiểm sát viên đề xuất xử lý vụ án theo theo quy định tại khoản 1 Điều 166 Bộ luật TTHS.
  
  d. Hoạt động của Kiểm sát viên trong trường hợp Tòa án trả hồ sơ điều tra bổ sung.
     VBQPPL
     - BLTTHS năm 2003 (K1 Điều 179, Điều 196)
     - Nghị quyết số 04/2004/NQ-HĐTP ngày 05/11/2004 của Hội đồng thẩm phán TAND tối cao hướng dẫn thi hành một số quy định trong phần thứ ba "xét xử sơ thẩm" của BLTTHS 2003;
     - Thông tư liên tịch số 01/2010/TTLT – VKSNDTC – BCA-TANDTC hướng dẫn thi hành các quy định của Bộ luật tố tụng hình sự về trả hồ sơ để điều tra bổ sung;
     Căn cứ Điều 179 BLTTHS thì Thẩm phán ra quyết định trả hồ sơ cho Viện kiểm sát để điều tra bổ sung trong những trường hợp sau đây: Khi cần xem xét thêm những chứng cứ quan trọng đối với vụ án mà không thể bổ sung tại phiên tòa được; khi có căn cứ để cho rằng bị cáo phạm một tội khác hoặc có đồng phạm khác; khi phát hiện có vi phạm nghiêm trọng thủ tục tố tụng. Ngoài ra, Thông tư liên tịch số 01/2010 có quy định cụ thể hóa những căn cứ để trả hồ sơ yêu cầu điều tra bổ sung trong từng trường hợp. Những vấn đề cần điều tra bổ sung phải được nêu rõ trong quyết định yêu cầu điều tra bổ sung.
     Hoạt động của Kiểm sát viên viên trong trường hợp Tòa án trả hồ sơ điều tra bổ sung:
     - Nghiên cứu nội dung quyết định trả lại hồ sơ để điều tra bổ sung của Toà án, xác định lý do, căn cứ Toà án trả lại hồ sơ để điều tra bổ sung. Xem xét lại các tài liệu có trong hồ sơ để xác định những yêu cầu của Toà án đã được phản ánh trong hồ sơ như thế nào? Các yêu cầu đó đã đúng với tài liệu có trong hồ sơ vụ án và quy định của BLHS, BLTTHS hay không?
     - Kiểm tra tính hợp pháp của quyết định trả hồ sơ điều tra bổ sung. Căn cứ Điều 179 BLTTHS và Nghị quyết số 04/2004/NQ-HĐTP ngày 05/11/2004 thì Thẩm quyền ban hành quyết định trả hồ sơ phải là thẩm phán chủ toạ phiên toà; Quyết định trả hồ sơ để điều tra bổ sung phải nêu rõ thuộc trường hợp cụ thể nào quy định tại điểm a, b, c khoản 1 Điều 179 BLTTHS và những vấn đề cụ thể cần điều trả bổ sung. Trong quyết định này không được nêu kết quả điều tra bổ sung có ý nghĩa như thế nào đối với việc giải quyết vụ án và Toà án chỉ được trả lại hồ sơ để điều tra bổ sung không quá hai lần.
       + Nếu xác định việc trả lại hồ sơ để điều tra bổ sung của Toà án là không đúng thì Kiểm sát viên báo cáo lãnh đạo Viện về nội dung quyết định trả hồ sơ; phân tích sự thiếu căn cứ và không hợp pháp của quyết định này (chứng minh bằng hồ sơ vụ án và các quy định của BLTTHS) hoặc xác định rõ các yêu cầu của Toà án là không thể thực hiện được hoặc xác định rõ vấn đề Toà án yêu cầu hoàn toàn có thể làm rõ tại phiên toà và Kiểm sát viên đề xuất hướng giải quyết là: Chuyển lại hồ sơ cho Toà án, tiếp tục đề nghị truy tố. Nếu lãnh đạo đồng ý thì Kiểm sát viên lập văn bản trả lời Toà án, trong đó nêu rõ lý do và quan điểm truy tố của Viện kiểm sát.
       + Nếu xác định việc trả lại hồ sơ để điều tra bổ sung của Toà án là đúng thì Kiểm sát viên phải báo cáo với lãnh đạo đơn vị nghiệp vụ và lãnh đạo Viện, đồng thời đề xuất rõ phương hướng bổ sung chứng cứ theo yêu cầu của Toà án theo một trong những cách sau đây:
       + Nếu những yêu cầu điều tra bổ sung không quá phức tạp và Viện kiểm sát có thể tiến hành được theo quy định của BLTTHS, Quy chế nghiệp vụ của ngành thì Kiểm sát viên đề xuất không phải trả lại hồ sơ cho Cơ quan điều tra mà Viện kiểm sát tự mình bổ sung chứng cứ. Nếu lãnh đạo Viện đồng ý với phương án này thì Kiểm sát viên phải lập kế hoạch cụ thể để tiến hành việc bổ sung chứng cứ và thông qua lãnh đạo đơn vị phê duyệt (cần thiết thì xin ý kiến chỉ đạo của lãnh đạo Viện).
       + Nếu các yêu cầu điều tra bổ sung quá phức tạp thì Kiểm sát viên đề xuất với lãnh đạo Viện trả lại hồ sơ cho Cơ quan điều tra tiến hành việc điều tra bổ sung. Trong văn bản trả lại hồ sơ cho Cơ quan điều tra cũng phải nêu rõ lý do, những yêu cầu điều tra bổ sung cụ thể; thời hạn thực hiện.
     - Sau khi có kết quả điều tra bổ sung (do Viện kiểm sát hoặc Cơ quan điều tra thực hiện), Kiểm sát viên phải xem xét kỹ các tài liệu này và đánh giá với hệ thống tài liệu, chứng cứ đã có trong hồ sơ vụ án xem đã đầy đủ, chính xác chưa? Có đúng với yêu cầu điều tra bổ sung của Toà án không?.
     - Đối với trường hợp tài liệu điều tra bổ sung không làm thay đổi nội dung quyết định truy tố trước đây hoặc việc điều tra bổ sung không thể tiến hành theo yêu cầu của Toà án thì Kiểm sát viên báo cáo với lãnh đạo Viện để ban hành văn bản trả lời Toà án và giữ nguyên quan điểm truy tố.
     - Đối với trường hợp tài liệu điều tra bổ sung làm thay đổi nội dung quyết định truy tố, cụ thể như:
       + Thay đổi về tội danh, hoặc xác định có đồng phạm khác thì Kiểm sát viên phải đề xuất với lãnh đạo Viện yêu cầu Cơ quan điều tra thay đổi quyết định khởi tố vụ án, khởi tố bị can hoặc bổ sung quyết định khởi tố vụ án, khởi tố bị can. Sau khi hoàn thành việc điều tra bổ sung, Kiểm sát viên phải lập lại bản cáo trạng để phù hợp với các chứng cứ, tài liệu mới thu thập được.
       + Trường hợp thay đổi về điểm, khoản, áp dụng của điều luật... thì Kiểm sát viên yêu cầu Cơ quan điều tra kết luận điều tra bổ sung sau đó lập cáo trạng truy tố theo điểm, khoản mới...
     - Đối với trường hợp tài liệu điều tra bổ sung dẫn đến việc phải đình chỉ điều tra vụ án, bị can theo quy định của BLHS và BLTTHS thì Kiểm sát viên báo cáo với lãnh đạo Viện quyết định. Trường hợp đình chỉ toàn bộ vụ án thì phải thông báo cho Toà án biết còn việc đình chỉ một phần vụ án (đình chỉ một hay nhiều bị can) thì phải tiếp tục lập cáo trạng để truy tố các bị can còn lại. Việc thay đổi nội dung quyết định truy tố đều phải thông báo cho bị can, những người tham gia tố tụng.
  
  e. Kiểm sát việc chuẩn bị xét xử của Toà án.
     VBQPPL
     -BLTTHS năm 2003 (Khoản 2 Điều 176, Điều 178, Khoản 2 Điều 57, Điều 160, Điều 180, Khoản 1 Điều 105, Điều 107, Điều 183)
     -Nghị quyết số 04/2004/NQ-HĐTP ngày 05/11/2004 của Hội đồng thẩm phán TAND tối cao hướng dẫn thi hành một số quy định trong phần thứ ba "xét xử sơ thẩm" của BLTTHS 200 
     - Kiểm sát thời hạn chuẩn bị xét xử.
       + Kiểm sát viên phải kiểm sát thời hạn ban hành một trong những quyết định sau đây của Thẩm phán chủ toạ phiên toà: Quyết định đưa vụ án ra xét xử; Quyết định trả lại hồ sơ để điều tra bổ sung; Quyết định đình chỉ hoặc tạm đình chỉ vụ án.
       + Các quyết định này đều phải được Thẩm phán chủ toạ phiên toà đưa ra trong thời hạn theo quy định tại khoản 2 Điều 176 BLTTHS. Thời hạn chuẩn bị xét xử đã được Hội đồng thẩm phán TAND Tối cao hướng dẫn cụ thể tại mục 1.2 Nghị quyết số 04/2004/NQ-HĐTP ngày 05/11/2004. Nếu quá thời hạn theo quy định tại khoản 2 Điều 176 BLTTHS mà Thẩm phán chưa ban hành một trong những quyết định trên thì Kiểm sát viên phải yêu cầu Thẩm phán chuyển ngay cho Viện kiểm sát quyết định gia hạn thời hạn chuẩn bị xét xử.
     - Kiểm sát việc áp dụng thay đổi hoặc huỷ bỏ biện pháp ngăn chặn.
       Đối với các quyết định áp dụng, thay đổi hoặc huỷ bỏ biện pháp ngăn chặn thì Kiểm sát viên phải kiểm sát tính hợp pháp của các quyết định này với các yêu cầu sau:
       + Căn cứ Điều 177 BLTTHS thì việc áp dụng, thay đổi hoặc huỷ bỏ biện pháp ngăn chặn tạm giam phải do Chánh án hoặc Phó Chánh án thực hiện; các biện pháp ngăn chặn khác do Thẩm phán được phân công chủ toạ phiên toà thực hiện.
       + Thời hạn tam giam để chuẩn bị xét xử không được quá thời hạn chuẩn bị xét xử quy định tại Điều 176 BLTTHS và tại Mục 2.2 Nghị quyết số 04/2004/NQ-HĐTP ngày 05/11/2004 của Hội đồng thẩm phán - TAND tối cao. Đối với bị cáo đang bị tạm giam mà đến ngày mở phiên tòa thời hạn tạm giam đã hết, nếu xét thấy cần thiết tiếp tục tạm giam để hoàn thành việc xét xử thì Tòa án ra lệnh tạm giam cho đến khi kết thúc phiên tòa. Kiểm sát viên phải phát hiện và kiến nghị kịp thời các trường hợp để quá hạn tạm giam của Toà án.
     - Kiểm sát quyết định đưa vụ án ra xét xử.
       Kiểm sát nội dung quyết định đưa vụ án ra xét xử phải có đầy đủ 10 nội dung theo Điều 178 BLTTHS. Trong đó chú ý đến:
       + Thành phần Hội đồng xét xử, danh sách những người tham gia tố tụng được triệu tập đến phiên toà.
       + Sự tham gia phiên toà của người giám hộ cho người chưa thành niên; luật sư; người bào chữa trong các vụ án theo quy định của điểm a, điểm b khoản 2 Điều 57 BLTTHS.
       + Sự tham gia của những người mà lời khai của họ có giá trị chứng minh tại phiên toà, như nhân chứng, bị hại.. nếu những người đó vắng mặt thì sẽ gây khó khăn cho việc xác định sự thật của vụ án. Nếu thấy nội dung quyết định đưa vụ án ra xét xử chưa đầy đủ hoặc chưa đúng thì phải kiến nghị ngay với Toà án để bổ sung.
       + Kiểm sát việc giao quyết định này cho Viện kiểm sát, bị cáo, người đại diện hợp pháp của họ và người bào chữa chậm nhất 10 ngày trước khi mở phiên toà. Sau khi có quyết định đưa vụ án ra xét xử phải kiểm sát thời hạn mở phiên toà theo quyết định tại khoản 2 Điều 176 BLTTHS.
     - Kiểm sát việc tạm đình chỉ hoặc đình chỉ vụ án.
       Kiểm sát viên phải xác định tính có căn cứ và tính hợp pháp của quyết định tạm đình chỉ hoặc đình chỉ vụ án, cụ thể là:
       + Đối với quyết định tạm đình chỉ vụ án cần kiểm tra: Thẩm quyền ra quyết định này; căn cứ để tạm đình chỉ theo quy định tại Điều 160 BLTTHS; sau khi Toà án tạm đình chỉ thì có thực hiện các hoạt động tố tụng theo quy định của tố tụng hình sự như phải yêu cầu Cơ quan điều tra truy nã bị cáo với trường hợp không rõ bị cáo ở đâu, phải ra quyết định bắt buộc chữa bệnh khi bị cáo bị bệnh tâm thần…
       + Đối với quyết định đình chỉ vụ án: Cần kiểm sát các căn cứ mà Toà án đình chỉ theo đúng theo quy định tại Điều 180 BLTTHS. Chú ý là Toà án chỉ được đình chỉ theo một trong các căn cứ sau: Khoản 1 Điều 105 BLTTHS (người có yêu cầu khởi tố rút yêu cầu trước ngày mở phiên toà); các căn cứ theo các điểm 3, 4, 5, 6, 7 Điều 107 BLTTHS; khi Viện kiểm sát rút toàn bộ quyết định truy tố trước khi mở phiên toà.
       + Nếu phát hiện thấy việc đình chỉ, tạm đình chỉ không đúng thì báo cáo lãnh đạo Viện để xem xét quyết định việc kháng nghị phúc thẩm.
     - Kiểm sát việc giao quyết định của Toà án.
       + Bảo đảm việc giao quyết định của Tòa án theo quy định tại Điều 182 BLTTHS;
       + Để kiểm sát việc Toà án giao các quyết định thì Kiểm sát viên sau khi nhận được các quyết định này cần yêu cầu Toà án gửi cho những người khác theo quy định, thông qua hoạt động kiểm sát phần thủ tục tại phiên toà hoặc khiếu nại của người bào chữa, bị can, bị cáo để phát hiện các vi phạm của Thẩm phán, Thư ký trong việc giao các quyết định để có kiến nghị kịp thời với Chánh án.
  
  f. Báo cáo án với lãnh đạo viện.
     - Một số vấn đề cần lưu ý.
       + Trước khi tham gia phiên toà Kiểm sát viên phải báo cáo với lãnh đạo Viện về việc giải quyết vụ án. Việc báo cáo án phải bằng văn bản, ghi rõ lý lịch của bị cáo, tóm tắt nội dung vụ án, diễn biến quá trình điều tra, hành vi phạm tội của từng bị cáo, chứng cứ buộc tội, gỡ tội, những mâu thuẫn của các tài liệu, chứng cứ trong hồ sơ vụ án, các tình tiết tăng nặng, giảm nhẹ trách nhiệm hình sự của từng bị cáo. Đề xuất đường lối giải quyết vụ án, áp dụng các điều luật để xử lý…
       + Ý kiến chỉ đạo của lãnh đạo Viện cần được ghi chép lại đầy đủ. Những vụ án được đưa ra Uỷ ban kiểm sát hoặc thỉnh thị Viện kiểm sát cấp trên cần phải lưu lại các văn bản đó trong hồ sơ kiểm sát (không để vào hồ sơ chính). Đối với những vụ án phức tạp, quan trọng cần phải có sự chỉ đạo chặt chẽ của các ngành, Kiểm sát viên phải báo cáo, đề xuất lãnh đạo Viện kiểm sát cấp mình họp trù bị với Toà án.
       + Kiểm sát viên phải chuẩn bị trước nội dung, những vấn đề Tòa án đưa ra trao đổi hoặc Viện kiểm sát đưa ra trao đổi; phương pháp giải quyết, thời gian, địa điểm xét xử; triệu tập người có liên quan; tình hình sức khỏe, tâm lý bị can, bị cáo; phương pháp tuyên truyền. Đối với vụ án phức tạp mà Viện kiểm sát chủ trì họp thì có thể mời lãnh đạo các cơ quan tiến hành tố tụng và một số cơ quan khác tham dự (Điều 7 Quy chế công tác THQCT& KSXX các vụ án hình sự).
     - Báo cáo án.
       +Căn cứ điểm g khoản 2 Điều 36 Bộ luật TTHS, thì việc truy tố bị can trước Toà án do Viện trưởng Viện kiểm sát quyết định. Vì vậy, sau khi nghiên cứu, tổng hợp vụ án, Kiểm sát viên phải chuẩn bị xây dựng bản báo cáo vụ án và đăng ký lịch để báo cáo Viện trưởng Viện kiểm sát cùng cấp.
       +Nội dung bản báo cáo án của Kiểm sát viên phải căn cứ vào quy định tại Điều 6 Quy chế công tác THQCT&KSXX. Tuỳ theo tính chất mức độ nghiêm trọng, phức tạp của vụ án mà Kiểm sát viên đăng ký báo cáo Viện trưởng, Phó Viện trưởng, tập thể lãnh đạo Viện Kiểm sát hoặc báo cáo Uỷ ban kiểm sát nghe và cho ý kiến.
       + Về hình thức: Văn bản báo cáo án phải ghi rõ ngày, tháng, năm báo cáo án, người báo cáo án phải ký tên, nêu ý kiến của Kiểm sát viên là lãnh đạo đơn vị (Viện Kiểm sát nhân dân tối cao là lãnh đạo Vụ, ở Viện Kiểm sát tỉnh, thành phố trực thuộc trung ương là lãnh đạo cấp Phòng). Văn bản báo cáo án phải được lưu giữ trong hồ sơ kiểm sát vụ án. Bản báo án phải ghi rõ lý lịch bị can: họ, tên, ngày, tháng, năm sinh, nơi sinh, nơi cư trú, nghề nghiệp, trình độ văn hoá, thành phần xã hội, quan hệ gia đình, những đặc điểm cơ bản thuộc về nhân thân như tiền án, tiền sự... của bị can, ngày tạm giam. Ngoài ra, báo cáo cũng ghi đầy đủ về các thông tin của người bị hại, bị đơn dân sự, nguyên đơn dân sự, người có quyền lợi nghĩa vụ liên quan, người đại diện hợp pháp.
       + Về nội dung bản báo cáo: Báo cáo án phải nêu tóm tắt nội dung vụ án, cụ thể là: thời gian, địa điểm, hoàn cảnh nơi phạm tội. Diễn biến của hành vi phạm tội. Ai là người thực hiện hành vi phạm tội? vụ án do một hay nhiều người thực hiện, có đồng phạm không, vai trò trách nhiệm từng người trong vụ án; tính chất lỗi của từng người tham gia? mục đích và động cơ phạm tội của từng người? tính chất và mức độ thiệt hại (về vật chất và phi vật chất)? Báo cáo cần phân tích và viện dẫn đầy đủ các chứng cứ xác định có tội và chứng cứ xác định không có tội, cụ thể là: lời khai nhận tội hoặc chối tội của bị can, lời khai của người bị hại, người làm chứng, người có quyền lợi, nghĩa vụ liên quan. Do vậy, yêu cầu Kiểm sát viên phải báo cáo đầy đủ các lời khai (kể cả lời khai do cơ quan điều tra thu thập và các lời khai do Viện kiểm sát thu thập) để lãnh đạo có đầy đủ các thông tin trước khi quyết định phương hướng xử lý vụ án. Báo cáo cụ thể biên bản khám nghiệm hiện trường, biên bản khám nghiệm tử thi; các vật chứng thu thập được, những dấu vết, tài liệu thu thập được có ý nghĩa chứng minh hoặc phủ nhận hành vi phạm tội. Kết luận giám định về những vấn đề xác định sự thật vụ án (giám định tuổi, năng lực trách nhiệm hình sự, giá trị tài sản, tỷ lệ thương tật, tốc độ xe cơ giới, vật liệu nổ, vũ khí, tiền giả, séc giả, ma tuý, tài chính...). Báo cáo cần nêu rõ những điểm khác nhau và những mâu thuẫn trong các tài liệu, chứng cứ đã thu thập được. Khi báo cáo Kiểm sát viên có thể đọc văn bản đã được chuẩn bị, sau đó, trình bày thêm trên sơ đồ hiện trường, bàn chiếu.
       + Báo cáo về áp dụng pháp luật: Báo cáo cần đối chiếu giữa hành vi phạm tội của bị can với các quy định của BLHS để xác định rõ hành vi của bị can phạm tội gì, theo điều, khoản nào của BLHS. Ngoài quy định của BLHS, Kiểm sát viên cần căn cứ vào các văn bản pháp luật khác để viện dẫn áp dụng đối với bị can, nhất là trong các trường hợp điều luật quy định về tội phạm của BLHS lại dưới dạng quy định cần viện dẫn các văn bản pháp luật khác. Ngoài ra, Kiểm sát viên cần nghiên cứu các văn bản quy phạm pháp luật hướng dẫn thực hiện các quy định của pháp luật như các thông tư liên tịch, các nghị quyết của Hội đồng thẩm phán Toà án nhân dân tối cao hướng dẫn về những nội dung có liên quan.
       + Về đề xuất đường lối giải quyết vụ án. Để cho việc đề xuất có căn cứ, ngoài việc nêu những căn cứ chứng minh bị can phạm tội gì, theo điều, khoản nào của BLHS, báo cáo án cần xác định rõ những tình tiết tăng nặng và tình tiết giảm nhẹ trách nhiệm hình sự của bị can, bị cáo (Điều 46, 48 BLHS), trong đó, cần phân biệt rõ những tình tiết có tính chất tăng nặng hoặc giảm nhẹ chung đối với tất cả các bị can, bị cáo trong vụ án có đồng phạm (phạm tội có tổ chức, phạm tội gây hậu quả nghiêm trọng, phạm tội chưa gây thiệt hại hoặc gây thiệt hại không lớn...) và các tình tiết tăng nặng, giảm nhẹ chỉ gắn liền với từng bị can, bị cáo như tái phạm, tái phạm nguy hiểm, phạm tội nhiều lần, cố tình thực hiện tội phạm đến cùng, tự thú, thật thà thành khẩn khai báo, tố giác tội phạm, lập công chuộc tội, người phạm tội là người già, phụ nữ có thai, người có nhược điểm về thể chất hoặc tinh thần... Trong trường hợp vụ án vừa có tình tiết tăng nặng, vừa có tình tiết giảm nhẹ thì báo cáo án phải đánh giá toàn diện trên tất cả các tình tiết tăng nặng và giảm nhẹ để xác định ảnh hưởng của các tình tiết tăng nặng hay các tình tiết giảm nhẹ lớn hơn. Trên cơ sở đó, đề xuất hướng xử lý phạt tăng nặng hay giảm nhẹ đối với bị can, bị cáo, đồng thời cũng cần xác định rõ` },
            { title: '2.2. Phúc thẩm', content: null },
            { title: '2.3. Giám đốc thẩm', content: null },
            { title: '2.4. Tái thẩm', content: null }
          ] 
        },
        { 
          title: '3. XÂY DỰNG HỒ SƠ KIỂM SÁT', 
          subsections: [
            { title: '3.1. Giai đoạn điều tra', content: `a. Về thủ tục tố tụng.
  - Các tài liệu dùng làm căn cứ để khởi tố vụ án và khởi tố bị can, (bản phô tô hoặc bản chính). Một trong các căn cứ để khởi tố vụ án hình sự quy định tại Điều 100 BLTTHS và các tài liệu xác định người đã thực hiện hành vi phạm tội (Biên bản phạm tội quả tang; biên bản về người phạm tội tự thú...).
  - Quyết định khởi tố vụ án hình sự, quyết định thay đổi bổ sung quyết định khởi tố vụ án hình sự. Đề nghị áp dụng thủ tục rút gọn của Cơ quan điều tra và quyết định áp dụng thủ tục rút gọn của Viện kiểm sát.
  - Quyết định khởi tố bị can; Quyết định thay đổi, bổ sung quyết định khởi tố bị can; Quyết định phê chuẩn quyết định khởi tố bị can của Viện kiểm sát. Kèm theo danh chỉ bản của bị can.
  - Quyết định phân công Điều tra viên; Kiểm sát viên; yêu cầu thay đổi Điều tra viên.
  - Các yêu cầu, quyết định của Viện kiểm sát trong hoạt động kiểm sát việc khởi tố, kiểm sát các hoạt động điều tra (chú ý quyết định huỷ bỏ các quyết định không có căn cứ và trái pháp luật của Cơ quan điều tra và Viện kiểm sát theo quy định BLTTHS).
  - Lệnh bắt người (khẩn cấp, để tạm giam); Lệnh khám xét (người, chỗ ở, địa điểm, đồ vật, thư tín, điện tín, bưu kiện, bưu phẩm…) kèm theo báo cáo xin phê chuẩn hoặc báo cáo ban đầu. Trích ghi kết quả bắt khám xét.
  - Các công văn, quyết định áp dụng, thay đổi huỷ bỏ biện pháp ngăn chặn của Cơ quan điều tra; Viện kiểm sát và các quyết định của Viện kiểm sát trong việc phê chuẩn, không phê chuẩn lệnh, quyết định của Cơ quan điều tra.
  - Các lệnh, quyết định truy nã bị can, biên bản bắt người có lệnh truy nã, (trích ghi); quyết định đình nã; yêu cầu truy nã bị can của Viện kiểm sát.
  - Bản yêu cầu điều tra của Kiểm sát viên được phân công kiểm sát điều tra vụ án.
  - Bản phô-tô các quyết định thu giữ, xử lý tài sản, đồ vật, vật chứng… trong vụ án; kèm theo biên bản về kết quả thực hiện.
  - Bản phô tô các biên bản giao nhận các lệnh, quyết định cho bị can (kèm các lệnh, quyết định của Cơ quan điều tra, Viện kiểm sát đã ban hành.)
  - Biên bản giao nhận hồ sơ, vật chứng, tài sản kê biên, tạm giữ .
  - Các quyết định trả hồ sơ để điều tra bổ sung; quyết định uỷ thác điều tra; quyết định tạm đình chỉ, đình chỉ vụ án, bị can; quyết định phục hồi điều tra, quyết định chuyển hồ sơ vụ án; quyết định tách, nhập vụ án….
  - Các quyết định tố tụng hình sự và tài liệu khác và các thông báo theo quy định của BLTTHS.
  Lưu ý: Đối với các loại tài liệu, văn bản nêu trên mà BLTTHS không quy định Cơ quan điều tra phải gửi cho Viện kiểm sát thì Kiểm sát viên, Kiểm tra viên phải trích ghi nội dung (hoặc phô-tô) để lưu vào hồ sơ kiểm sát.
  b. Tài liệu điều tra.
  - Trích ghi hoặc phôtô các biên bản khám nghiệm hiện trường; sơ đồ hiện trường, khám nghiệm tử thi; xem xét dấu vết trên thân thể, xác định thương tích ban đầu (của bị can, người bị hại..), biên bản thực nghiệm điều tra; các quyết định trưng cầu giám định, giám định bổ sung, giám định lại các bản kết luận giám định; các biên bản đối chất, nhận dạng; phôtô bản ảnh bị can.
  - Bản sao các chứng từ, hoá đơn và các tài liệu khác để giải quyết phần dân sự trong vụ án hình sự.
  - Bản trích ghi hoặc phô-tô một số bản tường trình, tự khai, tự thú, các bản ghi lời khai của bị can; lời khai của người làm chứng; người bị hại; người có quyền và nghĩa vụ liên quan… do Cơ quan điều tra và Viện kiểm sát lập (theo thứ tự thời gian, kể cả lời nhận tội, chối tội của bị can).
  - Trích ghi lý lịch của bị can (chú ý quá trình hoạt động của bản thân, trình độ văn hoá, dân tộc, tôn giáo, tiền án, tiền sự…) hoặc bản phô-tô lý lịch bị can.
  - Bản kết luận điều tra vụ án; kết luận điều tra bổ sung; hoặc quyết định đề nghị truy tố theo thủ tục rút gọn, kèm biên bản giao nhận kết luận điều tra.
  - Bản cáo trạng (kèm danh sách những người cần triệu tập ra toà); quyết định truy tố (theo thủ tục rút gọn) của VKSND, kèm biên bản giao nhận cáo trạng, quyết định truy tố.
  - Các văn bản, tài liệu khác có giá trị chứng minh tội phạm và người phạm tội; xác định rõ nhân thân người phạm tội; các tình tiết tăng nặng, giảm nhẹ; chứng cứ gỡ tội đối với bị can…, cũng phải trích ghi nội dung hoặc sao chụp để lưu vào hồ sơ kiểm sát án hình sự.
  c. Các tài liệu khác.
  - Bản nghiên cứu tổng hợp của Kiểm sát viên, Kiểm tra viên phải phản ánh được việc tuân theo BLTTHS của Điều tra viên trong quá trình điều tra vụ án, diễn biến, nội dung vụ án; tính xác thực và hợp pháp của các tài liệu điều tra; đánh giá phân tích tổng hợp các chứng cứ để xác định tội danh, điều luật áp dụng; các chứng cứ buộc tội, gỡ tội; các tình tiết tăng nặng, giảm nhẹ trách nhiệm hình sự; nguyên nhân, điều kiện phạm tội; các tài liệu phản ánh hoạt động của kiểm sát viên, lãnh đạo đơn vị kiểm sát điều tra, phó viện trưởng, viện trưởng khi thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự; các tài liệu hướng dẫn chỉ đạo nghiệp vụ của viện kiểm sát cấp trên.
  - Các biên bản (hoặc trích) các cuộc họp để giải quyết vụ án trong ngành Kiểm sát hoặc liên ngành.
  - Các văn bản báo cáo cấp uỷ địa phương về giải quyết vụ án. Những tài liệu về hoạt động áp dụng biện pháp phòng ngừa tội phạm. Các kiến nghị khắc phục nguyên nhân, điều kiện vi phạm, tội phạm.
  - Các tài liệu về vi phạm của Cơ quan điều tra (Điều tra viên) và Viện kiểm sát (Kiểm sát viên) và biện pháp khắc phục.
  - Phiếu thống kê tội phạm.
  - Các đơn khiếu nại, tố cáo trong hoạt động điều tra; kiểm sát điều tra - truy tố; biện pháp và kết quả giải quyết. Các văn bản, tài liệu cần thiết khác trong giai đoạn khởi tố, điều tra, truy tố do Cơ quan điều tra, Viện kiểm sát ban hành.
   
  - Trong quá trình lập hồ sơ kiểm sát điều tra, Kiểm sát viên phải lập nhật ký kiểm sát điều tra theo mẫu quy định. Hồ sơ kiểm sát án hình sự phải được đánh số bút lục thứ tự từ 01 cho đến hết.` },
            { title: '3.2. Sơ thẩm', content: `Hồ sơ kiểm sát án hình sự ở giai đoạn này cần có các tài liệu sau:
  - Quyết định đưa vụ án ra xét xử; quyết định trả hồ sơ để điều tra bổ sung; quyết định gia hạn thời hạn xét xử;
  - Quyết định áp dụng, thay đổi, huỷ bỏ biện pháp ngăn chặn của Toà án cấp sơ thẩm; quyết định đình chỉ hoặc tạm đình chỉ vụ án; quyết định rút quyết định truy tố của Viện kiểm sát; bản sao biên bản giao các quyết định của Toà án (kèm theo loại quyết định);
  - Quyết định phân công Kiểm sát viên thực hành quyền công tố và kiểm sát xét xử sơ thẩm;
  - Báo cáo án của Kiểm sát viên, Kiểm tra viên được phân công thực hành quyền công tố và kiểm sát xét xử sơ thẩm, kèm theo đề cương thẩm vấn và kế hoạch chuẩn bị tranh luận tại phiên toà, ý kiến chỉ đạo của lãnh đạo Viện;
  - Trích ghi biên bản họp trù bị giữa Viện kiểm sát và Toà án;
  - Công văn thỉnh thị Viện kiểm sát cấp trên, xin ý kiến cấp uỷ địa phương về đường lối xét xử và hướng dẫn chỉ đạo của Viện kiểm sát cấp trên, của cấp uỷ địa phương;
  - Bản luận tội của Kiểm sát viên; biên bản phiên toà sơ thẩm của Kiểm sát viên; quyết định hoãn phiên toà; bản án, quyết định sơ thẩm;
  - Đơn kháng cáo; quyết định kháng nghị bản án sơ thẩm;
  - Báo cáo kết quả xét xử sơ thẩm; thông báo án có kháng cáo, kháng nghị;
  - Tài liệu ghi kết quả kiểm tra biên bản phiên toà; kiểm tra bản án, quyết định sơ thẩm của Toà án cấp sơ thẩm (do Kiểm sát viên lập);
  - Các tài liệu phản ánh việc phát hiện, kiến nghị khắc phục vi phạm của Toà án cấp sơ thẩm và những nguyên nhân, điều kiện phạm tội cũng như tài liệu phản ánh biện pháp và kết quả khắc phục;
  - Các văn bản, tài liệu khác trong hoạt động xét xử sơ thẩm và kiểm sát xét xử sơ thẩm: Các tài liệu do các phương tiện thông tin đại chúng, các cơ quan Đảng, Nhà nước, Quốc hội, Chính phủ hoặc qua đơn thư khiếu tố phản ánh;
  - Đơn khiếu nại, tố cáo cán bộ tư pháp trong hoạt động thực hành quyền công tố, KSXX và hoạt động xét xử sơ thẩm; kết quả giải quyết .
  Lưu ý:
   
  Đối với những tài liệu nêu trên mà BLTTHS không quy định Toà án cấp sơ thẩm gửi cho Viện kiểm sát thì Kiểm sát viên phải trích ghi nội dung hoặc sao chụp lại để lưu và hồ sơ kiểm sát xét xử sơ thẩm.` },
            { title: '3.3. Phúc thẩm', content: `Hồ sơ kiểm sát hình sự ở giai đoạn này bao gồm:
  - Thông báo án có kháng cáo, kháng nghị; đơn kháng cáo (bản phôtô); Quyết định kháng nghị.
  - Thông báo của Toà án cấp phúc thẩm cho Viện kiểm sát cùng cấp về việc xét xử phúc thẩm vụ án hình sự.
  - Quyết định của Toà án cấp phúc thẩm về áp dụng, thay đổi huỷ bỏ biện pháp ngăn chặn.
  - Quyết định phân công Kiểm sát viên tham gia phiên toà phúc thẩm (thực hành quyền công tố và kiểm sát xét xử phúc thẩm).
  - Trích ghi biên bản họp trù bị với toà án cấp phúc thẩm .
  - Bản nghiên cứu hồ sơ vụ án( hoặc báo cáo án) của Kiểm sát viên (phải phản ánh rõ những vấn đề của bản án sơ thẩm bị kháng cáo kháng nghị; ý kiến đề xuất giải quyết của Kiểm sát viên; ý kiến chỉ đạo của lãnh đạo Viện.
  - Báo cáo thỉnh thị và trả lời thỉnh thị.
  - Những tài liệu thu thập thêm về vụ án sau khi xét xử sơ thẩm.
  - Bản dự thảo kết luận phúc thẩm của Kiểm sát viên. Đề cương xét hỏi, tranh luận tại phiên toà phúc thẩm.
  - Bản sao tài liệu về việc rút kháng cáo; quyết định bổ sung, thay đổi, rút kháng nghị của Viện kiểm sát .
  - Quyết định đình chỉ xét xử phúc thẩm; Tài liệu về việc hoãn phiên toà
  - Biên bản phiên toà phúc thẩm của Kiểm sát viên; Bản án phúc thẩm.
  - Bản sao cáo trạng của Viện kiểm sát; bản án của Toà án cấp sơ thẩm, biên bản nghị án và biên bản phiên toà sơ thẩm.
  - Thông báo kết quả xét xử phúc thẩm.
  - Tài liệu ghi kết quả kiểm tra biên bản phiên toà, bản án và quyết định phúc thẩm của Toà án phúc thẩm (do Kiểm sát viên lập).
  - Kiến nghị khắc phục nguyên nhân, điều kiện vi phạm tội phạm.
  - Thông báo rút kinh nghiệm nghiệp vụ.
  - Văn bản hướng dẫn điều tra bổ sung trong trường hợp bản án sơ thẩm bị Tòa án cấp phúc thẩm huỷ để điều tra lại.
  - Các tài liệu phản án về hoạt động phát hiện, biện pháp khắc phục vi phạm của cơ quan tiến hành tố tụng.
  - Báo cáo đề xuất giám đốc thẩm.
  - Các văn bản, tài liệu khác trong giai đoạn xét xử phúc thẩm.
  - Đơn khiếu nại, tố cáo liên quan đến việc giải quyết vụ án ở giai đoạn xét xử phúc thẩm và kết quả giải quyết.
  Lưu ý:
   
  Đối với những tài liệu nêu trên mà BLTTHS không quy định Toà án cấp phúc thẩm gửi cho Viện kiểm sát cùng cấp và các tài liệu do Viện kiểm sát xác minh (biên bản phúc cung bị can, biên bản đối chất…) thì Kiểm sát viên phải trích nội dung hoặc sao chụp lại để lưu vào hồ sơ kiểm sát xét xử phúc thẩm.` },
            { title: '3.4. Giám đốc, tái thẩm', content: `Hồ sơ kiểm sát hình sự ở giai đoạn này gồm:
  - Các tài liệu (nguồn) dùng làm căn cứ để xem xét kháng nghị theo thủ tục giám đốc thẩm hoặc tái thẩm theo quy định tại Điều 273, Điều 274, Điều 291, Điều 292 BLTTHS. Cần chú ý, các văn bản đề nghị xem xét theo thủ tục giám đốc thẩm, tái thẩm do các cơ quan Đảng, Quốc hội, Đại biểu Quốc hội, Đoàn đại biểu Quốc hội, Chỉnh phủ, Mặt trận Tổ quốc… chuyển đến; báo cáo đề xuất của Viện kiểm sát cấp dưới và kết luận kiểm tra nghịêp vụ của Viện kiểm sát cấp trên.
  - Các tài liệu thể hiện việc nghiên cứu hồ sơ của Kiểm sát viên, Kiểm tra viên phải phản ánh được trình tự, thủ tục giải quyết vụ án qua từng giai đoạn tố tụng: Khởi tố, điều tra, truy tố, xét xử sơ thẩm, xét xử phúc thẩm và giám đốc thẩm; những chứng cứ, tài liệu dùng làm căn cứ để quyết định có kháng nghị theo thủ tục giám đốc thẩm hoặc tái thẩm không; ý kiến đề xuất của Kiểm sát viên và ý kiến chỉ đạo của Lãnh đạo đơn vị nghiệp vụ và Lãnh đạo Viện…
  - Bản sao bản kết luận điều tra vụ án, bản cáo trạng của VKSND, bản án, quyết định của Toà án cấp sơ thẩm, bản án phúc thẩm; quyết định giám đốc thẩm (nếu có).
  - Quyết định xác minh tái thẩm.
  - Các tài liệu xác minh thu thập bổ sung để phục vụ việc kháng nghị giám đốc thẩm, tái thẩm (bản sao).
  - Thông báo không kháng nghị giám đốc thẩm, tái thẩm (bản sao).
  - Quyết định kháng nghị giám đốc thẩm, tái thẩm. Quyết định bổ sung rút kháng nghị giám đốc thẩm.
  - Quyết định tạm đình chỉ thi hành án.
  - Bản dự thảo lời phát biểu của Kiểm sát viên tại phiên toà giám đốc thẩm, tái thẩm.
  - Bút ký phiên toà giám đốc thẩm, tái thẩm của Kiểm sát viên.
  - Quyết định giám đốc thẩm, tái thẩm.
  - Lệnh tạm giam của Hội đồng giám đốc thẩm trong trường hợp huỷ bản án hoặc quyết định bị kháng nghị để điều tra lại (nếu có).
  - Báo cáo kết quả xét xử theo thủ tục giám đốc thẩm, tái thẩm với lãnh đạo VKSND cùng cấp.
   
  - Thông báo kết quả xét xử giám đốc thẩm, tái thẩm cho Viện kiểm sát cấp sơ thẩm và cấp phúc thẩm…` },
            { title: '3.5. Án tử hình', content: `Hồ sơ kiểm sát thẩm định bản án tử hình trình Chủ tịch nước ân giảm gồm:
  - Các tài liệu về nguồn hồ sơ: Bản sao đơn xin Chủ tịch nước ân giảm hình phạt tử hình, đơn kêu oan của người bị kết án tử hình.
  - Quyết đinh không kháng nghị theo thủ tục giám đốc thẩm hoặc tái thẩm và tờ trình Chủ tịch nước của Chánh án TAND tối cao về đơn xin ân giảm án tử hình và đơn kêu oan của người bị kết án tử hình.
  - Bản sao hoặc trích các tài liệu chứng cứ chứng minh hành vi phạm tội của bị cáo, bản kết luận điều tra vụ án, cáo trạng, bản án sơ thẩm, bản án phúc thẩm…
  - Bản nghiên cứu hồ sơ vụ án của Kiểm sát viên, Kiểm tra viên.
  - Quyết định không kháng nghị, tờ trình Chủ tịch nước của Viện trưởng VKSND tối cao về đơn xin giảm án tử hình và đơn kêu oan của người bị kết án.
  - Quyết định của Chủ tịch nước.
  * Việc quản lý, sử dụng, bảo quản hồ sự kiểm sát án hình sự.
  VBQPPL
  - Quyết định số 92 ngày 01/01/2001 của Viện trưởng VKSND tối cao
  - Quyết định số 07/QĐ ngày 12/01/2006 của Viện trưởng VKSND tối cao
  - Quyết định số 88/2004/QĐ-TTg ngày 21/5/2004 của Thủ tướng Chính phủ
  - Quyết định số 14/2005/QĐ-VKSTC ngày 21/01/2005 của Viện trưởng Viện kiểm sát nhân dân tối cao
  - Việc quản lý, sử dụng, bảo quản hồ sơ kiểm sát án hình sự được thực hiện theo Quyết định số 92/QĐ-VKSTC ngày 01/01/2001 và Quyết định số 07/QĐ-VKSTC ngày 12/01/2006 của Viện trưởng VKSND tối cao.
  - Hồ sơ kiểm sát án hình sự được lưu trữ, quản lý chặt chẽ theo chế độ bảo mật theo đúng Quyết định số 88/2004/QĐ-TTg ngày 21/5/2004 của Thủ tướng Chính phủ “Về danh mục bí mật nhà nước độ tuyệt mật, tối mật trong ngành Kiểm sát” và “Quy chế bảo vệ bí mật nhà nước của ngành Kiểm sát nhân dân” ban hành kèm theo Quyết định số 14/2005/QĐ-VKSTC ngày 21/01/2005 của Viện trưởng Viện kiểm sát nhân dân tối cao. Hồ sơ kiểm sát án hình sự phải được bảo quản chu đáo không được để hư hỏng, mất mát, thất lạc. Nếu vi phạm thì tuỳ theo mức độ lỗi sẽ bị kỷ luật nghiêm minh.
  - Hàng năm thực hiện nộp hồ sơ kiểm sát án hình sự để lưu trữ theo quy định.
  - Khi cần nghiên cứu hồ sơ kiểm sát các vụ án hình sự để phục vụ yêu cầu công tác chung thì đề nghị Lãnh đạo đơn vị yêu cầu cấp quản lý hồ sơ (văn phòng hoặc lưu trữ) cung cấp. Việc cấp hoặc trả lại hồ sơ kiểm sát án hình sự phải thực hiện giao nhận bằng văn bản có ký xác nhận.
  - Thời hạn bảo quản hồ sơ kiểm sát án hình sự thực hiện phù hợp với thời hiệu truy cứu trách nhiệm hình sự.` }
          ] 
        },
        { title: '4. HỆ THỐNG BIỂU MẪU', subsections: [] },
      ],
    },
    {
      part: 'Phần Thứ Tư',
      title: 'KIỂM SÁT VIỆC TẠM GIỮ, TẠM GIAM',
      sections: [
        { title: '1. NHIỆM VỤ, QUYỀN HẠN', subsections: [] },
        { 
          title: '2. PHƯƠNG PHÁP KIỂM SÁT', 
          subsections: [
            { title: '2.1. Thường kỳ', content: `- Khi tiến hành kiểm sát thường kỳ có thể đi sâu kiểm sát toàn bộ việc chấp hành pháp luật trong việc tạm giữ, tạm giam hoặc cũng có thể kiểm sát những vấn đề nào thấy cần thiết hoặc phúc tra lại những vi phạm đã được phát hiện của lần kiểm sát trước mà Viện kiểm sát đã kháng nghị yêu cầu sửa chữa, xem kết quả sửa chữa vi phạm của Trưởng nhà tạm giữ, Giám thị trại tạm giam.
  - Đối với nhà tạm giữ: Hàng ngày Kiểm sát viên phải kiểm sát việc bắt, tạm giữ, tạm giam; 3 tháng 1 lần kiểm sát từng mặt, 6 tháng 1 lần kiểm sát trực tiếp toàn diện về việc bắt, tạm giữ, tạm giam, có kết luận bằng văn bản.
  - Đối với trại tạm giam thuộc Công an cấp tỉnh, trại tạm giam cấp quân khu, hàng tuần kiểm sát về thủ tục trong việc tạm giữ, tạm giam theo quy định của Bộ luật tố tụng hình sự, ba tháng một lần trực tiếp kiểm sát theo từng nội dung, sáu tháng một lần kiểm sát toàn diện về tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  - Đối với trại tạm giam thuộc Bộ Công an, trại tạm giam thuộc Bộ Quốc phòng, hàng tháng kiểm sát về thủ tục trong việc tạm giữ, tạm giam theo quy định của Bộ luật tố tụng hình sự; một năm trực tiếp kiểm sát toàn diện hai lần về việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  - Để thực hiện được yêu cầu của công tác kiểm sát việc tạm giữ, tạm giam theo đúng quy định của pháp luật, khi tiến hành công tác kiểm sát thường kỳ và trực tiếp đối nhà tạm giữ, trại tạm giam cần chú ý kiểm sát các nội dung sau:
  Thứ nhất, kiểm sát đối tượng, thủ tục, thẩm quyền và thời hạn tạm giữ, tạm giam phải đảm bảo các yêu cầu:
  + Khi tiếp nhận một người bị tạm giữ, tạm giam vào nơi giam, giữ, hoặc ra khỏi nơi giam, giữ phải kiểm tra các lệnh, quyết định (phải có các lệnh, quyết định đang còn hiệu lực pháp luật của các cơ quan và người có thẩm quyền theo quy định của pháp luật); có biên bản giao, nhận hồ sơ, giao nhận người; xác nhận tình trạng sức khỏe của họ; biên bản tạm giữ tư trang, tài sản (nếu có).
  + Biên bản bắt, tạm giữ, tạm giam phải ghi rõ lý do tạm giữ, tạm giam, thời hạn tạm giữ, tạm giam từ ngày, tháng năm đến ngày, tháng năm (đối với lệnh tạm giữ phải ghi rõ tạm giữ từ giờ … đến giờ, ngày… Ví dụ: Tạm giữ từ 10h ngày 01/01/2005 đến 10h ngày 04/01/2005).
  + Đối tượng chuyển từ nhà tạm giữ, trại tạm giam khác đến phải có quyết định điều chuyển; lệnh tạm giữ, tạm giam đang còn hiệu lực pháp luật; có danh chỉ bản; có các quyết định xử lý: Quyết định khởi tố bị can, chuyển tạm giam, các quyết định áp dụng biện pháp ngăn chặn khác, quyết định hủy bỏ biện pháp tạm giữ, quyết định trả tự do vì không đủ căn cứ; có các tài liệu khác như: Biên bản vi phạm và quyết định xử lý kỷ luật người bị tạm giữ, tạm giam.
  + Nếu người bị giam, giữ chết phải có biên bản xác định nguyên nhân chết có sự chứng kiến của đại diện Viện kiểm sát; biên bản trả tư trang, tài sản khi người bị giam, giữ được trả tự do, chuyển nơi giam, giữ khác (phải có xác nhận của người nộp, người nhận). Các biên bản này phải ghi rõ giờ, ngày, tháng, năm, dấu, chữ ký của những người có trách nhiệm.
  + Các lệnh, quyết định của cơ quan và người có thẩm quyền phải ghi rõ: Cơ quan, họ tên, chức vụ, cấp bậc người ra lệnh; Họ tên, ngày, tháng, năm sinh, nơi đăng ký thường trú, ngày bị bắt, tội danh, ngày bị tạm giữ, tạm giam. Các loại lệnh, quyết định, biên bản trong hồ sơ giam, giữ đều phải ghi rõ ngày, giờ, tháng, năm, ký tên và đóng dấu. Thời hạn tạm giữ, tạm giam căn cứ vào những quy định của pháp luật.
  + Khi kiểm sát nhà tạm giữ, trại tạm giam nếu phát hiện các trường hợp hết thời hạn tạm giữ, tạm giam mà người đó vẫn đang bị giam, giữ thì Kiểm sát viên báo cáo lãnh đạo viện, yêu cầu cơ quan và người có thẩm quyền trả tự do cho họ. Việc tính thời gian tạm giữ vào thời hạn tạm giam và cách ghi thời hạn trong lệnh tạm giam của Cơ quan điều tra có đúng mục 6 Thông tư liên tịch số 05/2005/BCA-BQP-VKSTC ngày 7/9/2005; Qua kiểm sát giam, giữ, phát hiện thấy việc tạm giữ, tạm giam không có căn cứ, không đảm bảo các thủ tục, không đúng thẩm quyền, quá thời hạn thì phối hợp với kiểm sát điều tra xem xét và báo cáo Viện trưởng Viện kiểm sát để giải quyết.
  Thứ hai, kiểm sát việc phân loại, quản lý người bị tạm giữ, tạm giam theo quy định của pháp luật.
  + Khi tiến hành kiểm sát phải xem xét việc tuần tra canh gác 24/24 giờ nhà tạm giữ, trại tạm giam để giải quyết kịp thời các việc đột xuất có thể xảy ra.
  + Phải kiểm tra, xem xét các buồng giam, giữ. Chú ý các buồng chấp hành án phạt tù tại nhà tạm giữ, buồng tạm giữ, tạm giam, buồng giam, giữ người phạm tội thuộc các trường hợp phải giam, giữ riêng theo quy định của pháp luật. Nhà tạm giữ có buồng tạm giam, buồng chấp hành án phạt tù phải có biển ghi buồng tạm giam, buồng chấp hành án phạt tù.
  + Kiểm sát việc xử lý kỷ luật đối với người bị giam, giữ (Qua nghiên cứu hồ sơ, quan sát, hỏi người bị kỷ luật, thăm buồng kỷ luật), bảo đảm việc xử lý kỷ luật đúng theo quy định tại khoản 3 Điều 32 NĐ số 89-CP ngày 7/1/1998 và khoản 6 Điều 1 Nghị định 98-CP của Chính Phủ ngày 27/11/2002.
  Thứ ba, kiểm sát việc thực hiện chế độ đối với người bị tạm giữ, tạm giam.
  + Kiểm tra chế độ ăn uống, ở, sinh hoạt, quần áo, chăn màn theo quy định của pháp luật về tạm giữ, tạm giam. Người bị tạm giữ, tạm giam được gặp người thân (nếu có thể); được nhận quà tiếp tế của gia đình (theo quy định của pháp luật), được khám chữa bệnh khi đau ốm, được học tập.
  + Kiểm sát việc giải quyết khiếu nại, tố cáo của người bị tạm giữ, tạm giam về việc tạm giữ, tạm giam trái pháp luật hoặc các hành vi trái với Quy chế tạm giữ, tạm giam.
   
  Thứ tư, kiểm sát việc đảm bảo an toàn về tính mạng, tài sản, nhân phẩm, danh dự của người bị tạm giữ, tạm giam và các quyền khác của họ không bị pháp luật tước bỏ được tôn trọng.` },
            { title: '2.2. Bất thường', content: `- Theo hướng dẫn tại khoản 2 Điều 25 Quy chế kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự được ban hành kèm theo Quyết định số 35/2013/QĐ-VKSTC –V4 ngày 29/1/2013 của Viện trưởng Viện kiểm sát nhân dân tối cao thì khi xét thấy cần thiết, Viện kiểm sát trực tiếp kiểm sát tại nhà tạm giữ, trại tạm giam.
  Việc tiến hành kiểm sát có thể được áp dụng khi phát hiện có dấu hiệu vi phạm pháp luật nghiêm trọng xảy ra ở nhà tạm giữ, trại tạm giam (như: vi phạm về căn cứ, về thời hạn, về thủ tục tạm giữ, tạm giam; vi phạm về việc thực hiện các chế độ quản lý, các chế độ ăn, ở, sinh hoạt, chữa bệnh… của người bị tạm giữ, tạm giam) hoặc trong trường hợp người bị tạm giữ, tạm giam trốn, phạm tội mới, chết do tai nạn lao động hoặc dịch bệnh, chết bất thường không rõ nguyên nhân, tự tử…
  Việc tiến hành kiểm sát ngay bất kỳ thời gian nào, không kể là ngày hay đêm. Tiến hành đột xuất kiểm sát phải có quyết định trực tiếp kiểm sát, khi kết thúc có kết luận bằng văn bản; trong đó xác định nguyên nhân và hậu quả do hành vi vi phạm pháp luật gây ra và yêu cầu Trưởng nhà tạm giữ, Giám thị trại tạm giam có biện pháp chấm dứt việc làm vi phạm pháp luật và xử lý người vi phạm.
   
  - Căn cứ khoản 4 Điều 25 Quy chế kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự thì kiểm sát bất thường tại nhà tạm giữ, trại tạm giam thuộc cấp mình và cấp dưới phải do Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được uỷ quyền tiến hành.` },
            { title: '2.3. Kiểm tra hồ sơ', content: `Căn cứ Điều 16 Quy chế tạm giữ, tạm giam và Thông tư số 01/2012/TT-BCA ngày 3/1/2012 của Bộ Công an quy định và ban hành các loại biểu mẫu, sổ theo dõi sử dụng trong công tác quản lý tạm giữ, tạm giam thì hồ sơ người bị tạm giữ, tạm giam do Trưởng nhà tạm giữ, Giám thị trại tạm giam xây dựng và quản lý để theo dõi việc chấp hành thủ tục, chế độ tạm giữ, tạm giam. Ngoài ra còn có các loại sổ về tạm giữ, tạm giam của cơ quan, đơn vị quản lý nhà tạm giữ, trại tạm giam để theo dõi, quản lý việc tạm giữ, tạm giam. Do vậy, hoạt động của Kiểm sát viên là:
  - Kiểm tra hồ sơ của người bị tạm giữ, tạm giam để nắm được tình hình chấp hành pháp luật từ việc tiếp nhận cho đến khi trả tự do người bị tạm giữ, tạm giam; nắm được quá trình thực hiện thủ tục, các chế độ đối với người bị tạm giữ, tạm giam, qua đó thu thập các vi phạm từ việc nghiên cứu hồ sơ để có cơ sở chắc chắn chứng minh vi phạm là có thật.
  - Trong mỗi vi phạm đã phát hiện và xác minh có thể lập thành biên bản. Phân loại thành từng dạng để phục vụ cho việc tổng hợp kết quả kiểm sát.
   
  - Kiểm tra hình thức, nội dung giữa lệnh, quyết định và sổ sách..., các loại đó chỉ giới hạn bao gồm: Hồ sơ, tài liệu, của cơ quan, đơn vị cùng cấp và cấp dưới có trách nhiệm trong việc tạm giữ, tạm giam; những tài liệu, hồ sơ, sổ sách có liên quan đến việc quản lý, giam, giữ mà Trưởng nhà tạm giữ, Giám thị trại tạm giam đang quản lý như sổ người bị tạm giữ, tạm giam chết, trốn, vi phạm kỷ luật…` },
            { title: '2.4. Gặp người bị tạm giam', content: `- Căn cứ Điều 27 Quy chế kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự thì khi tiến hành kiểm sát việc tuân theo pháp luật của các cơ quan, đơn vị và người có trách nhiệm trong việc tạm giữ, tạm giam, trong trường hợp cần thiết Kiểm sát viên gặp và hỏi người bị tạm giữ, tạm giam về việc thực hiện các quy định của pháp luật trong tạm giữ, tạm giam, đảm bảo cho việc thực hiện khách quan, toàn diện, đúng quy định pháp luật. Do vậy, Kiểm sát viên được giao nhiệm vụ kiểm sát việc tạm giữ, tạm giam chỉ được gặp, hỏi những gì có liên quan đến việc tạm giữ, tạm giam.
  - Nội dung hỏi của Kiểm sát viên:
  + Hỏi về việc tạm giữ, tạm giam có theo đúng quy định của pháp luật không?
  + Mọi chế độ đối với người bị tạm giữ, tạm giam có được đảm bảo không?
  + Tính mạng, sức khỏe, tài sản, danh dự, nhân phẩm của người bị tạm giữ, tạm giam và các quyền khác của họ không bị pháp luật tước bỏ có được tôn trọng không?
   
  + Quyền lợi của họ có được trưởng nhà tạm giữ, giám thị trại tạm giam thực hiện theo đúng quy định của pháp luật không?.` },
            { title: '2.5. Giải quyết khiếu nại', content: `- Tiếp nhận và giải quyết những khiếu nại, đề nghị có liên quan đến việc tạm giữ, tạm giam như họ khiếu nại về thời hạn tạm giữ, tạm giam, về chế độ tạm giữ, tạm giam, chế độ thăm gặp, lưu ký, việc thực hiện các chế độ bảo đảm quyền lợi về vật chất cũng như tinh thần đối với họ mà Trưởng nhà tạm giữ, Giám thị trại tạm giam có trách nhiệm thực hiện.
  - Nghiên cứu, phân loại, nếu thấy cần thiết có thể trực tiếp gặp gỡ, đối thoại với người khiếu nại, người bị khiếu nại; người tố cáo, người bị tố cáo và những người có liên quan để xác minh nội dung khiếu nại, tố cáo;
  - Trực tiếp giải quyết khiếu nại, tố cáo có liên quan đến việc chấp hành các quy định của pháp luật về tạm giữ, tạm giam.
  - Đề xuất với Lãnh đạo Viện ra kháng nghị, kiến nghị, yêu cầu xử lý những hành vi xâm phạm đến tính mạng, sức khỏe, danh dự, nhân phẩm, tài sản và chế độ đối với người bị tạm giữ, tạm giam; chuyển đến cơ quan, đơn vị có thẩm quyền giải quyết những khiếu nại, tố cáo thuộc thẩm quyền và theo dõi kết quả giải quyết của cơ quan, đơn vị đó.` }
          ] 
        },
        { 
          title: '3. NỘI DUNG KIỂM SÁT', 
          subsections: [
            { title: '3.1. Sổ sách', content: `- Sổ quản lý người bị tạm giữ, tạm giam;
  - Sổ quản lý việc trích xuất;
  - Sổ quản lý việc kỷ luật;
  - Sổ quản lý việc thăm gặp;
  - Sổ quản lý tiền lưu ký...
   
  Yêu cầu sổ phải được ghi chép đầy đủ, kịp thời đúng các cột mục theo quy định.` },
            { title: '3.2. Hồ sơ', content: `- Kiểm sát hồ sơ khi tiếp nhận người vào để tạm giữ, tạm giam gồm có:
  + Quyết định tạm giữ, Lệnh tạm giam, đối với người bị truy nã phải có thêm Quyết định truy nã;
  + Biên bản bắt hoặc báo cáo bắt giữ;
  + Biên bản giao nhận hồ sơ và giao nhận người bị tạm giữ, tạm giam, xác định tình trạng sức khoẻ của họ;
  + Biên bản giao nhận tư trang, tài sản của người bị bắt (nếu có);
  + Lệnh trích xuất, quyết định điều chuyển và toàn bộ hồ sơ liên quan đến người bị tạm giữ, tạm giam ở nơi tạm giữ, tạm giam trước đó chuyển đến…
  - Kiểm sát hồ sơ phát sinh trong quá trình tạm giữ, tạm giam:
  + Quyết định gia hạn tạm giữ có sự phê chuẩn của Viện kiểm sát; quyết định gia hạn tạm giam của Viện kiểm sát; đề nghị gia hạn tạm giam của Cơ quan điều tra; lệnh tạm giam của Viện kiểm sát, lệnh tạm giam của Toà án.
  + Danh chỉ bản.
  + Thông báo hết hạn tạm giữ, tạm giam;
  + Hồ sơ kỷ luật người bị tạm giữ, tạm giam.
  + Đơn xin thăm gặp của thân nhân, của người bị tạm giữ, tạm giam có xác nhận của chính quyền địa phương, cơ quan, nơi cư trú hoặc làm việc và ý kiến đồng ý cho thăm gặp của cơ quan đang thụ lý vụ án…
  + Ngoài những nội dung nêu trên, theo quy định về công tác hồ sơ thì những tài liệu, hồ sơ có liên quan đến quá trình tạm giữ, tạm giam của người bị tạm giữ, tạm giam đều phải được lưu trong hồ sơ cá nhân của người bị tạm giữ, tạm giam.
  - Kiểm sát hồ sơ cho người bị tạm giữ, người bị tạm giam ra khỏi nơi tạm giữ, tạm giam:
  + Quyết định hủy bỏ biện pháp tạm giữ, tạm giam và trả tự do cho người bị tạm giữ, tạm giam của cơ quan có thẩm quyền hoặc quyết định thay đổi biện pháp tạm giam bằng biện pháp ngăn chặn khác;
  + Các tài liệu liên quan đến việc đưa người bị tạm giữ, tạm giam ra khỏi nơi tạm giữ, tạm giam (không nằm trong các trường hợp trả tự do nêu trên) khi: Có lệnh trích xuất; có quyết định điều chuyển; Quyết định thi hành án; Quyết định đưa đi khám chữa bệnh.
  - Căn cứ Điều 20 Quy chế tạm giữ, tạm giam thì việc đưa người bị tạm giữ, tạm giam khỏi nơi giam, giữ chỉ được thực hiện khi có Lệnh trích xuất bằng văn bản của cơ quan có thẩm quyền được quy định trong pháp luật tố tụng hình sự. Trường hợp cần cấp cứu, khám và chữa bệnh ngay cho người bị tạm giữ, tạm giam tại cơ sở y tế ở ngoài Nhà tạm giữ, Trại tạm giam thì Trưởng Nhà tạm giữ, Giám thị Trại tạm giam có quyền ra lệnh trích xuất, sau đó phải thông báo ngay cho cơ quan đang thụ lý vụ án biết. Trưởng Nhà tạm giữ, Giám thị Trại tạm giam phải có sổ theo dõi hàng ngày việc đưa người bị tạm giữ, tạm giam khỏi nơi giam, giữ.
  - Căn cứ Điều 21 Quy chế tạm giữ, tạm giam thì việc trích xuất người bị tạm giam, tạm giữ để tiến hành các hoạt động ở bên ngoài khu vực trại tạm giam, nhà tạm giữ trong các trường hợp sau:
  + Đưa đi khám, chữa bệnh, giám định pháp y; giám định pháp y tâm thần;
  + Chuyển người bị tạm giữ, tạm giam đến nơi giam, giữ khác;
  + Để thực hiện các hoạt động điều tra, truy tố, xét xử;
  + Cho gặp thân nhân, luật sư hoặc người bào chữa khác;
  + Cho người nước ngoài bị tạm giữ, tạm giam tiếp xúc lãnh sự hoặc tiếp xúc với các tổ chức nhân đạo theo quy định tại các Điều ước quốc tế mà Việt Nam ký kết hoặc tham gia, hoặc theo sự thoả thuận trực tiếp của Nhà nước Việt Nam với nước có người bị tạm giữ, tạm giam hoặc vì lý do đối ngoại đối với từng trường hợp cụ thể.
  - Ngoài những trường hợp trích xuất trên, Trưởng Nhà tạm giữ, Giám thị Trại tạm giam có trách nhiệm bàn giao người bị tạm giữ, tạm giam trong các trường hợp dưới đây:
  + Khi có quyết định của cơ quan quản lý trại giam đưa người bị kết án phạt tù đến trại giam;
  + Khi có quyết định của Hội đồng thi hành án tử hình đưa người bị kết án tử hình đi thi hành án tử hình;
  + Khi có quyết định của cơ quan thụ lý vụ án chuyển người bị tạm giữ, tạm giam đến nơi giam, giữ khác;
  + Để tiến hành các hoạt động đưa đi khám, chữa bệnh, giám định pháp y; giám định pháp ý tâm thần;
  + Để thực hiện các hoạt động điều tra, truy tố, xét xử;
  + Cho gặp thân nhân, luật sư hoặc người bào chữa khác;
   
  + Cho người nước ngoài bị tạm giữ, tạm giam tiếp xúc lãnh sự hoặc tiếp xúc với các tổ chức nhân đạo theo quy định tại các Điều ước quốc tế mà Việt Nam ký kết hoặc tham gia, hoặc theo sự thoả thuận trực tiếp của Nhà nước Việt Nam với nước có người bị tạm giữ, tạm giam hoặc vì lý do đối ngoại đối với từng trường hợp cụ thể.` },
            { title: '3.3. Quản lý', content: `- Kiểm sát việc phân loại giam giữ:
  Cần chú ý việc phân loại giam giữ theo các yêu cầu sau:
  + Mỗi Công an cấp huyện, mỗi Bộ chỉ huy quân sự tỉnh, thành phố trực thuộc Trung ương và cấp tương đương được tổ chức một nhà tạm giữ. Nhà tạm giữ có một số buồng tạm giam và phải treo biển "Buồng tạm giam".
  + Đối với nhà tạm giữ thường xuyên có từ 30 người bị tạm giữ, tạm giam trở lên được bố trí thêm buồng để quản lý phạm nhân phục vụ việc nấu ăn, đưa cơm, vận chuyển quà và đồ dùng sinh hoạt, làm vệ sinh, sửa chữa nhà tạm giữ, phục vụ các yêu cầu nghiệp vụ giam, giữ và phải treo biển "Buồng quản lý phạm nhân". Chế độ quản lý, giáo dục và chế độ khác có liên quan đối với phạm nhân được để ở nhà tạm giữ thực hiện theo quy định của pháp luật về thi hành án phạt tù.
  + Đồn biên phòng ở biên giới, hải đảo xa trung tâm hành chính cấp huyện thì được lập Buồng tạm giữ. Buồng tạm giữ ở Đồn biên phòng phải treo biển "Buồng tạm giữ".
  + Bộ Công an, Bộ Quốc phòng, mỗi Công an cấp tỉnh, thành phố trực thuộc trung ương, quân khu, quân đoàn và cấp tương đương trong quân đội nhân dân được tổ chức một hoặc hai trại tạm giam. Trại tạm giam có buồng riêng để giam người có án tử hình và có một số buồng để tạm giữ những người có Lệnh tạm giữ, người đã có quyết định thi hành án phạt tù đang chờ chuyển đi trại giam. Những buồng giam, giữ này phải được treo biển "Buồng tạm giữ", "Buồng giam người có án tử hình", "Buồng giam người chờ chuyển đi trại giam". Buồng tạm giữ để tạm giữ những người có quyết định tạm giữ. Không được đưa người bị tạm giữ vào buồng tạm giam hoặc các buồng giam khác.
  + Việc giam, giữ bố trí theo khu vực và phân loại như sau: Phụ nữ; Người chưa thành niên; Người nước ngoài; Người có bệnh truyền nhiễm nguy hiểm; Loại côn đồ hung hãn, giết người, cướp tài sản, tái phạm nguy hiểm; Người phạm tội xâm phạm an ninh quốc gia; Người bị Toà án tuyên phạt tử hình; Người có án phạt tù chờ chuyển đi trại giam. Đối với người bị tạm giữ, tạm giam đã chuyển giới tính hoặc đồng tính thì phải giam giữ riêng, thực hiện theo Hướng dẫn số 2746/C81-C84 ngày 22/10/2012 của Tổng cục VIII – Bộ Công an hướng dẫn thực hiện việc giam giữ với các đối tượng bị tạm giữ, tạm giam và phạm nhân đã chuyển đổi giới tính hoặc đồng tính gây khó khăn cho việc phân loại giam giữ ở các Nhà tạm giữ, Trại tạm giam và Trại giam.
  + Không được giam, giữ chung buồng những người trong cùng một vụ án đang điều tra, truy tố, xét xử. Việc giam, giữ riêng từng người do cơ quan đang thụ lý vụ án quyết định. Người nước ngoài bị tạm giữ, tạm giam có thể được giam, giữ ở buồng riêng trong Nhà tạm giữ, Trại tạm giam.
  + Mỗi trại tạm giam có một cơ sở chấp hành hình phạt tù (gọi là Phân trại quản lý phạm nhân) để thường xuyên phục vụ việc nấu ăn, đưa cơm, vận chuyển qùa, đồ dùng sinh hoạt, làm vệ sinh, sửa chữa, xây dựng trại tạm giam, nhà tạm giữ và phục vụ các yêu cầu nghiệp vụ giam, giữ. Việc thi hành án phạt tù ở phân trại quản lý phạm nhân phải thực hiện theo Luật thi hành án hình sự và các văn bản hướng dẫn thi hành
  - Kiểm sát việc tổ chức quản lý giam giữ đảm bảo:
  + Nhà tạm giữ, Trại tạm giam phải được bảo vệ nghiêm ngặt. Trưởng Nhà tạm giữ, Giám thị Trại tạm giam bố trí cán bộ chiến sĩ làm nhiệm vụ 24/24 giờ trong ngày để quản lý, tuần tra, canh gác, kiểm tra từng buồng giam, giữ và toàn bộ khu vực giam, giữ, giải quyết kịp thời các việc đột xuất xảy ra. Việc thực hiện hoạt động bảo vệ trại tạm giam, nhà tạm giữ phải đảm bảo theo Thông tư 68/2011/TT-BCA ngày 07/10/2011 của Bộ Công an quy định về hoạt động vũ trang bảo vệ trại giam, trại tạm giam, nhà tạm giữ và dẫn giải phạm nhân
  + Người bị tạm giữ, tạm giam đều phải ở trong buồng giam, giữ. Chỉ khi có lệnh của Trưởng Nhà tạm giữ, Giám thị Trại tạm giam mới được cho họ ra khỏi buồng giam, giữ để thực hiện Lệnh trích xuất hay để thay đổi không khí, tắm giặt, khám, chữa bệnh, làm vệ sinh buồng giam, giữ. Không được sử dụng người bị tạm giữ, tạm giam làm các việc trái quy định của pháp luật.
  + Việc trích xuất bị can, bị cáo được thực hiện theo Công văn số 625/C44-P2 ngày 24/10/2011 của Cơ quan Cảnh sát điều tra Bộ Công an về việc hướng dẫn việc trích xuất bị can, bị cáo.
  Ngoài ra, trong quá trình dẫn giải người bị tạm giữ, tạm giam thực hiện việc trích xuất phải thực hiện đúng theo Quyết định số 810/2006/QĐ-BCA-C11 ngày 4/7/2006 của Bộ trưởng Bộ Công an quy định về quy trình bảo vệ phiên tòa, giải bị cáo, dẫn giải người làm chứng ra Tòa và quy trình thi hành án tử hình và Quyết định số 1502/2008/QĐ-BCA-C11 ngày 10/9/2008 của Bộ trưởng Bộ Công an quy định về quy trình bắt, áp giải bị can, bị cáo, người có quyết định thi hành án phạt tù, dẫn giải người làm chứng của lực lượng cảnh sát bảo vệ và hỗ trợ tư pháp thuộc Công an nhân dân theo yêu cầu của cơ quan tiến hành tố tụng.
  + Đối với người bị kết án tử hình đang chờ thi hành án bị tạm giam tại Trại tạm giam thì việc quản lý, giam giữ người bị kết án tử hình chờ thi hành án đảm bảo thực hiện đúng theo theo Thông tư số 39/2012/TT-BCA ngày 4/7/2012 của Bộ Công an.
   
  + Người bị tạm giữ, tạm giam không được mang những đồ vật cấm vào buồng giam, giữ. Những đồ vật cấm bao gồm: Vật sắc, nhọn, vũ khí các loại, vật cứng, các loại dây (kể cả dây thắt lưng); Các chất ma túy và các chất gây nghiện khác; Rượu, bia, thuốc lá, thuốc lào và các chất kích thích độc hại; Đồ ăn dễ ôi thiu; Tiền và các tài sản có giá trị khác; Các đồ vật khác, nếu xéy thấy ảnh hưởng đến công tác quản lý giam giữ.` },
            { title: '3.4. Kỷ luật', content: `Theo quy định tại khoản 6 Điều 1 Nghị định 98/2002/NĐ-CP ngày 27/11/2002, người bị tạm giữ, tạm giam vi phạm quy chế, nội quy của nhà tạm giữ, trại tạm giam thì tuỳ theo tính chất, mức độ vi phạm sẽ bị xử lý bằng một trong các hình thức kỷ luật sau:
  - Cảnh cáo.
  - Phạt giam riêng ở buồng kỷ luật từ 3 ngày đến 7 ngày và có thể bị gia hạn đến 12 ngày. Người bị phạt giam ở buồng kỷ luật có thể bị cùm một chân. Thời gian bị cùm chân do Trưởng nhà tạm giữ, Giám thị trại tạm giam quyết định, nhưng không quá 10 ngày. Không áp dụng hình thức kỷ luật cùm chân đối với người chưa thành niên, phụ nữ.
   
  Việc thi hành kỷ luật đối với người bị tạm giữ, tạm giam vi phạm quy chế và nội quy nhà tạm giữ, trại tạm giam do Trưởng nhà tạm giữ, Giám thị trại tạm giam quyết định bằng văn bản. Biên bản việc vi phạm và quyết định hình thức kỷ luật được đưa vào hồ sơ của người đó. Trong thời gian chấp hành kỷ luật, nếu người bị kỷ luật có tiến bộ thì Trưởng nhà tạm giữ, Giám thị trại tạm giam xét và quyết định việc giảm thời hạn kỷ luật. Nội quy nhà tạm giữ, trại tạm giam được ban hành theo Quyết định số 862/2001/QĐ-BCA ngày 6/9/2001 của Bộ trưởng Bộ Công an.` },
            { title: '3.5. Chế độ', content: `- Về chế độ ăn:
  + Tiêu chuẩn ăn trong một tháng của một người bị tạm giữ, tạm giam được tính theo định lượng 17 kg gạo thường, 0,7 kg thịt và 0,8 kg cá, 01 kg muối, 0,5 kg đường loại trung bình, 0,75 lít nước mắm, 0,1 kg bột ngọt, 15 kg rau xanh và 15 kg củi hoặc 17 kg than. Định lượng này do Nhà nước cấp và quy ra tiền theo thời giá thị trường ở địa phương nơi trại tạm giam, nhà tạm giữ đóng
  + Ngày lễ, ngày Tết (theo quy định của Nhà nước), người bị tạm giữ, tạm giam được ăn thêm nhưng tiêu chuẩn ăn (bao gồm tiêu chuẩn ăn ngày thường và mức ăn thêm) không quá 5 lần tiêu chuẩn ăn ngày thường mà Nhà nước quy định cho mỗi người bị tạm giữ, tạm giam. Trưởng nhà tạm giữ, Giám thị trại tạm giam có thể hoán đổi định lượng ăn nêu trên cho phù hợp với thực tế để bảo đảm người bị tạm giữ, tạm giam ăn hết tiêu chuẩn.
  + Một tháng không quá 3 lần người bị tạm giữ, tạm giam được nhận quà và đồ dùng sinh hoạt của gia đình, thân nhân gửi đến theo quy định; lượng quà không được vượt quá 3 lần tiêu chuẩn ăn ngày thường mà Nhà nước quy định cho mỗi người bị tạm giữ, tạm giam.
  + Người bị tạm giữ, tạm giam được ăn theo tiêu chuẩn, uống nước bảo đảm vệ sinh, được sử dụng quà của gia đình, thân nhân để ăn thêm nhưng không được quá 3 lần tiêu chuẩn ăn ngày thường mà Nhà nước quy định cho mỗi người bị tạm giữ, tạm giam. Nghiêm cấm người bị tạm giữ, tạm giam dùng rượu, bia, thuốc lá và các chất kích thích độc hại khác.
  - Về chế độ ở:
  Bình quân diện tích tối thiểu nơi giam, giữ đối với người bị tạm giữ, tạm giam là 2m2/1 người, có bệ nằm bằng xi măng hoặc gạch men và có chiếu trải để nằm.
  - Chế độ mặc và cấp phát khác:
  + Trong thời gian bị giam, giữ, người bị tạm giữ, tạm giam được sử dụng quần áo, chăn, chiếu, màn của cá nhân, nếu thiếu thì Nhà tạm giữ, Trại tạm giam cho mượn theo tiêu chuẩn mỗi người gồm: 1 chiếu, 1 màn (loại cá nhân), 1 chăn (đối với các Nhà tạm giữ, Trại tạm giam từ thành phố Đà Nẵng trở vào dùng chăn sợi, từ Huế trở ra dùng chăn trần bông loại 2 kg), 1 đôi dép và 2 bộ quần áo dài theo mẫu thống nhất do Bộ trưởng Bộ Công an, Bộ trưởng Bộ Quốc phòng quy định.
  + Hàng tháng người bị tạm giữ, tạm giam được cấp 0,2 kg xà phòng giặt, 2 tháng được cấp 1 khăn rửa mặt. Người bị tạm giữ, tạm giam là nữ được cấp thêm một số tiền (tương đương 2 kg gạo tính theo thời giá thị trường ở từng địa phương) để mua những đồ dùng cần thiết cho vệ sinh phụ nữ.
  - Về chế độ thăm gặp:
  + Theo quy định tại Điều 22 Quy chế về tạm giữ, tạm giam và Thông tư số 08/2001/TT-BCA ngày 12-11-2001 của Bộ trưởng Bộ Công an thì người bị tạm giữ, tạm giam có thể được gặp thân nhân, luật sư hoặc người bào chữa khác và do cơ quan đang thụ lý vụ án quyết định.
  + Trưởng Nhà tạm giữ, Giám thị Trại tạm giam quyết định thời gian gặp nhưng không quá một giờ mỗi lần gặp. Nhà tạm giữ, Trại tạm giam phải bố trí buồng thăm gặp trong khu vực quản lý của mình để người bị tạm giữ, tạm giam gặp thân nhân trong trường hợp họ được phép. Luật sư hoặc người bào chữa khác được gặp người bị tạm giữ, tạm giam theo quy định của pháp luật tại buồng làm việc của Nhà tạm giữ, Trại tạm giam.
  + Thân nhân là những người có quan hệ ruột thịt gồm: Bố mẹ đẻ, bố mẹ vợ, hoặc bố mẹ chồng, anh chị em ruột, vợ hoặc chồng, con. Trường hợp đặc biệt, để động viên người bị tạm giữ, tạm giam thành khẩn khai báo, hoặc vì lý do chính đáng khác (người bị tạm giữ, tạm giam không còn thân nhân ruột thịt, khi cần giải quyết các yêu cầu công việc có liên quan đến người bị tạm giữ, tạm giam…) thì Thủ trưởng cơ quan đang thụ lý vụ án có thể cho phép những người không phải là thân nhân ruột thịt đến thăm gặp. Người muốn thăm gặp phải có đơn có xác nhận của chính quyền, cơ quan nơi cư trú hoặc làm việc.
  + Người bị tạm giữ, tạm giam và thân nhân, luật sư hoặc người bào chữa khác của người bị tạm giữ, tạm giam phải tuân thủ nội quy gặp gỡ. Trưởng Nhà tạm giữ, Giám thị Trại tạm giam tổ chức phổ biến nội quy gặp gỡ và cử cán bộ, chiến sĩ giám sát, đề phòng người bị tạm giữ, tạm giam bỏ trốn hoặc giao, nhận những vật bị cấm mang ra, mang vào Nhà tạm giữ, Trại tạm giam. Người nước ngoài bị tạm giữ, tạm giam gặp thân nhân, luật sư hoặc người bào chữa khác thực hiện theo quy định này.
  + Việc người nước ngoài bị tạm giữ, tạm giam tiếp xúc lãnh sự hoặc tiếp xúc với tổ chức nhân đạo được thực hiện theo Điều ước quốc tế mà Việt Nam ký kết hoặc tham gia hoặc theo sự thoả thuận trực tiếp về từng trường hợp cụ thể giữa Nhà nước Việt Nam với nước có người bị tạm giữ, tạm giam hoặc với tổ chức nhân đạo. Trong các trường hợp tiếp xúc này cần có cán bộ, chiến sĩ Nhà tạm giữ, Trại tạm giam giám sát và có thể có đại diện của cơ quan Ngoại giao Việt Nam hoặc đại diện Hội Chữ thập đỏ Việt Nam cùng tham dự.
  - Về nhận quà và gửi thư:
  + Một tháng không quá 3 lần người bị tạm giữ, tạm giam được nhận quà và đồ dùng sinh hoạt của gia đình, thân nhân gửi đến theo quy định; lượng quà không được vượt quá 3 lần tiêu chuẩn ăn ngày thường mà Nhà nước quy định cho mỗi người bị tạm giữ, tạm giam.
  + Trưởng nhà tạm giữ, Giám thị trại tạm giam tổ chức tiếp nhận và kiểm tra chặt chẽ quà và đồ dùng sinh hoạt; loại bỏ các vật bị cấm và giao lại đầy đủ cho người bị tạm giữ, tạm giam; kiểm tra, phòng ngừa, ngăn chặn các hành vi chiếm đoạt quà, đồ dùng sinh hoạt của người bị tạm giam, tạm giữ.
  + Bộ trưởng Bộ Công an, Bộ trưởng Bộ Quốc phòng quy định cụ thể quà và đồ dùng sinh hoạt mà thân nhân người bị tạm giữ, tạm giam được phép gửi và quy định việc tổ chức bán các thứ cần thiết trong các trại tạm giam, nhà tạm giữ. Căng tin trong trại tạm giam, nhà tạm giữ thực hiện đúng theo Quyết định số 851/QĐ-C81 ngày 10/4/2012 của Bộ trưởng Bộ Công án quy định việc tổ chức hoạt động căng tin trong trại giam, trại tạm giam, nhà tạm giữ. Việc sử dụng quà và đồ dùng sinh hoạt do thân nhân gửi được quy định cụ thể trong nội quy nhà tạm giữ, trại tạm giam.
  + Người bị tạm giữ, tạm giam chỉ được gửi và nhận thư khi được cơ quan thụ lý vụ án cho phép, thư phải để mở và qua sự kiểm tra của Trưởng nhà tạm giữ, Giám thị trại tạm giam.
  - Chế độ y tế.
  + Người tạm giữ, tạm giam thì người bị tạm giữ, tạm giam ốm đau được khám và điều trị tại bệnh xá của Trại tạm giam hoặc cán bộ y tế của nhà tạm giữ. Chế độ ăn, cấp phát thuốc, bồi dưỡng do cán bộ y tế chỉ định theo bệnh lý. Tiền thuốc chữa bệnh tương đương 2 kg gạo/1 người/1 tháng.
  Trường hợp người bị tạm giữ, tạm giam bị bệnh nặng vượt quá khả năng điều trị của bệnh xá của trại tạm giam hoặc cán bộ y tế của nhà tạm giữ thì Giám thị trại tạm giam, Trưởng nhà tạm giữ làm các thủ tục chuyển họ đến bệnh viện của Nhà nước để điều trị. Kinh phí khám, chữa bệnh trong trường hợp này do ngân sách nhà nước cấp theo bệnh lý và theo mức độ nặng nhẹ của bệnh tật; trại tạm giam, nhà tạm giữ có trách nhiệm thanh toán với bệnh viện.
  + Đối với người bị tạm giữ, tạm giam nghi mắc bệnh tâm thần hoặc bị bệnh khác tới mức mất khả năng nhận thức hoặc mất khả năng điều khiển hành vi của mình, Giám thị trại tạm giam, Trưởng nhà tạm giữ yêu cầu cơ quan đang thụ lý vụ án trưng cầu giám định pháp y. Sau khi Hội đồng giám định pháp y kết luận người đó mắc bệnh tâm thần hoặc bị bệnh khác tới mức mất khả năng nhận thức hoặc điều khiển hành vi của mình và có quyết định đưa người đó vào cơ sở chuyên khoa y tế để bắt buộc chữa bệnh của cơ quan có thẩm quyền, cơ quan đang thụ lý vụ án phối hợp với trại tạm giam, nhà tạm giữ đưa người bị tạm giữ, tạm giam đến cơ sở chữa bệnh được chỉ định trong quyết định.
  + Đối với người bị tạm giữ, tạm giam nhiễm HIV/AIDS, việc chăm sóc và điều trị thực hiện theo quy định hiện hành của pháp luật. Giám thị trại tạm giam, Trưởng nhà tạm giữ phải thông báo những trường hợp bị bệnh nặng cho cơ quan thụ lý vụ án, gia đình, thân nhân hoặc đại diện hợp pháp của người đó biết để phối hợp chăm sóc, điều trị người bị tạm giữ, tạm giam. Việc khám, chữa bệnh cho người bị tạm giữ, tạm giam đảm bảo thực hiện đúng theo Thông tư số 04/2010/TTLT-BCA-BYT ngày 09/8/2010 của Bộ Công an, Bộ y tế hướng dẫn việc khám, chữa bệnh cho người bị tạm giữ, tạm giam, phạm nhân, trại viên cơ sở giáo dục, học sinh trường giáo dưỡng.
  + Trưởng nhà tạm giữ, Giám thị trại tạm giam chịu trách nhiệm tổ chức phòng, chống dịch bệnh, bảo đảm vệ sinh môi trường nơi giam giữ. Khi có dịch bệnh xảy ra phải thông báo ngay cho cơ quan y tế gần nhất để phối hợp dập tắt dịch bệnh.
  - Chế độ giáo dục, học tập
  Trong thời gian tạm giữ, tạm giam, người bị tạm giữ, tạm giam được phổ biến, học tập nội dung, quy chế tạm giữ, tạm giam và các quy định của pháp luật liên quan đến họ.
  Nội dung giáo dục, học tập gồm: nội quy Trại tạm giam, Nhà tạm giữ, Quy chế về tạm giữ, tạm giam; Chính sách khoan hồng, nhân đạo của Đảng và Nhà nước; Các biện pháp phòng, chống ma túy, phòng ngừa lây nhiễm HIV/AIDS và các dịch bệnh nguy hiểm khác; Các quy định về đánh giá nhận xét việc chấp hành nội quy, quy chế, thái độ khai báo và tố giác tội phạm, tố giác những vi phạm nội quy, quy chế giam giữ.
   
  Việc giáo dục người bị tạm giữ, tạm giam được thực hiện theo hướng dẫn số 9191/C81-C84 ngày 21/10/2011 của Tổng cục cảnh sát thi hành án hình sự và hỗ trợ tư pháp Bộ Công an hướng dẫn một số nội dung cơ bản của công tác giáo dục và thực hiện chế độ, chính sách, pháp luật đối với người bị tạm giam, tạm giữ.` },
            { title: '3.6. Quyền khiếu nại', content: `- Người bị tạm giữ, tạm giam có quyền khiếu nại, tố cáo việc tạm giữ, tạm giam trái pháp luật hoặc các hành vi trái với Quy chế về tạm giữ, tạm giam.
  - Việc khiếu nại, tố cáo có thể bằng đơn, thư hoặc bằng miệng với cán bộ Quản giáo, Trưởng hay Phó trưởng Nhà tạm giữ, Giám thị hay Phó giám thị Trại tạm giam hoặc với người tiến hành tố tụng giải quyết vụ án đó hoặc với cấp trên của Trưởng Nhà tạm giữ, Giám thị Trại tạm giam.
  - Cán bộ tiếp nhận lời khiếu nại, tố cáo miệng phải lập thành văn bản. Trường hợp người bị tạm giữ, tạm giam muốn khiếu nại, tố cáo bằng đơn, thư thì Trưởng hay Phó trưởng Nhà tạm giữ, Giám thị hay Phó giám thị Trại tạm giam hoặc người tiến hành tố tụng giải quyết vụ án đó phải bố trí địa điểm, giấy bút để người bị tạm giữ, tạm giam viết.
  - Người bị tạm giữ, tạm giam còn có quyền khiếu nại, tố cáo với Viện Kiểm sát. Đơn, thư khiếu nại, tố cáo gửi cơ quan cấp trên trực tiếp của Nhà tạm giữ, Trại tạm giam hoặc người tiến hành tố tụng hoặc Viện Kiểm sát phải được chuyển giao trong vòng 24 giờ.
  - Người bị tạm giữ, tạm giam phải chịu trách nhiệm trước pháp luật về nội dung khiếu nại, tố cáo; nếu lợi dụng quyền khiếu nại, tố cáo để vu khống sẽ bị xử lý theo quy định của pháp luật.
   
  - Khi nhận được đơn, thư hoặc lời khiếu nại, tố cáo của người bị tạm giữ, tạm giam thì cá nhân hoặc cơ quan có trách nhiệm giải quyết phải tiến hành xác minh làm rõ sự việc và trả lời cho người khiếu nại, tố cáo chậm nhất là 10 ngày kể từ ngày nhận được đơn, thư hoặc lời khiếu nại, tố cáo đó.` },
            { title: '3.7. Bảo vệ sức khỏe', content: `- Khi phát hiện có dấu hiệu của các tội phạm xâm phạm tính mạng, sức khỏe, tài sản, danh dự, nhân phẩm của người bị tạm giữ, tạm giam thì Kiểm sát viên phải thu thập tài liệu, chứng cứ, lấy lời khai, để có biện pháp xử lý đúng quy định của pháp luật.
  - Trường hợp người bị tạm giữ, tạm giam chết tại Nhà tạm giữ, Trại tạm giam thì Trưởng Nhà tạm giữ, Giám thị Trại tạm giam phải tổ chức bảo vệ hiện trường, thông báo ngay cho Cơ quan điều tra và Viện Kiểm sát biết để tiến hành xác định nguyên nhân chết. Trưởng Nhà tạm giữ, Giám thị Trại tạm giam phải chứng kiến việc khám nghiệm hiện trường, khám nghiệm tử thi và thông báo cho thân nhân người chết biết. Trường hợp người chết là người nước ngoài thì việc thông báo cho cơ quan lãnh sự và thân nhân của họ do cơ quan đang thụ lý vụ án thực hiện.` }
          ] 
        },
        { title: '4. HỆ THỐNG BIỂU MẪU', subsections: [] },
      ],
    },
    {
      part: 'Phần Thứ Năm',
      title: 'KIỂM SÁT THI HÀNH ÁN HÌNH SỰ',
      sections: [
        { 
          title: '1. NHIỆM VỤ, QUYỀN HẠN', 
          subsections: [
            { title: '1.1. Đối tượng', content: `- Khoản 1 Điều 25 của Luật Tổ chức VKSND năm 2014 quy định: "VKSND kiểm sát việc tuân theo pháp luật của Tòa án, cơ quan thi hành án hình sự, cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự, người có thẩm quyền, cơ quan, tổ chức, cá nhân có liên quan trong việc thi hành án hình sự”
  - Điều 2 Quy chế công tác kiểm sát việc tạm giữ, tạm giam (được ban hành kèm theo Quyết định số 35/QĐ-VKSTC-V4 ngày 29/1/2013 của Viện trưởng Viện kiểm sát nhân dân tối cao) quy định “Đối tượng của công tác kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự là việc tuân theo pháp luật của Tòa án, nhà tạm giữ, trại tạm giam; cơ quan quản lý thi hành án hình sự; cơ quan thi hành án hình sự; cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự và người có trách nhiệm trong việc tạm giữ, tạm giam và thi hành án hình sự theo quy định của pháp luật”.
  Theo quy định trên, đối tượng kiểm sát của hoạt động kiểm sát thi hành án hình sự là việc tuân theo pháp luật của các chủ thể sau:
  + Tòa án nhân dân: Đây là một chủ thể quan trọng trong hoạt động thi hành án hình sự, nhiệm vụ, quyền hạn của Tòa án nhân dân trong thi hành án hình sự được quy định tại Điều 20 Luật thi hành án hình sự năm 2010, theo đó, Tòa án có nhiệm vụ, quyền hạn: ra Quyết định thi hành án, quyết định thành lập Hội đồng thi hành án tử hình, quyết định hoãn, tạm đình chỉ, đình chỉ chấp hành án phạt tù; miễn, giảm thời hạn chấp hành án; kéo dài thời hạn trục xuất; rút ngắn thời gian thử thách đối với người được hưởng án treo; xem xét, giải quyết việc cho nhận tử thi của người chấp hành án tử hình; Gửi bản án, quyết định được thi hành và quyết định, tài liệu có liên quan cho cơ quan, tổ chức, cá nhân theo quy định…  
  + Cơ quan quản lý thi hành án hình sự: Theo khoản 1 Điều 10 Luật Thi hành án hình sự năm 2010 thì Cơ quan quản lý thi hành án hình sự gồm Cơ quan quản lý thi hành án hình sự Bộ Công an và Cơ quan quản lý thi hành án hình sự Bộ Quốc phòng; nhiệm vụ, quyền hạn của các cơ quan này được quy định tại Điều 11, 12 Luật thi hành án hình sự năm 2010.
  + Cơ quan thi hành án hình sự: theo khoản 2 Điều 10 Luật thi hành án hình sự năm 2010 thì cơ quan thi hành án hình sự bao gồm: Trại giam (gồm trại giam thuộc Bộ Công an, trại giam thuộc Bộ Quốc phòng, trại giam thuộc quân khu); cơ quan thi hành án hình sự Công an cấp tỉnh; cơ quan thi hành án hình sự Công an cấp huyện; cơ quan thi hành án hình sự cấp quân khu.
  + Cơ quan được giao một số nhiệm vụ thi hành án hình sự: Trại tạm giam (gồm trại tạm giam thuộc Bộ Công an, trại tạm giam thuộc Bộ Quốc phòng, trại tạm giam thuộc Công an cấp tỉnh, trại tạm giam cấp quân khu) Ủy ban nhân dân cấp xã; Đơn vị quân đội.
   
  + Người có trách nhiệm trong hoạt động thi hành án hình sự: như Chánh án Tòa án đã xét xử sơ thẩm, Chánh án Tòa án nơi bị án đang chấp hành án, Giám thị trại giam….` },
            { title: '1.2. Phạm vi', content: `- Điều 3 Quy chế công tác kiểm sát việc tạm giữ, tạm giam (được ban hành kèm theo Quyết định số 35/QĐ-VKSTC-V4 ngày 29/1/2013 của Viện trưởng Viện kiểm sát nhân dân tối cao) quy định: “Công tác kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự thực hiện từ khi có người bị tạm giữ, tạm giam, bản án, quyết định được thi hành theo quy định tại Điều 2 Luật thi hành án hình sự (chưa có quyết định thi hành án); kết thúc khi chấm dứt việc tạm giữ, tạm giam và việc thi hành án hình sự theo quy định của pháp luật”.
   
  Như vậy, phạm vi hoạt động kiểm sát thi hành án hình sự thực hiện từ khi bản án, quyết định được thi hành theo quy định tại Điều 2 Luật thi hành án hình sự (chưa có quyết định thi hành án) và kết thúc khi chấm dứt việc thi hành án hình sự theo quy định của pháp luật.` },
            { title: '1.3. Nhiệm vụ', content: `- Căn cứ khoản 2 Điều 25 Luật tổ chức Viện kiểm sát nhân dân năm 2014 và Điều 141, 142 Luật thi hành án hình sự năm 2010 quy định về nhiệm vụ, quyền hạn của Viện kiểm sát trong kiểm sát việc thi hành án hình sự bao gồm:
  + Yêu cầu Toà án ra quyết định thi hành án hình sự; yêu cầu Tòa án, cơ quan thi hành án hình sự, cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự tự kiểm tra việc thi hành án hình sự và thông báo kết quả cho Viện kiểm sát nhân dân; cung cấp hồ sơ, tài liệu có liên quan đến việc thi hành án hình sự.
  + Trực tiếp kiểm sát việc thi hành án hình sự; kiểm sát hồ sơ thi hành án hình sự. Viện kiểm sát nhân dân tỉnh, thành phố trực thuộc trung ương trực tiếp kiểm sát việc thi hành án phạt tù của trại giam đóng tại địa phương;
  + Quyết định trả tự do ngay cho người đang chấp hành án phạt tù không có căn cứ và trái pháp luật;
  + Đề nghị miễn, hoãn, tạm đình chỉ, đình chỉ chấp hành án; tham gia việc xét giảm, miễn thời hạn chấp hành án, chấp hành biện pháp tư pháp, rút ngắn thời gian thử thách;
  + Kháng nghị hành vi, quyết định có vi phạm pháp luật của cơ quan, người có thẩm quyền trong việc thi hành án hình sự;
  + Kiến nghị, yêu cầu cơ quan, tổ chức, cá nhân chấm dứt, khắc phục vi phạm pháp luật trong thi hành án hình sự; xử lý nghiêm minh người vi phạm;
  + Khởi tố hoặc yêu cầu Cơ quan điều tra khởi tố vụ án hình sự khi phát hiện vụ việc có dấu hiệu tội phạm trong thi hành án hình sự theo quy định của pháp luật;
   
  + Thực hiện nhiệm vụ, quyền hạn khác trong kiểm sát thi hành án hình sự theo quy định của pháp luật về thi hành án hình sự.` }
          ] 
        },
        { 
          title: '2. CÁC LOẠI ÁN', 
          subsections: [
            { title: '2.1. Án tử hình', content: `2.3.1. Kiểm sát quyết định thi hành án tử hình
  Viện kiểm sát kiểm sát việc ra quyết định thi hành án tử hình nhằm đảm bảo thủ tục ra quyết định và việc gửi quyết định thi hành án tử hình được thực hiện theo đúng quy định tại Điều 54 Luật Thi hành án hình sự.
  2.3.2. Kiểm sát thủ tục xem xét bản án tử hình trước khi đưa ra thi hành
  Viện kiểm sát phải kiểm sát việc thực hiện các thủ tục xem xét bản án tử hình trước khi bản án được đưa ra thi hành theo quy định tại Điều 258 BLTTHS và hướng dẫn tại Mục II Nghị quyết số 02/2007/NQ-HĐTP ngày 02 tháng 10 năm 2007 của Hội đồng thẩm phán toà án nhân dân tối cao Hướng dẫn thi hành một số quy định trong Phần thứ năm “Thi hành bản án và quyết định của Toà án” của BLTTHS
  2.3.3. Kiểm sát việc quyết định thành lập Hội đồng thi hành án tử hình
  Viện kiểm sát phải kiểm sát việc Chánh án Toà án ra văn bản yêu cầu thành lập Hội đồng thi hành án tử hình theo đúng quy định tại Điều 55 Luật Thi hành án hình sự.
  2.3.4. Kiểm sát việc tuân theo pháp luật của Hội đồng thi hành án tử hình và việc quản lý Hồ sơ thi hành án tử hình của Cơ quan thi hành án hình sự Công an cấp tỉnh, cơ quan thi hành án hình sự cấp quân khu
  Viện kiểm sát phải kiểm sát việc tuân theo pháp luật của Hội đồng thi hành án tử hình theo quy định tại Điều 56 Luật Thi hành án hình sự
  2.3.5. Kiểm sát việc thực hiện chế độ quản lý giam, giữ
  Viện kiểm sát phải kiểm sát việc thực hiện chế độ quản lý giam giữ, ăn, mặc, ở, sinh hoạt, gửi và nhận thư, nhận đồ vật, tiền mặt, gặp thân nhân, chăm sóc y tế… đối với phạm nhân nhằm đảm bảo các chế độ trên được thực hiện đầy đủ. Theo quy định tại Điều 57 Luật Thi hành án hình sự, chế độ quản lý giam giữ, ăn, ở, mặc, sinh hoạt, gửi và nhận thư, nhận đồ vật, tiền mặt, gặp thân nhân, chăm sóc y tế đối với người bị kết án tử hình trong thời gian chờ thi hành án thực hiện theo quy định của pháp luật về tạm giam.
  2.3.6. Kiểm sát việc hoãn thi hành án tử hình
  Viện kiểm sát phải kiểm sát tính có căn cứ của việc ra quyết định hoãn thi hành án tử hình của Hội đồng thi hành án tử hình, bảo đảm việc hoãn thi hành án tử hình tuân thủ đúng quy định của pháp luật. Các trường hợp hoãn thi hành án tử hình phải tuân theo quy định tại Điều 58 Luật Thi hành án hình sự và theo quy định tại Điều 259 BLTTHS.
  2.3.7. Kiểm sát trình tự thi hành án tử hình
  Viện kiểm sát phải kiểm sát việc thi hành án tử hình theo đúng các quy định tại Điều 59 Luật Thi hành án hình sự và Điều 8 Nghị định số 82/2011/NĐ-CP ngày 6/9/2011 Quy định về thi hành án tử hình bằng hình thức tiêm thuốc độc
  2.3.8. Kiểm sát việc giải quyết việc xin nhận tử thi, hài cốt của người bị thi hành án tử hình
  Viện kiểm sát kiểm sát việc giải quyết việc xin nhận tử thi, hài cốt của người bị thi hành án tử hình theo quy định tại Điều 60 Luật Thi hành án hình sự,
  * Khi kiểm sát việc thi hành án tử hình, Kiểm sát viên cần lưu ý: 
   Kiểm sát viên phải yêu cầu Hội đồng thi hành án hoãn ngay việc thi hành án và báo cáo lãnh đạo Viện kiểm sát khi có một trong các tình tiết đặc biệt sau đây:
  + Người bị kết án kêu oan mà xét thấy có căn cứ cần xem xét lại. Trong trường hợp bị án kêu oan, Kiểm sát viên cần phải trực tiếp nghe bị án trình bày, yêu cầu bị án đưa ra căn cứ.
  + Người bị kết án tố cáo một tội phạm nghiêm trọng khác mà xét thấy cần phải có thời gian để họ giúp cho việc điều tra. Trong mọi trường hợp, khi bị án tố cáo một tội phạm nghiêm trọng khác, thì Kiểm sát viên phải trực tiếp xem xét, nếu xét thấy có căn cứ thì yêu cầu Hội đồng thi hành án hoãn thi hành án để làm rõ lời tố cáo của bị án.
  + Người bị kết án tự thú về tội phạm khác mà cần phải có thời gian để họ cung cấp thông tin phục vụ cho việc điều tra. Trong trường hợp bị án tự thú về tội phạm nghiêm trọng khác, thì Kiểm sát viên cần xác định bước đầu về tính chân thật của lời tự thú, yêu cầu bị án trình bày cụ thể, chi tiết về hành vi phạm tội mà bị án đã thực hiện.
  + Trong trường hợp phát hiện có điều kiện để không thi hành hình phạt tử hình (như có cơ sở nghi ngờ bị án có thể là phụ nữ có thai hoặc đang nuôi con dưới 36 tháng tuổi) hoặc từ những nguồn tin khác nhau thấy có căn cứ có thể làm thay đổi cơ bản nội dung vụ án hoặc để khởi tố vụ án mới, người phạm tội mới... và xét thấy nếu thi hành hình phạt tử hình đối với người bị kết án thì có thể gây khó khăn lớn cho việc giải quyết vụ án, việc mở rộng điều tra vụ án thì Kiểm sát viên phải yêu cầu Hội đồng thi hành án hoãn thi hành án tử hình để tiến hành điều tra, xác minh làm rõ.
   
  Mọi trường hợp hoãn thi hành án tử hình, Kiểm sát viên phải yêu cầu Hội đồng thi hành án lập biên bản. Kiểm sát viên phải báo cáo kết quả thi hành án với lãnh đạo Viện kiểm sát để có biện pháp xử lý.` },
            { title: '2.2. Án treo', content: `2.3.1. Kiểm sát việcthi hành án treo
  Khi kiểm sát việc thi hành án treo, Kiểm sát viên tiến hành kiểm sát các hoạt động sau:
  - Kiểm sát việc ra quyết định thi hành án và gửi quyết định thi hành án
  - Kiểm sát việc thi hành án treo
  - Kiểm sát việc thực hiện nhiệm vụ, quyền hạn của Ủy ban nhân dân cấp xã, đơn vị quân đội trong việc giám sát, giáo dục người được hưởng án treo.
  - Kiểm sát việc lao động, học tập của người được hưởng án treo
  - Kiểm sát việc chấp hành pháp luật của các cơ quan có liên quan trong việc xét rút ngắn thời gian thử thách đối với người được hưởng án treo (đảm bảo theo quy định tại Điều 4 Thông tư liên tịch số 08/2012/TTLT-BCA-BQP-TANDTC-VKSNDTC, - Kiểm sát thủ tục xét rút ngắn thời gian thử thách
  - Kiểm sát việc bổ sung hồ sơ thi hành án treo của Ủy ban nhân dân cấp xã, đơn vị quân đội, được giao giám sát, giáo dục người được hưởng án treo.
  - Kiểm sát việc giải quyết trường hợp người được hưởng án treo thay đổi nơi cư trú hoặc nơi làm việc
  Để kiểm sát, Viện kiểm sát phải có sổ theo dõi việc thi án treo và bằng các phương thức kiểm sát phù hợp. Có thể trực tiếp kiểm sát tại cơ quan, địa phương nơi có người bị kết án đang chấp hành bản án để nắm bắt hoạt động thi hành án tại đây. Việc trực tiếp kiểm sát có thể tiến hành theo định kỳ thời gian. Nếu phát hiện có vi phạm pháp luật như: Chính quyền địa phương không cử người giám sát, theo dõi, giáo dục người bị kết án, không có những hoạt động quản lý người bị kết án, v.v… thì Viện kiểm sát phải kháng nghị hoặc kiến nghị yêu cầu khắc phục, chấn chỉnh các vi phạm.
  - Ngoài việc sử dụng quyền trực tiếp kiểm sát, các Viện kiểm sát có thể định kỳ theo thời gian sử dụng quyền yêu cầu cơ quan chính quyền địa phương nơi có người thi hành án tự kiểm tra và báo cáo kết quả kiểm tra cho Viện kiểm sát biết. Sau khi có báo cáo kết quả kiểm tra, Viện kiểm sát đánh giá và xử lý các thông tin để phát hiện vi phạm pháp luật và có biện pháp khắc phục.
  2.3.2. Kiểm sát thi hành án phạt cảnh cáo
  Hình phạt cảnh cáo được thi hành ngay tại phiên tòa. Chính vì vậy khi kiểm sát việc thi hành án phạt cảnh cáo, Kiểm sát viên chỉ kiểm sát việc Tòa án đã xét xử sơ thẩm gửi bản án cho người bị phạt cảnh cáo, cơ quan thi hành án hình sự Công an cấp huyện, cơ quan thi hành án hình sự cấp quân khu, Ủy ban nhân dân cấp xã, đơn vị quân đội nơi người bị phạt cảnh cáo cư trú hoặc làm việc, Sở Tư pháp nơi Tòa án đã xét xử sơ thẩm có trụ sở theo quy định tại Điều 71 Luật THAHS.
  2.3.3. Kiểm sát thi hành án cải tạo không giam giữ
  Khi kiểm sát việc thi hành án phạt cải tạo không giam giữ, Kiểm sát viên tiến hành kiểm sát các hoạt động sau:
  - Kiểm sát quyết định thi hành án phạt cải tạo không giam giữ;
  - Kiểm sát thủ tục thi hành quyết định thi hành án phạt cải tạo không giam giữ;
  - Kiểm sát việc giám sát, giáo dục người chấp hành án của Ủy ban nhân dân cấp xã, đơn vị quân đội được giao; Việc lao động, học tập của người chấp hành án;
  - Kiểm sát thủ tục giảm thời hạn chấp hành án phạt cải tạo không giam giữ theo quy định tại Điều 77 Luật THAHS và Điều 6 Thông tư liên tịch số 09/2012/TTLT-BCA-BQP-TANDTC-VKSNDTC hướng dẫn việc giảm, miễn thời hạn chấp hành án phạt cải tạo không giam giữ và miễn chấp hành thời hạn cấm cư trú còn lại
  - Kiểm sát mức giảm thời hạn chấp hành án phạt cải tạo không giam giữ: Theo quy định tại Điều 7 Thông tư liên tịch số 09/2012/TTLT-BCA-BQP-TANDTC-VKSNDTC, người chấp hành án phạt cải tạo không giam giữ mỗi năm được xét giảm thời hạn chấp hành án một lần, mỗi lần có thể được giảm từ ba tháng đến chín tháng.
  - Kiểm sát thủ tục xét giảm
  - Kiểm sát thủ tục miễn chấp hành án phạt cải tạo không giam giữ
   
  Để kiểm sát thi hành phạt cải tạo không giam giữ, Viện kiểm sát phải có sổ theo dõi việc thi án treo và có thể áp dụng các phương thức kiểm sát việc thi hành án treo để thực hiện.` },
            { title: '2.3. Cấm cư trú', content: `2.4.1. Kiểm sát thi hành án phạt cấm cư trú
  Khi kiểm sát việc thi hành án phạt cấm cư trú, Kiểm sát viên phải bảo đảm các chủ thể liên quan đến việc thực hiện án phạt cấm đi khỏi nơi cư trú thực hiện đúng các quy định tại các điều từ 82 đến 88 Luật thi hành án hình sự; Cụ thể:
  - Kiểm sát thủ tục thi hành án phạt cấm cư trú:
  - Kiểm sát việc thực hiện nhiệm vụ, quyền hạn của Ủy ban nhân dân cấp xã nơi người chấp hành án về cư trú:
  - Kiểm sát việc thực hiện nghĩa vụ của người chấp hành án phạt cấm cư trú:
  - Kiểm sát thủ tục miễn chấp hành thời hạn cấm cư trú còn lại:
  - Kiểm sát việc cấp giấy chứng nhận đã chấp hành xong án phạt cấm cư trú:  
  Kiểm sát viên cần chú ý kiểm sát: Thủ tục thi hành án phạt cấm cư trú; Thủ tục miễn chấp hành thời hạn cấm cư trú còn lại; Trách nhiệm của Ủy ban nhân dân cấp xã nơi người chấp hành án cư trú và Ủy ban nhân dân cấp xã không được đến cư trú trong việc thi hành án phạt cấm đi khỏi nơi cư trú theo quy định tại các điều 82, 83, 86, 88 Luật thi hành án hình sự
  2.4.2. Kiểm sát thi hành án phạt quản chế
  Khi kiểm sát việc thi hành án phạt quản chế, Kiểm sát viên phải bảo đảm các chủ thể liên quan đến việc thực hiện án phạt quản chế thực hiện đúng các quy định tại các điều từ 89 đến 95 Luật thi hành án hình sự; Cụ thể kiểm sát các nội dung:
  - Kiểm sát thủ tục thi hành án phạt quản chế:
  - Kiểm sát việc thực hiện nhiệm vụ, quyền hạn của Ủy ban nhân dân cấp xã nơi người chấp hành án phạt quản chế về cư trú:
  - Kiểm sát việc thực hiện nghĩa vụ của người chấp hành án phạt quản chế:
  - Kiểm sát việc giải quyết trường hợp người chấp hành án phạt quản chế đi khỏi nơi quản chế:
  - Kiểm sát thủ tục cấp giấy chứng nhận đã chấp hành xong án phạt quản chế.
  - Kiểm sát thủ tục miễn chấp hành thời hạn quản chế còn lại:
  Kiểm sát viên cần chú ý kiểm sát: Thủ tục thi hành án phạt quản chế; việc giải quyết trường hợp người chấp hành án phạt quản chế đi khỏi nơi quản chế; Thủ tục miễn chấp hành thời hạn quản chế còn lại; trách nhiệm của Ủy ban nhân dân cấp xã nơi người chấp hành án phạt quản chế về cư trú và việc bảo đảm quyền của người bị quản chế theo quy định của pháp luật.` },
            { title: '2.4. Trục xuất', content: `Khi kiểm sát việc thi hành án phạt trục xuất, Kiểm sát viên phải bảo đảm các chủ thể liên quan đến việc thực hiện án phạt quản chế thực hiện đúng các quy định tại các điều từ 96 đến 102 Luật thi hành án hình sự; Theo đó, kiểm sát các nội dung:
  - Kiểm sát quyết định thi hành án phạt trục xuất
  - Kiểm sát việc thông báo thi hành án phạt trục xuất theo qui định tại Điều 97 Luật THAHS.
  - Kiểm sát hồ sơ thi hành án phạt trục xuất, đảm bảo hồ sơ phải được lập đúng thời hạn, phải có đủ giấy tờ, tài liệu theo quy định tại khoản 2 Điều 98 Luật THAHS và Điều 7 Thông tư liên tịch 07/2011.
  - Kiểm sát quyết định chỉ định nơi cư trú
  - Kiểm sát các trường hợp người phải chấp hành án phạt trục xuất bỏ trốn (Điều 100 Luật THAHS, Điều 10 Thông tư liên tịch 07/2011); trường hợp người phải chấp hành án phạt trục xuất bị bệnh hoặc chết (Điều 11 Thông tư liên tịch 07/2011), giải quyết cho nhận tử thi, hài cốt, tro cốt người bị trục xuất (Điều 12 Thông tư liên tịch 07/2011) và việc tiến hành buộc rời khỏi lãnh thổ Việt Nam (Điều 101 Luật THAHS, Điều 14 Thông tư liên tịch 07/2011).
   
  Việc thi hành hình phạt trục xuất, trên thực tế không nhiều, Viện kiểm sát phải chủ động nắm được những trường hợp phải thi hành quyết định trục xuất, phối hợp với cơ quan có trách nhiệm thi hành án để giám sát việc thi hành án hoặc yêu cầu cơ quan này cung cấp các tài liệu, văn bản có liên quan để kiểm sát. Sau khi việc thi hành hình phạt trục xuất hoàn thành, Kiểm sát viên phải ghi vào sổ theo dõi, đồng thời xây dựng hồ sơ kiểm sát về trường hợp đó để lưu trữ.` },
            { title: '2.5. Chữa bệnh bắt buộc', content: `- Điều 311 BLTTHS quy định điều kiện và thẩm quyền áp dụng biện pháp bắt buộc chữa bệnh. Chương X luật thi hành án hình sự quy định về thi hành biện pháp tư pháp trong đó có thi hành biện pháp bắt buộc chữa bệnh. Khi kiểm sát việc áp dụng biện pháp bắt buộc chữa bệnh, Kiểm sát viên phải kiểm sát những vấn đề sau:
  - Thẩm quyền đề nghị áp dụng biện pháp tư pháp bắt buộc chữa bệnh, hồ sơ đưa người vào cơ sở bắt buộc chữa bệnh
   - Kiểm sát các hoạt động của cơ quan có trách nhiệm trong việc  đưa người vào cơ sở bắt buộc chữa bệnh:
  - Kiểm sát việc tổ chức điều trị cho người bị bắt buộc chữa bệnh:
  - Kiểm sát việc đình chỉ thi hành biện pháp bắt buộc chữa bệnh:
   
  - Kiểm sát việc giải quyết trường hợp người bị bắt buộc chữa bệnh chết` },
            { title: '2.6. Xóa án tích', content: `- Để kiểm sát việc xóa án tích một cách chủ động, Viện kiểm sát phải mở sổ theo dõi những người đã chấp hành xong bản án hoặc quyết định của Tòa án để có thể chủ động yêu cầu Tòa án cấp giấy chứng nhận xóa án tích cho họ.
  - Trong trường hợp nhận được đơn của người đã chấp hành xong bản án của Tòa án xin xóa án tích, Viện kiểm sát cần nghiên cứu kỹ hồ sơ thi hành án của họ để đối chiếu với quy định của pháp luật xem họ đã có đủ điều kiện xóa án tích hay chưa. Nếu thấy họ đã có đủ điều kiện xóa án tích thì đề nghị Tòa án cấp giấy chứng nhận xóa án tích cho họ.
  - Xóa án tích được quy định từ Điều 64 đến Điều 67 BLHS gồm: Đương nhiên xóa án tích, quy định tại Điều 64 BLHS; Xóa án tích theo quyết định của Tòa án, quy định tại Điều 65 BLHS; Xóa án tích trong trường hợp đặc biệt, quy định tại Điều 66 BLHS; Cách tính thời hạn để xóa án tích, quy định tại Điều 67 BLHS. Chương XXIX BLTTHS quy định về thẩm quyền của Toà án và thủ tục hồ sơ để cấp giấy chứng nhận hoặc quyết định xoá án tích. Điều 270 quy định về đương nhiên xoá án tích, Điều 271 quy định về xoá án tích do Toà án quyết định.` }
          ] 
        },
        { 
          title: '3. BIỂU MẪU & PHƯƠNG THỨC', 
          subsections: [
            { title: '1.4. Phương thức', content: `Căn cứ Điều 25, 26 Luật tổ chức VKSND năm 2014; Điều 141, 142 Luật thi hành án hình sự năm 2010 và Chương IV Quy chế kiếm sát việc tạm giữ, tạm giam và thi hành án hình sự thì phương thức thực hiện hoạt động kiểm sát thi hành án hình sự được thông qua 02 phương thức sau:
  - Kiểm sát trực tiếp: bao gồm định kỳ kiểm sát và đột xuất kiểm sát
  Định kỳ kiểm sát
  + Đối với trại tạm giam thuộc Công an cấp tỉnh, trại tạm giam cấp quân khu: Hàng tuần kiểm sát về thủ tục trong việc tạm giữ, tạm giam theo quy định của Bộ luật tố tụng hình sự, ba tháng một lần trực tiếp kiểm sát theo từng nội dung, sáu tháng một lần kiểm sát toàn diện về tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  Đối với trại tạm giam thuộc Bộ Công an, trại tạm giam thuộc Bộ Quốc phòng: Hàng tháng kiểm sát về thủ tục trong việc tạm giữ, tạm giam theo quy định của Bộ luật tố tụng hình sự; một năm trực tiếp kiểm sát toàn diện hai lần về việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  + Đối với trại giam thuộc Bộ Công an, trại giam thuộc Bộ Quốc phòng một năm hai lần trực tiếp kiểm sát toàn diện việc tuân theo pháp luật trong quản lý và giáo dục người chấp hành án phạt tù.
  + Đối với cơ quan thi hành án hình sự Công an cấp tỉnh, cấp huyện, cơ quan thi hành án hình sự cấp quân khu và ủy ban nhân dân cấp xã một năm trực tiếp kiểm sát một lần.
  + Đối với cơ quan được giao một số nhiệm vụ thi hành án hình sự (Ủy ban nhân dân; đơn vị quân đội), cơ quan, tổ chức được giao nhiệm vụ thi hành biện pháp tư pháp chỉ tiến hành trực tiếp kiểm sát khi xét thấy cần thiết.
  Khi tiến hành kiểm sát định kỳ có thể đi sâu kiểm sát toàn bộ việc chấp hành pháp luật trong quản lý và giáo dục người chấp hành án, chế độ trong việc quản lý và giáo dục người chấp hành án phạt tù… hoặc cũng có thể kiểm sát những vấn đề nào thấy cần thiết hoặc kiểm sát những vi phạm đã được phát hiện của lần kiểm sát trước mà VKS đã kháng nghị yêu cầu sửa chữa, xem kết quả tiếp thu khắc phục vi phạm của Cơ quan thi hành án hình sự; cơ quan được giao một số nhiệm vụ trong thi hành án hình sự. Đồng thời, kiểm sát viên có thể gặp, hỏi, trường hợp cần thiết thì lập biên bản, lấy lời khai của người chấp hành án và người thi hành biện pháp tư pháp về việc thực hiện các quy định của pháp luật trong thi hành án hình sự và thi hành biện pháp tư pháp.
  Đột xuất kiểm sát
  Khi xét thấy cần thiết, Viện kiểm sát trực tiếp kiểm sát tại cơ quan thi hành án hình sự cùng cấp và cấp dưới; cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự.
  + Điều kiện để áp dụng phương thức này là: Khi có dấu hiệu vi phạm pháp luật xảy ra ở cơ quan thi hành án hình sự cùng cấp và cấp dưới, cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự xét thấy cần phải kiểm sát thì phải tiến hành thể kiểm sát ngay bất kỳ thời gian nào, không kể là ngày hay đêm, miễn là khi kiểm sát viên nhận được nguồn thông tin đáng tin cậy, có cơ sở để xác định là có dấu hiệu vi phạm pháp luật nghiêm trọng ở nơi giam giữ như. Người chấp hành án phạt tù trốn, phạm tội mới, chết do tai nạn lao động hoặc dịch bệnh, chết bất thường không rõ nguyên nhân, tự tử chết...
  Trực tiếp kiểm sát định kỳ, đột xuất phải có quyết định trực tiếp kiểm sát, khi kết thúc có kết luận bằng văn bản. Trước khi tiến hành trực tiếp kiểm sát định kỳ, Viện kiểm sát có kế hoạch trực tiếp kiểm sát; nội dung kế hoạch, quyết định, kết luận trực tiếp kiểm sát thực hiện theo hướng dẫn của Viện kiểm sát nhân dân tối cao.
  Trực tiếp kiểm sát định kỳ và đột xuất do Viện trưởng, Phó Viện trưởng hoặc Kiểm sát viên được uỷ quyền tiến hành.
  - Kiểm sát gián tiếp
  Đây là phương thức được áp dựng theo quy định tại khoản 2 Điều 25, khoản 2 Điều 26 Luật Tổ chức VKSND năm 2014 và Điều 26 Quy chế kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự.
  + Tuỳ theo tình hình, căn cứ vào tính chất, mức độ của vi phạm của Tòa án, cơ quan thi hành án hình sự, cơ quan được giao một số nhiệm vụ trong thi hành án hình sự hoặc do yêu cầu thông tin mà có thể yêu cầu Tòa án, Cơ quan thi hành án hình sự, Cơ quan được giao một số nhiệm vụ thi hành án hình sự kiểm tra những nơi đó và thông báo kết quả theo quy định.
  + Yêu cầu tự kiểm tra thường được áp dụng khi phát hiện có dấu hiện vi phạm pháp luật hoặc đã có vi phạm xảy ra ở nơi giam giữ nhưng chưa có điều kiện để kiểm sát. Mặt khác Kiểm sát viên cũng phải có cơ sở để khẳng định việc tự kiểm tra của Tòa án, cơ quan thi hành án hình sự; cơ quan được giao một số nhiệm vụ trong thi hành án hình sự là khách quan và đạt hiệu quả thì áp dụng thẩm quyền này.
  + Khi yêu cầu tự kiểm tra, VKS phải yêu cầu kiểm tra những vấn đề gì và cũng chỉ nên tập trung vào một số việc chính, không nên yêu cầu quá nhiều việc, không yêu cầu một cách tràn lan, không cần thiết. . .
  Yêu cầu tự kiểm tra việc thi hành án hình sự và thông báo kết quả cho Viện kiểm sát nhân dân thì Tòa án, cơ quan thi hành án hình sự, cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự phải thực hiện trong thời hạn 30 ngày, kể từ ngày nhận được yêu cầu.` },
            { title: '1.5. Biện pháp khắc phục vi phạm', content: `- Yêu cầu:
  Khi phát hiện có vi phạm pháp luật trong việc ban hành quyết định thi hành án, Viện kiểm sát yêu cầu Tòa án cùng cấp và cấp dưới ra quyết định thi hành án đúng theo quy định của pháp luật
  Ngoài ra, khi trực tiếp kiểm sát tại cơ quan thi hành án hình sự, cơ quan được giao một số nhiệm vụ thi hành án hình sự mà phát hiện vi phạm pháp luật, VKS yêu cầu đình chỉ việc thi hành, chấm dứt hành vi vi phạm pháp luật.
  - Kháng nghị
  Viện kiểm sát kháng nghị cơ quan thi hành án hình sự cùng cấp và cấp dưới; cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự và cá nhân có liên quan trong việc thi hành án hình sự yêu cầu đình chỉ việc thi hành, sửa đổi hoặc bãi bỏ quyết định có vi phạm pháp luật của Trưởng nhà tạm giữ, Giám thị trại tạm giam, trại giam, Thủ trưởng cơ quan thi hành án hình sự, cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự về việc thi hành án hình sự; chấm dứt hành vi vi phạm pháp luật.
  Ngoài ra, VKS kháng nghị theo thủ tục phúc thẩm, giám đốc thẩm, tái thẩm các quyết định của Toà án (những quyết định của Toà án về miễn, giảm thời hạn chấp hành án phạt hoặc rút ngắn thời gian thử thách của án treo bao gồm: Quyết định miễn, giảm thời hạn chấp hành án phạt tù; Quyết định rút ngắn thời gian thử thách của án treo; Quyết định giảm thời hạn, miễn chấp hành án phạt cải tạo không giam giữ; Quyết định miễn chấp hành thời hạn cấm cư trú, miễn chấp hành thời hạn quản chế còn lại)
  Khi thực hiện công tác kiểm sát phát hiện quyết định sơ thẩm của Toà án trái pháp luật, Kiểm sát viên thu thập các tài liệu báo cáo, tham mưu với Viện trưởng Viện kiểm sát cấp mình để kháng nghị theo thủ tục phúc thẩm hoặc đề nghị Viện kiểm sát cấp trên kháng nghị theo thủ tục phúc thẩm, giám đốc thẩm hoặc tái thẩm theo quy định của pháp luật tố tụng hình sự, kèm theo quyết định và các tài liệu có liên quan; tham gia việc xét xử của Toà án cùng cấp tại các phiên họp phúc thẩm; phiên toà giám đốc thẩm, tái thẩmtheo quy định của Bộ luật tố tụng hình sự và các văn bản pháp luật có liên quan.
  - Kiến nghị
  Khi phát hiện những việc được xác định là nguyên nhân, điều kiện dẫn đến vi phạm pháp luật hoặc những việc nếu không có biện pháp khắc phục sẽ dẫn đến vi phạm pháp luật, Viện kiểm sát kiến nghị đến cơ quan có thẩm quyền và người có trách nhiệm trong việc tạm giữ, tạm giam; cơ quan thi hành án hình sự cùng cấp và cấp dưới; cơ quan, tổ chức được giao một số nhiệm vụ thi hành án hình sự và cá nhân có liên quan trong việc thi hành án hình sự có biện pháp khắc phục, phòng ngừa vi phạm pháp luật.
  - Ra Quyết định trả tự do
  Viện trưởng Viện kiểm sát ra quyết định trả tự do ngay cho người chấp hành án phạt tù đang bị giam, giữ không có căn cứ và trái pháp luật trong các trường hợp: Người đã chấp hành xong thời hạn phạt tù ghi trong bản án nếu họ không bị tạm giam về một hành vi phạm tội khác; người đã có quyết định giảm hết thời hạn chấp hành án phạt tù; người đã có quyết định đặc xá của Chủ tịch nước; người đã có quyết định hoãn, tạm đình chỉ chấp hành án phạt tù; người đã có quyết định tạm đình chỉ thi hành bản án; người bị bắt thi hành bản án đã hết thời hiệu theo Điều 55 Bộ luật hình sự.
  - Khởi tố hoặc yêu cầu khởi tố vụ án hình sự
  Khi thực hiện công tác kiểm sát việc tạm giữ, tạm giam và thi hành án hình sự phát hiện có dấu hiệu tội phạm, Kiểm sát viên có trách nhiệm thu thập các tài liệu ban đầu, báo cáo Lãnh đạo Viện hoặc yêu cầu cơ quan có thẩm quyền khởi tố vụ án hình sự theo quy định của pháp luật.` }
          ] 
        },
      ],
    },
    {
      part: 'Phần Thứ Sáu',
      title: 'KIỂM SÁT GIẢI QUYẾT VỤ VIỆC DÂN SỰ',
      sections: [
        { 
          title: '1. VỊ TRÍ, PHẠM VI', 
          subsections: [
            { title: '1.1. Vị trí, đối tượng', content: `Quy chế công tác kiểm sát việc giải quyết các vụ việc dân sự ban hành kèm theo Quyết định số 364/QĐ-VKSTC ngày 02/10/2017 của Viện trưởng Viện kiểm sát nhân dân tối cao (sau đây gọi tắt là Quy chế công tác kiểm sát dân sự) quy định:
  
  Vị trí công tác:
  
  Công tác kiểm sát việc giải quyết các vụ việc dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động (sau đây gọi chung là Công tác kiểm sát việc giải quyết các vụ việc dân sự) là công tác thực hiện chức năng kiểm sát hoạt động tư pháp của Viện kiểm sát nhân dân (VKSND), nhằm bảo đảm cho việc giải quyết vụ việc dân sự của Tòa án kịp thời, đúng pháp luật (Điều 1 Quy chế công tác kiểm sát dân sự).
  
  Kiểm sát việc tuân theo pháp luật trong tố tụng dân sự là một trong những nguyên tắc cơ bản của tố tụng dân sự. Điều 21 BLTTDS năm 2015 quy định:
  
  1. Viện kiểm sát nhân dân kiểm sát việc tuân theo pháp luật trong tố tụng dân sự, thực hiện các quyền yêu cầu, kiến nghị, kháng nghị theo quy định của pháp luật nhằm bảo đảm cho việc giải quyết vụ việc dân sự kịp thời, đúng pháp luật.
  
  2. Viện kiểm sát tham gia các phiên họp sơ thẩm đối với các việc dân sự; phiên tòa sơ thẩm đối với những vụ án do Tòa án tiến hành thu thập chứng cứ hoặc đối tượng tranh chấp là tài sản công, lợi ích công cộng, quyền sử dụng đất, nhà ở hoặc có đương sự là người chưa thành niên, người mất năng lực hành vi dân sự, người bị hạn chế năng lực hành vi dân sự, người có khó khăn trong nhận thức, làm chủ hành vi hoặc trường hợp quy định tại khoản 2 Điều 4 của Bộ luật này
  
  3. Viện kiểm sát nhân dân tham gia phiên tòa, phiên họp phúc thẩm, giám đốc thẩm, tái thẩm.
  
  - Đối tượng của công tác kiểm sát việc giải quyết các vụ việc dân sự :là việc tuân theo pháp luật của Tòa án, người tiến hành tố tụng của Tòa án, người tham gia tố tụng và cơ quan, tổ chức, cá nhân có liên quan trong quá trình giải quyết vụ việc dân sự (Điều 2 Quy chế công tác kiểm sát dân sự)
  
  - Phạm vi công tác kiểm sát việc giải quyết các vụ việc dân sự: bắt đầu từ khi Tòa án thông báo trả lại đơn khởi kiện vụ án dân sự, đơn yêu cầu giải quyết việc dân sự hoặc từ khi Tòa án thông báo thụ lý vụ việc dân sự đến khi bản án, quyết định giải quyết vụ việc dân sự của Tòa án có hiệu lực pháp luật mà không có kháng nghị, không có yêu cầu, kiến nghị, đề nghị xem xét lại theo quy định của Bộ luật tố tụng dân sự (BLTTDS)( Điều 3 Quy chế công tác kiểm sát dân sự)` },
            { title: '1.2. Nhiệm vụ dân sự', content: `Căn cứ BLTTDS năm 2015, Luật tổ chức VKSND và Quy chế công tác kiểm sát dân sự, khi kiểm sát việc tuân theo pháp luật trong việc giải quyết các vụ việc dân sự Viện kiểm sát nhân dân có các nhiệm vụ, quyền hạn sau:
  
  Khi kiểm sát việc tuân theo pháp luật trong việc giải quyết các vụ việc dân sự, VKSND có các nhiệm vụ và quyền hạn sau đây:
  
  1. Kiểm sát việc trả lại đơn khởi kiện, đơn yêu cầu;
  
  2. Kiểm sát việc thụ lý vụ việc dân sự;
  
  3. Kiểm sát việc Tòa án xác minh, thu thập tài liệu chứng cứ; yêu cầu Tòa án xác minh thu thập tài liệu, chứng cứ trong quá trình giải quyết vụ việc dân sự hoặc tự mình xác minh, thu thập tài liệu, chứng cứ để bảo đảm cho việc thực hiện quyền kháng nghị;
  
  4. Kiểm sát việc áp dụng, thay đổi, hủy bỏ hoặc không áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời của Tòa án;
  
  5. Kiểm sát kết quả phiên họp kiểm tra việc giao nộp, tiếp cận, công khai chứng cứ và hòa giải;
  
  6. Nghiên cứu hồ sơ vụ việc;
  
  7. Tham gia phiên tòa, phiên họp; kiểm sát việc tuân theo pháp luật của Thẩm phán, Hội đồng xét xử, thư ký phiên tòa, phiên họp, người tham gia tố tụng tại phiên tòa, phiên họp; phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ việc tại phiên tòa, phiên họp;
  
  8. Kiểm sát bản án, quyết định của Tòa án;
  
  9. Yêu cầu Tòa án cùng cấp hoặc cấp dưới chuyển hồ sơ vụ việc dân sự để xem xét, quyết định việc kháng nghị;
  
  10. Kháng nghị theo thủ tục phúc thẩm, giám đốc thẩm, tái thẩm bản án, quyết định của Tòa án theo quy định của pháp luật;
  
  11. Yêu cầu cơ quan thi hành án dân sự hoãn thi hành bản án, quyết định của Tòa án để xem xét kháng nghị theo thủ tục giám đốc thẩm, tái thẩm; quyết định tạm đình chỉ thi hành bản án, quyết định đã có hiệu lực pháp luật của Tòa án khi thực hiện thẩm quyền kháng nghị theo thủ tục giám đốc thẩm, tái thẩm;
  
  12. Tiếp nhận, giải quyết đơn đề nghị, thông báo, kiến nghị xem xét lại bản án, quyết định của Tòa án đã có hiệu lực pháp luật theo thủ tục giám đốc thẩm, tái thẩm, thủ tục đặc biệt;
  
  13. Kiến nghị xem xét lại quyết định của Hội đồng Thẩm phán Tòa án nhân dân (HĐTP TAND) tối cao theo thủ tục đặc biệt;
  
  14. Kiến nghị, yêu cầu Tòa án, cơ quan, tổ chức, cá nhân thực hiện các hoạt động tố tụng theo quy định của pháp luật; kiến nghị Tòa án khắc phục vi phạm trong quá trình giải quyết vụ việc dân sự; yêu cầu, kiến nghị cơ quan, tổ chức, người có thẩm quyền xử lý nghiêm minh người tham gia tố tụng vi phạm pháp luật; kiến nghị cơ quan, tổ chức hữu quan khắc phục và áp dụng các biện pháp phòng ngừa vi phạm pháp luật trong quản lý nhà nước và thực hiện các quyền yêu cầu, kiến nghị khác theo quy định của pháp luật;
  
  15. Thực hiện nhiệm vụ, quyền hạn khác trong kiểm sát việc giải quyết vụ việc dân sự theo quy định của pháp luật.
  
  Cụ thể:
  
  1. Kiểm sát việc trả lại đơn khởi kiện
  
  Theo quy định tại Khoản 2 Điều 192 BLTTDS, khi trả lại đơn khởi kiện và các tài liệu, chứng cứ kèm theo cho người khởi kiện, Thẩm phán phải có văn bản ghi rõ lí do trả lại đơn khởi kiện, đồng thời gửi cho VKS cùng cấp. Điều 194 BLTTDS cũng quy định trong thời hạn 10 ngày làm việc, kể từ ngày nhận được văn bản trả lại đơn khởi kiện của Tòa án, VKS cùng cấp có quyền kiến nghị với Chánh án Tòa án đã trả lại đơn khởi kiện. Ngay sau khi nhận được khiếu nại, kiến nghị về việc trả lại đơn khởi kiện, Chánh án Tòa án phải phân công một Thẩm phán khác xem xét, giải quyết khiếu nại, kiến nghị.
  
  Trong thời hạn 05 ngày làm việc, kể từ ngày được phân công, Thẩm phán phải mở phiên họp xem xét, giải quyết khiếu nại, kiến nghị. Phiên họp xem xét, giải quyết khiếu nại, kiến nghị có sự tham gia của đại diện Viện kiểm sát cùng cấp và đương sự có khiếu nại; trường hợp đương sự vắng mặt thì Thẩm phán vẫn tiến hành phiên họp, Viện kiểm sát có quyền kiến nghị với Chánh án Tòa án cấp trên trực tiếp xem xét, giải quyết. Trong thời hạn mười ngày làm việc, kể từ ngày nhận được kiến nghị, Chánh án Tòa án cấp trên phải ra quyết định giải quyết. Quyết định của Chánh án Tòa án cấp trên trực tiếp là quyết định cuối cùng.
  
  Sau khi nhận được thông báo thụ lý vụ án hoặc văn bản trả lại đơn khởi kiện của Tòa án, Kiểm sát viên phải vào sổ thụ lý theo dõi, kiểm tra văn bản thông báo thụ lý theo những nội dung được quy định tại Điều 196 BLTTDS; lập phiếu kiểm sát theo dõi vi phạm để tổng hợp kiến nghị với Toà án các vi phạm về thời hạn gửi thông báo, nội dung, hình thức thông báo; theo dõi quyết định chuyển vụ án của Toà án và xem xét kiến nghị với Chánh án Tòa án về việc trả lại đơn khởi kiện theo quy định tại Điều 194 BLTTDS.
  
  Trường hợp Toà án không gửi, chậm gửi thông báo thụ lý hoặc văn bản trả lại đơn khởi kiện vụ việc dân sự cho Viện kiểm sát hoặc nội dung, hình thức thông báo không đúng quyđịnh của pháp luật thì Viện kiểm sát có quyền yêu cầu hoặc kiến nghị với Tòa án khắc phục vi phạm.
  
  2. Kiểm sát việc thông báo thụ lý vụ việc dân sự của Tòa án
  
  Theo quy định tại Điều 196 BLTTDS trong thời hạn ba ngày làm việc, kể từ ngày thụ lý vụ việc dân sự, Thẩm phán phải thông báo bằng văn bản cho Viện kiểm sát cùng cấp về việc Tòa án đã thụ lý vụ việc dân sự. Văn bản thông báo phải có đầy đủ các nội dung chính quy định tại Khoản 2 Điều 196 BLTTDS.
  
  Sau khi thụ lý vụ việc dân sự, nếu xét thấy vụ việc dân sự đó không thuộc thẩm quyền giải quyết của mình, thì Tòa án đã thụ lý vụ việc dân sự ra quyết định chuyển hồ sơ vụ việc cho Toà án có thẩm quyền theo quy định tại Khoản 1 Điều 41 BLTTDS, đồng thời gửi ngay quyết định chuyển hồ sơ vụ việc dân sự cho Viện kiểm sát cùng cấp biết.
  
  3. Tham gia phiên tòa, phiên họp giải quyết vụ việc dân sự theo thủ tục sơ thẩm, phúc thẩm, giám đốc thẩm, tái thẩm và phiên họp xem xét lại quyết định của HĐTP TANDTC
  
  3.1. Tham gia phiên tòa, phiên họp sơ thẩm
  
  Khoản 2 Điều 21 BLTTDS quy định:“ Viện kiểm sát tham gia các phiên họp sơ thẩm đối với các việc dân sự; phiên tòa sơ thẩm đối với những vụ án do Tòa án tiến hành thu thập chứng cứ hoặc đối tượng tranh chấp là tài sản công, lợi ích công cộng, quyền sử dụng đất, nhà ở hoặc có đương sự là người chưa thành niên, người mất năng lực hành vi dân sự, người bị hạn chế năng lực hành vi dân sự, người có khó khăn trong nhận thức, làm chủ hành vi hoặc trường hợp quy định tại khoản 2 Điều 4 của Bộ luật này”.
  
  - Các trường hợp Viện kiểm sát tham gia phiên tòa sơ thẩm:
  
  Theo quy định tại Điều 26, Điều 28, Điều 30 và Điều 32 BLTTDS Tòa án có thẩm quyền giải quyết những tranh chấp về dân sự, hôn nhân và gia đình, kinh doanh, thương mại và lao động. Tuy nhiên, VKSND không tham gia tất cả các phiên tòa sơ thẩm giải quyết tranh chấp dân sự mà chỉ tham gia trong những trường hợp do pháp luật quy định. Điều 21 BLTTDS, Thông tư liên tịch số 02/2016, Quy chế kiểm sát dân sự ban hành kèm theo Quyết định 364/QĐ-VKSNDTC và phải hiểu rõ bản chất các quy định về các trường hợp VKS phải tham gia phiên tòa. Cụ thể:
  
  Trường hợp thứ nhất, Vụ án do Tòa án tiến hành thu thập chứng cứ
  
  Trong trường hợp này, bất cứ vụ án dân sự nào Tòa án tiến hành thu thập chứng cứ thì VKS có trách nhiệm phải tham gia phiên tòa. Việc thu thập chứng cứ để giải quyết vụ án dân sự có nhiều cách thức khác nhau như: Tòa án thu thập theo yêu cầu của đương sự hoặc thu thập theo yêu cầu của VKS hoặc Tòa án tự thu thập khi xét thấy cần thiết. Quá trình thu thập chứng cứ, Tòa án có thể thông qua một hoặc một số biện pháp quy định tại Điều 97 và được quy định cụ thể từ Điều 98 đến Điều 106 BLTTDS 2015.
  
  Trường hợp thứ hai, Vụ án mà đối tượng tranh chấp là tài sản công, lợi ích công cộng, quyền sử dụng đất, nhà ở
  
  - Đối tượng tranh chấp là tài sản công: tài sản công là tài sản thuộc hình thức sở hữu nhà nước tại các cơ quan nhà nước, đơn vị vũ trang nhân dân, đơn vị sự nghiệp công lập, tổ chức chính trị, tổ chức chính trị - xã hội, tổ chức chính trị xã hội - nghề nghiệp, tổ chức xã hội, tổ chức xã hội - nghề nghiệp, được hình thành từ nguồn do ngân sách nhà nước cấp hoặc có nguồn gốc từ ngân sách nhà nước.
  
  Ví dụ: Vụ án dân sự tranh chấp về tài sản của một cơ quan nhà nước mà tài sản đó được mua sắm từ nguồn vốn do ngân sách nhà nước cấp. Trong trường hợp này, Viện kiểm sát phải tham gia phiên tòa sơ thẩm.
  
  - Đối tượng tranh chấp là lợi ích công cộng: Lợi ích công cộng là những lợi ích vật chất hoặc tinh thần liên quan đến xã hội hoặc cộng đồng dân cư.
  
  Ví dụ: Vụ án dân sự do đương sự khởi kiện yêu cầu doanh nghiệp phải bồi thường thiệt hại do gây ô nhiễm môi trường. Trong trường hợp này, VKS phải tham gia phiên tòa sơ thẩm.
  
  - Đối tượng tranh chấp là quyền sử dụng đất: Theo quy định của pháp luật, đó là các tranh chấp về quyền sử dụng đất (ai là người có quyền).
  
  Ví dụ: A và B tranh chấp với nhau về quyền sử dụng đất đối với một thửa đất có diện tích là 500 m2 hiện do B đang quản lý, sử dụng. A khởi kiện yêu cầu Tòa án giải quyết để buộc B phải trả lại thửa đất đó cho A. Trong trường hợp này, đối tượng tranh chấp là quyền sử dụng đất, Viện kiểm sát có trách nhiệm tham gia phiên tòa sơ thẩm.
  
  - Đối tượng tranh chấp là nhà ở: Đây là tranh chấp về sở hữu, đối tượng là quyền sở hữu về nhà ở (ai có quyền sở hữu căn nhà)
  
  - Tranh chấp về hợp đồng có đối tượng của hợp đồng là quyền sử dụng đất hoặc nhà ở
  
  Ví dụ: Tranh chấp về hợp đồng chuyển nhượng quyền sử dụng đất hoặc hợp đồng mua bán nhà ở; tranh chấp về hợp đồng thuê quyền sử dụng đất hoặc hợp đồng thuê nhà ở; tranh chấp về hợp đồng tặng cho quyền sử dụng đất hoặc hợp đồng tặng cho nhà ở; tranh chấp về hợp đồng góp vốn bằng giá trị quyền sử dụng đất hoặc hợp đồng góp vốn bằng giá trị nhà ở…)
  
  KSV, KTV khi tiến hành công tác kiểm sát lưu ý: Đối với tranh chấp về hợp đồng có liên quan đến quyền sử dụng đất hoặc nhà ở, nhưng quyền sử dụng đất hoặc nhà ở đó không phải là đối tượng của hợp đồng, thì không thuộc trường hợp VKS phải tham gia phiên tòa sơ thẩm.
  
  Ví dụ: A vay ngân hàng B số tiền là 500 triệu đồng, đồng thời thế chấp cho ngân hàng một ngôi nhà và quyền sử dụng đất giá trị 1 tỷ đồng. Đến thời hạn trả nợ, A không thực hiện được nghĩa vụ thanh toán, ngân hàng tiến hành xử lý tài sản thế chấp để thu hồi nợ nhưng không xử lý được vì khu đất này đang trong diện quy hoạch, không được phép chuyển đổi, chuyển nhượng. Ngân hàng đã khởi kiện ra Tòa án yêu cầu Tòa án giải quyết buộc A phải thực hiện nghĩa vụ trả nợ. Trong vụ án dân sự này, đối tượng tranh chấp là khoản tiền A vay ngân hàng chứ không phải là quyền sử dụng đất và nhà ở A dùng để thế chấp, do đó, không thuộc trường hợp VKS phải tham gia phiên tòa.
  
  - Tranh chấp về thừa kế quyền sử dụng đất hoặc thừa kế nhà ở;
  
  - Tranh chấp đòi lại quyền sử dụng đất hoặc đòi lại nhà ở đang cho mượn, cho sử dụng nhờ;
  
  - Tranh chấp trong các giao dịch dân sự khác có đối tượng giao dịch là quyền sử dụng đất, nhà ở.
  
  Trường hợp thứ ba, Vụ án có đương sự là người chưa thành niên, người mất năng lực hành vi dân sự, người bị hạn chế năng lực hành vi dân sự, người có khó khăn trong nhận thức, làm chủ hành vi
  
  - Là người chưa thành niên: Theo Điều 21 BLDS năm 2015 quy định, người chưa thành niên là người chưa đủ mười tám tuổi.
  
  - Là người mất năng lực hành vi dân sự: Theo Điều 22 BLDS 2015 quy định, người mất năng lực hành vi dân sự như sau: Khi một người do bị bệnh tâm thần hoặc mắc bệnh khác mà không thể nhận thức, làm chủ được hành vi thì theo yêu cầu của người có quyền, lợi ích liên quan hoặc của cơ quan, tổ chức hữu quan, Tòa án ra quyết định tuyên bố người này là người mất năng lực hành vi dân sự trên cơ sở kết luận giám định pháp y tâm thần.
  
  - Là người bị hạn chế năng lực hành vi dân sự: Hạn chế năng lực hành vi dân sự là người nghiện ma túy, nghiện các chất kích thích khác dẫn đến phá tán tài sản của gia đình thì theo yêu cầu của người có quyền, lợi ích liên quan hoặc của cơ quan, tổ chức hữu quan, Tòa án có thể ra quyết định tuyên bố người này là người bị hạn chế năng lực hành vi dân sự. Đối với người này, Tòa án quyết định người đại diện theo pháp luật của người bị hạn chế năng lực hành vi dân sự và phạm vi đại diện (Điều 24 BLDS 2015).
  
  - Là người có khó khăn trong nhận thức, làm chủ hành vi: Theo Điều 23 BLDS 2015, đó là người thành niên do tình trạng thể chất hoặc tinh thần mà không đủ khả năng nhận thức, làm chủ hành vi nhưng chưa đến mức mất năng lực hành vi dân sự thì theo yêu cầu của người này, người có quyền, lợi ích liên quan hoặc của cơ quan, tổ chức hữu quan, trên cơ sở kết luận giám định pháp y tâm thần, Tòa án ra quyết định tuyên bố người này là người có khó khăn trong nhận thức, làm chủ hành vi và chỉ định người giám hộ, xác định quyền, nghĩa vụ của người giám hộ.
  
  Trường hợp thứ tư Vụ án dân sự chưa có điều luật để áp dụng
  
  Vụ án chưa có điều luật để áp dụng đó là những vụ án mà người khởi kiện yêu cầu Tòa án giải quyết nhưng tranh chấp đó chưa có điều luật điều chỉnh.
  
  Ví dụ: Tranh chấp về việc bốc mộ, chăm sóc mồ mả hay kiện đòi các giấy tờ liên quan đến quyền sở hữu, quyền nhân thân,...những tranh chấp này không thuộc quy định tại Điều 26, 28, 30 và Điều 32 BLTTDS, trước đây Tòa án không giải quyết, nhưng đến nay, cho dù chưa có điều luật điều chỉnh, nhưng Tòa án vẫn phải thụ lý giải quyết. Đối với trường hợp này, VKS bắt buộc phải tham gia phiên tòa.
  
  Trong quá trình giải quyết vụ án dân sự, kể từ khi thụ lý, đến khi xét xử sơ thẩm, nếu phát hiện vụ án dân sự thuộc một trong các trường hợp pháp luật quy định phải có VKS tham gia phiên tòa thì Tòa án phải thông báo bằng văn bản cho VKS biết để VKS tiến hành nghiên cứu hồ sơ và tham gia phiên tòa sơ thẩm.
  
  - Các trường hợp Viện kiểm sát tham gia phiên họp sơ thẩm giải quyết việc dân sự:
  
  Theo quy định tại Khoản 2 Điều 21 BLTTDS Viện kiểm sát phải tham gia tất cả các phiên họp sơ thẩm giải quyết việc dân sự của Toà án.
  
  Tòa án gửi hồ sơ việc dân sự cùng với quyết định mở phiên họp cho Viện kiểm sát ngay sau khi Toà án ra quyết định mở phiên họp. Trong thời hạn 7 ngày, kể từ ngày nhận được hồ sơ, Viện kiểm sát phải trả lại hồ sơ cho Tòa án để mở phiên họp theo quy định tại Khoản 1 Điều 367 BLTTDS.
  
  3.2. Tham gia phiên toà, phiên họp phúc thẩm
  
  Theo quy định tại các Điều 21 Khoản 3, Điều 294 Khoản 2, Điều 314, Điều 338 và Điều 358 BLTTDS thì Viện kiểm sát phải tham gia tất cả các phiên tòa, phiên họp phúc thẩm giám đốc thẩm, tái thẩm.
  
  Điều 21 khoản 3 quy định “Viện kiểm sát nhân dân tham gia phiên tòa, phiên họp phúc thẩm, giám đốc thẩm, tái thẩm”.
  
  Theo quy định tại Điều 292 BLTTDS, sau khi ra quyết định đưa vụ án ra xét xử, Tòa án cấp phúc thẩm phải chuyển hồ sơ vụ án cho VKS cùng cấp nghiên cứu. Thời hạn nghiên cứu hồ sơ của VKS cùng cấp là mười lăm ngày, kể từ ngày nhận được hồ sơ vụ án; hết thời hạn đó, VKS phải trả hồ sơ vụ án cho Tòa án.
  
  Kiểm sát viên VKS cùng cấp phải tham gia phiên tòa phúc thẩm, trong trường hợp Viện kiểm sát có kháng nghị phúc thẩm nếu vắng mặt thì phải hoãn phiên tòa (Điều 294, Điều 296 BLTTDS)
  
  Theo Điều 314 BLTTDS quy định về thủ tục phúc thẩm đối với quyết định của Tòa án cấp sơ thẩm bị kháng cáo, kháng nghị thì khi phúc thẩm đối với quyết định của Tòa án cấp sơ thẩm bị kháng cáo, kháng nghị, Hội đồng phúc thẩm không phải mở phiên tòa, không phải triệu tập các đương sự, trừ trường hợp cần phải nghe ý kiến của họ trước khi ra quyết định. Tuy nhiên, Khoản 2 Điều 280 BLTTDS lại quy định Kiểm sát viên VKS cùng cấp tham gia phiên họp phúc thẩm quyết định của Tòa án sơ thẩm bị kháng cáo, kháng nghị. Như vậy, việc tham gia phiên họp phúc thẩm đối với quyết định của Tòa án của VKS là bắt buộc.
  
  3.3 Tham gia phiên tòa, phiên họp giám đốc thẩm, tái thẩm:
  
  VKSND tham gia tất cả các phiên tòa, phiên họp giám đốc thẩm, tái thẩm, kể cả trường hợp Viện kiểm sát kháng nghị giám đốc thẩm, tái thẩm và trường hợp Tòa án kháng nghị giám đốc thẩm, tái thẩm. Quy định Viện kiểm sát phải tham gia tất cả các phiên tòa, phiên họp giám đốc thẩm, tái thẩm xuất phát từ lý do thủ tục giám đốc thẩm, tái thẩm là thủ tục tố tụng đặc biệt, không phải là một cấp xét xử, nhằm xem xét lại những bản án, quyết định đã có hiệu lực pháp luật của Tòa án, đã được đưa ra thi hành, thậm chí có thể đã thi hành xong. Phiên toà, phiên họp giám đốc thẩm, tái thẩm chỉ tiến hành khi có căn cứ cho rằng có sự vi phạm pháp luật nghiêm trọng trong quá trình giải quyết vụ việc trước đó (phiên tòa giám đốc thẩm), hoặc có tình tiết mới quan trọng (phiên tòa tái thẩm). Xuất phát từ tính chất quan trọng của thủ tục giám đốc thẩm, tái thẩm, Viện kiểm sát phải tham gia các phiên tòa, phiên họp để bảo đảm việc giải quyết vụ việc dân sự của Tòa án tuân thủ đúng các quy định của pháp luật.
  
  Trong trường hợp Chánh án Tòa án nhân dân tối cao hoặc Chánh án Tòa án nhân dân cấp tỉnh kháng nghị thì quyết định kháng nghị cùng hồ sơ vụ án phải được gửi ngay cho VKS cùng cấp. VKS  nghiên cứu trong thời hạn 15 ngày, kể từ ngày nhận được hồ sơ vụ án; hết thời hạn đó, VKS phải chuyển hồ sơ cho Tòa án có thẩm quyền giám đốc thẩm (Khoản 2 Điều 336 BLTTDS).
  
  3.4 Tham gia phiên họp xem xét lại quyết định của HĐTP TANDTC:
  
  Theo quy định tại Điều 358 BLTTDS, trường hợp xem xét lại quyết định của HĐTP TANDTC phải có sự tham dự của Viện trưởng Viện kiểm sát nhân dân tối cao kể cả trường hợp Viện trưởng VKSNDTC kiến nghị và không có kiến nghị xem xét lại quyết định của HĐTP TANDTC.
  
  4. Phát biểu của Kiểm sát viên tại phiên tòa:
  
  4.1 Phát biểu của Kiểm sát viên tại phiên tòa, phiên họp sơ thẩm
  
  Điều 262 BLTTDS quy định; " Sau khi những người tham gia tố tụng phát biểu tranh luận và đối đáp xong, Kiểm sát viên phát biểu ý kiến về việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, Thư ký phiên tòa và của người tham gia tố tụng trong quá trình giải quyết vụ án kể từ khi thụ lý cho đến trước thời điểm Hội đồng xét xử nghị án và phát biểu ý kiến về việc giải quyết vụ án".
  
  Để bảo đảm sự thống nhất với quy định của Hiến pháp năm 2013 và quy định của Luật Tổ chức Viện kiểm sát nhân dân, Luật Tổ chức Tòa án nhân dân; đồng thời khắc phục những vướng mắc, bất cập của quy định tại Điều 234 của BLTTDS năm 2004, Điều 262 BLTTDS năm 2015 đã sửa đổi, bổ sung nội dung quy định về phát biểu của kiểm sát viên tại phiên tòa sơ thẩm như sau:
  
  - Sau khi những người tham gia tố tụng phát biểu tranh luận và đối đáp xong, Căn cứ vào các tài liệu, chứng cứ trong hồ sơ vụ án và diễn biến tại phiên tòa, Kiểm sát viên phát biểu ý kiến về việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, Thư ký Tòa và của người tham gia tố tụng dân sự trong quá trình giải quyết vụ án kể từ khi thụ lý cho đến trước thời điểm Hội đồng xét xử nghị án và phát biểu ý kiến về việc giải quyết vụ án theo quy định tại Điều 262 Bộ luật TTDS và hướng dẫn tại Điều 28 của Thông tư liên tịch số; 02/2016/TTLT-VKSNDTC-TANDTC ngày 31/8/2016.
  
  Tại phiên họp sơ thẩm giải quyết việc dân sự, sau khi những người tham gia tố tụng trình bày, giải thích, Kiểm sát viên phát biểu ý kiến của Viện kiểm sát về việc giải quyết việc dân sự theo quy định tại điểm g khoản 1 Điều 369 BLTTDS.
  
  Ý kiến phát biểu của Kiểm sát viên phải thể hiện bằng văn bản, có chữ ký của Kiểm sát viên tham gia phiên tòa phải được gửi cho Tòa án trong thời hạn 05 ngày làm việc, và ngay sau khi kết thúc phiên họp để lưu vào hồ sơ vụ việc dân sự.
  
  Như vậy, tại phiên tòa sơ thẩm, Kiểm sát viên tham gia phiên tòa không chỉ phát biểu ý kiến về việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, phát biểu ý kiến về việc chấp hành pháp luật (bao gồm cả pháp luật về nội dung và pháp luật về tố tụng) của những người tham gia tố tụng. mà còn phát biểu quan điểm của Viện kiểm sát về việc giải quyết vụ án.
  
  4.2. Phát biểu của Kiểm sát viên tại phiên tòa, phiên họp phúc thẩm
  
  Theo qui định tại Điều 306 và Khoản 4 Điều 314 BLTTDS năm 2015 và Điều 30 Thông tư liên tịch số 02/2016/TTLT-VKSNDTC-TANDTC ngày 31/8/2016 của Viện kiểm sát nhân dân tối cao và Tòa án nhân dân tối cao Quy định việc phối hợp giữa Viện kiểm sát nhân dân và Tòa án nhân dân trong việc thi hành một số qui định của BLTTDS 2015 (sau đây gọi tắt là Thông tư 02/2016) thì phát biểu của Kiểm sát viên tại phiên tòa phải đánh giá, nhận xét đầy đủ phần thủ tục cả những việc chấp hành đúng và những hạn chế vi phạm: Việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, những người tiến hành hành tố tụng khác; việc chấp hành pháp luật của những người tham gia tố tụng; phần quan điểm của Viện kiểm sát đối với kháng cáo, kháng nghị, đề xuất hướng giải quyết vụ án theo qui định tại Điều 308 và Khoản 5 Điều 314 BLTTDS năm 2015. Trong đó, Kiểm sát viên phải phân tích rõ ràng, chính xác, cụ thể từng phần như: tư cách của người kháng cáo, thời hạn kháng cáo, nội dung kháng cáo, đề nghị Hội đồng xét xử chấp nhận một phần hay toàn bộ kháng cáo hay không. Đối với vụ án do Viện kiểm sát kháng nghị, bản phát biểu của Kiểm sát viên cần trình bày rõ thêm căn cứ của kháng nghị, phân tích chứng cứ tài liệu bổ sung làm căn cứ kháng nghị, bảo vệ kháng nghị; bác bỏ hay chấp nhận ý kiến của đương sự, người tham gia tố tụng khác về căn cứ, nội dung kháng nghị. Ý kiến phát biểu của Kiểm sát viên tại phiên tòa, phiên họp phúc thẩm phải thể hiện bằng văn bản có chữ ký của Kiểm sát viên tham gia phiên tòa, phiên họp và phải gửi cho Tòa án ngay sau khi kết thúc phiên tòa, phiên họp để lưu vào hồ sơ vụ án và hồ sơ kiểm sát.
  
  4.3. Phát biểu của Kiểm sát viên tại phiên tòa, phiên họp giám đốc thẩm, tái thẩm
  
  Về trình bày kháng nghị Giám đốc thẩm, Tái thẩm và phát biểu ý kiến của Kiểm sát viên về việc giải quyết vụ án tại phiên tòa Giám đốc thẩm, Tái thẩm do Viện trưởng Viện kiểm sát kháng nghị.
  
  Theo quy định tại Khoản 1 Điều 31 Thông tư liên tịch số 02/2016, mẫu số 39 Quyết định 204, trường hợp do Viện trưởng Viện kiểm sát kháng nghị thì tại phiên tòa, Kiểm sát viên trình bày nội dung, tính có căn cứ và hợp pháp của kháng nghị. Nếu Hội đồng giám đốc thẩm yêu cầu trình bày về căn cứ kháng nghị thì Kiểm sát viên phân tích làm rõ thêm các căn cứ, tình tiết trong hồ sơ mà bản án phúc thẩm chấp nhận hoặc không chấp nhận không có căn cứ, vi phạm pháp luật. Về phát biểu ý kiến giải quyết vụ án thì Kiểm sát viên đề xuất một trong những nội dung quy định tại các Khoản 2,3,4,5 Điều 243 BLTTDS năm 2015.
  
       * Về phát biểu ý kiến của Kiểm sát viên tại phiên tòa Giám đốc thẩm, Tái thẩm do Chánh án kháng nghị:
  
       Theo quy định tại Khoản 2 Điều 31 Thông tư liên tịch số 02/2016, mẫu số 40 Quyết định 204, trường hợp Chánh án Tòa án kháng nghị thì tại phiên tòa, Kiểm sát viên trình bày tính có căn cứ và hợp pháp của kháng nghị; căn cứ đơn đề nghị của đương sự, thời hạn kháng nghị, thẩm quyền và nội dung của quyết định kháng nghị của Chánh án Tòa án nhân dân đã theo đúng hoặc không đúng một trong các điều Điều 328, Điều 329, Điều 333 và Điều 334 BLTTDS năm 2015; kháng nghị đối với vi phạm pháp luật trong bản án là có (hoặc không có) cơ sở; là cần thiết hoặc không cần thiết.
  
  Trường hợp kháng nghị của Chánh án Tòa án nhân dân không có căn cứ hoặc có nội dung trong kháng nghị không có căn cứ và không nhất trí với kháng nghị hoặc một phần kháng nghị, thì Kiểm sát viên phát biểu quan điểm không nhất trí với toàn bộ kháng nghị hoặc một phần của kháng nghị.
  
  Ngoài ra, qua nghiên cứu hồ sơ vụ án, bản án, quyết định bị kháng nghị, Kiểm sát viên có thể phát biểu ý kiến đề nghị Hội đồng xét xử giám đốc thẩm xem xét giải quyết những nội dung quy định tại khoản 2 Điều 342 BLTTDS năm 2015:“Hội đồng xét xử giám đốc thẩm có quyền xem xét phần quyết định của bản án, quyết định đã có hiệu lực pháp luật không bị kháng nghị hoặc không liên quan đến việc xem xét nội dung kháng nghị, nếu phần quyết định đó xâm phạm đến lợi ích công cộng, lợi ích của Nhà nước, lợi ích của người thứ ba không phải là đương sự trong vụ án”.
  
  Cũng cần lưu ý, trường hợp Kiểm sát viên đề nghị Hội đồng xét xử giám đốc đốc thẩm xem xét giải quyết những vấn đề quy định tại khoản 2 Điều 342 BLTTDS phải viện dẫn quy định pháp luật có liên quan để kết luận phần quyết định của bản án, quyết định đã “xâm phạm đến lợi ích công cộng, lợi ích của Nhà nước, lợi ích của người thứ ba…”  
  
  Về trình bày, phát biểu ý kiến của Kiểm sát viên yêu cầu, đề nghị, kiến nghị tại phiên tòa Giám đốc thẩm, Tái thẩm theo quy định tại Điều 51 Quy chế 364.
  
  Về ý kiến đề xuất giải quyết vụ án Giám đốc thẩm, Tái thẩm khi xem xét kháng nghị của Chánh án Tòa án nhân dân, Kiểm sát viên căn cứ vào điều 343 BLTTDS.
  
  4. Kiểm sát các bản án, quyết định giải quyết các vụ việc dân sự của Toà án
  
  4.1. Các quyết định về nội dung bao gồm:
  
  - Quyết định công nhận sự thỏa thuận của các đương sự (Điều 212);
  
  - Quyết định tạm đình chỉ giải quyết vụ án dân sự (Điều 214);
  
  - Quyết định đình chỉ giải quyết vụ án dân sự (Điều 217);
  
  - Quyết định giải quyết việc dân sự (Điều 370);
  
  - Quyết định giám đốc thẩm (Điều 348);
  
  - Quyết định tái thẩm (Điều 357);
  
  - Quyết định của Hội đồng Thẩm phán TANDTC (Điều 360).
  
  4.2. Các quyết định về tố tụng bao gồm:
  
  - Quyết định chuyển vụ việc dân sự cho Tòa án khác (Điều 41 Bộ luật TTDS);
  
  - Quyết định nhập hoặc tách vụ án (khoản 3 Điều 42 Bộ luật TTDS);
  
  - Quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời (khoản 2 Điều 139 Bộ luật TTDS);
  
  - Quyết định giữ nguyên việc trả lại đơn khởi kiện hoặc quyết định yêu cầu TA cấp sơ thẩm nhận lại đơn khởi kiện.... (Điều 194);
  
  - Quyết định đưa vụ án ra xét xử sơ thẩm (Điều 220 Bộ luật TTDS);
  
  - Quyết định hoãn phiên tòa sơ thẩm (Điều 233 Bộ luật TTDS);
  
  - Quyết định đưa vụ án ra xét xử phúc thẩm (Điều 290 Bộ luật TTDS);
  
  - Quyết định hoãn phiên tòa phúc thẩm (Điều 296 Bộ luật TTDS);
  
  - Quyết định đưa vụ án ra xét theo thủ tục rút gọn (Điều 318 BLTDS).
  
  4.3. Kiểm sát quyết định của Tòa án để thực hiện quyền kiến nghị
  
  - Quyết định chuyển vụ việc dân sự cho Tòa án khác (Điều 41 Bộ luật TTDS);
  
  - Quyết định nhập hoặc tách vụ án (khoản 3 Điều 42 Bộ luật TTDS);
  
  - Quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời (khoản 2 Điều 139 Bộ luật TTDS);
  
  - Quyết định giữ nguyên việc trả lại đơn khởi kiện hoặc quyết định yêu cầu TA cấp sơ thẩm nhận lại đơn khởi kiện.... (Điều 194);
  
  - Quyết định đưa vụ án ra xét xử sơ thẩm (Điều 220 Bộ luật TTDS);
  
  - Quyết định hoãn phiên tòa sơ thẩm (Điều 233 Bộ luật TTDS);
  
  - Quyết định đưa vụ án ra xét xử phúc thẩm (Điều 290 Bộ luật TTDS);
  
  - Quyết định hoãn phiên tòa phúc thẩm (Điều 296 Bộ luật TTDS);
  
  - Quyết định đưa vụ án ra xét theo thủ tục rút gọn (Điều 318 BLTDS).
  
  4.4. Kiểm sát bản án, quyết định của Tòa án để thực hiện quyền kháng nghị
  
  - Bản án dân sự sơ thẩm, dân sự phúc thẩm
  
  - Quyết định công nhận sự thỏa thuận của các đương sự (Điều 212);
  
  - Quyết định tạm đình chỉ giải quyết vụ án dân sự (Điều 214);
  
  - Quyết định đình chỉ giải quyết vụ án dân sự (Điều 217);
  
  - Quyết định giải quyết việc dân sự (Điều 370);
  
  - Quyết định giám đốc thẩm (Điều 348);
  
  - Quyết định tái thẩm (Điều 357);
  
  - Quyết định của Hội đồng Thẩm phán TANDTC (Điều 360).
  
  Khi nhận được các loại quyết định và bản án nói trên, cán bộ, Kiểm sát viên được phân công phải vào sổ thụ lý, lập phiếu kiểm sát và hồ sơ kiểm sát theo mẫu hướng dẫn; kiểm tra tính có căn cứ và hợp pháp của bản án, quyết định. Trường hợp phát hiện vi phạm về thời hạn Tòa án gửi bản án, quyết định cho Viện kiểm sát hoặc bản án, quyết định vi phạm về hình thức, sai sót về nội dung không nghiêm trọng thì tập hợp để báo cáo lãnh đạo Viện kiểm sát kiến nghị với Tòa án.
  
  Trường hợp phát hiện vi phạm pháp luật nghiêm trọng thì báo cáo Viện trưởng kháng nghị theo thủ tục phúc thẩm (đối với quyết định tạm đình chỉ, quyết định đình chỉ; bản án, quyết định sơ thẩm chưa có hiệu lực pháp luật) hoặc đề nghị kháng nghị theo thủ tục giám đốc thẩm, tái thẩm (đối với quyết định công nhận sự thỏa thuận của các đương sự; bản án, quyết định sơ thẩm đã có hiệu lực pháp luật hoặc bản án, quyết định phúc thẩm, giám đốc thẩm, tái thẩm).  
  
  Quá trình kiểm sát bản án, quyết định, xét thấy cần thiết để bảo đảm việc kháng nghị phúc thẩm, giám đốc thẩm, tái thẩm hoặc để bảo vệ quan điểm kháng nghị tại phiên tòa, Viện kiểm sát có thể trực tiếp hoặc làm văn bản yêu cầu đương sự, cá nhân, cơ quan, tổ chức cung cấp cho Viện kiểm sát hồ sơ, tài liệu, vật chứng theo quy định tại khoản 4 Điều 85, khoản 2 Điều 94 BLTTDS và hướng dẫn tại Điều 4 của Thông tư liên tịch số 04/2012/TTLT.           
  
  Như vậy, khi thực hiện kiểm sát bản án, quyết định giải quyết vụ việc dân sự của Tòa án, nếu phát hiện có vi phạm trong quá trình giải quyết vụ việc, Viện kiểm sát có quyền yêu cầu, kiến nghị hoặc kháng nghị theo quy định của pháp luật.
  
  5. Kiểm sát vụ án dân sự theo thủ tục Sơ thẩm.
  
  5.1. Kiểm sát các hoạt động tố tụng bắt đầu phiên tòa sơ thẩm
  
  - Điều 22 Quy chế công tác kiểm sát việc giải quyết các vụ việc dân sự quy định: Tại phiên tòa sơ thẩm, Kiểm sát viên kiểm sát việc tuân theo pháp luật của Thẩm phán, Hội đồng xét xử, Thư ký phiên tòa và của những người tham gia tố tụng. Như vậy có thể nói, Kiểm sát viên sẽ tham gia và kiểm sát các hoạt động của Thư ký tòa án trước khi hội đồng xét xử vào làm việc.
  
  - Kiểm sát viên phải nắm chắc được những căn cứ quy định tại Điều 53, Điều 54 BLTTDS năm 2015, đó là các căn cứ xác định thành phần Hội đồng xét xử, Thư ký tòa án có thuộc trường hợp phải từ chối tiến hành tố tụng hoặc bị thay đổi. Nếu phát hiện có những căn cứ thấy rằng Thẩm phán, Hội thẩm nhân dân hoặc Thư ký tòa án thuộc trường hợp phải từ chối tiến hành tố tụng hoặc bị thay đổi thì Kiểm sát viên phải yêu cầu Hội đồng xét xử quyết định việc thay đổi người đó hoặc ra quyết định hoãn phiên tòa trong trường hợp phải thay đổi Thẩm phán, Hội thẩm nhân dân, Thư ký Tòa án.
  
  - Trong phần thủ tục bắt đầu phiên tòa, Kiểm sát viên phải kiểm tra tư cách pháp lý của các đương sự và những người tham gia tố tụng khác theo quy định tại các Điều 68, 75, 77, 79, 81 BLTTDS năm 2015,
  
  - Kiểm sát viên có quyền đề nghị hoãn phiên tòa nếu thuộc các trường hợp quy định tại khoản 2 Điều 56, khoản 2 Điều 62, khoản 2 Điều 84, các điều 227, 229, 230, 231, 232, 241 và các trường hợp khác theo quy định của Bộ luật TTDS.
  
  5.2. Kiểm sát thủ tục tranh tụng tại phiên tòa sơ thẩm
  
  - Đối với việc tham gia kiểm sát tại phiên tòa trong giai đoạn tranh tụng Kiểm sát viên cần căn cứ vào các điều luật từ Điều 247 đến Điều 261 BLTTDS năm 2015.
  
  5.3. Kiểm sát viên tham gia hỏi tại phiên tòa sơ thẩm
  
  - Theo quy định tại khoản 1 Điều 249 BLTTDS năm 2015, thì Kiểm sát viên tham gia hỏi sau khi những người tham gia tố tụng, chủ tọa phiên tòa và Hội thẩm nhân dân đã hỏi xong.
  
  5.4. Kiểm sát viên phát biểu quan điểm của Viện kiểm sát tại phiên tòa sơ thẩm
  
  Căn cứ quy định tại Điều 262 BLTTDS năm 2015 thì sau khi những người tham gia tố tụng phát biểu tranh luận và đối đáp xong, theo đề nghị của chủ tọa phiên tòa, Kiểm sát viên phát biểu ý kiến của Viện kiểm sát.
  
  Để bảo đảm sự thống nhất với quy định của Hiến pháp năm 2013 và quy định của Luật Tổ chức Viện kiểm sát nhân dân, Luật Tổ chức Tòa án nhân dân; đồng thời khắc phục những vướng mắc, bất cập của quy định tại Điều 234 của BLTTDS năm 2004, Điều 262 BLTTDS năm 2015 đã sửa đổi, bổ sung nội dung quy định về phát biểu của kiểm sát viên tại phiên tòa sơ thẩm như sau:
  
  - Sau khi những người tham gia tố tụng phát biểu tranh luận và đối đáp xong, Căn cứ vào các tài liệu, chứng cứ trong hồ sơ vụ án và diễn biến tại phiên tòa, Kiểm sát viên phát biểu ý kiến về việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, Thư ký Tòa và của người tham gia tố tụng dân sự trong quá trình giải quyết vụ án kể từ khi thụ lý cho đến trước thời điểm Hội đồng xét xử nghị án và phát biểu ý kiến về việc giải quyết vụ án theo quy định tại Điều 262 Bộ luật TTDS và hướng dẫn tại Điều 28 của Thông tư liên tịch số; 02/2016/TTLT-VKSNDTC-TANDTC ngày 31/8/2016.
  
  - Căn cứ tại các điều 262, 306, khoản 3 Điều 341, điểm g khoản 1 Điều 369, điểm c khoản 1 Điều 375 quy định: Ngay sau khi kết thúc phiên tòa, phiên họp, Kiểm sát viên phải gửi bản phát biểu ý kiến cho Tòa án để lưu vào hồ sơ vụ việc. Đây là điểm cần chú ý trong thực hiện công tác kiểm sát của Kiểm sát viên.
  
  5.4. Kiểm sát viên kiểm sát việc tuyên án
  
  - Căn cứ vào các điều Điều 266, 267 BLTTDS năm 2015. Kiểm sát viên phải kiểm sát việc tuyên án của Hội đồng xét xử
  
  6. Kiểm sát vụ án dân sự theo thủ tục Phúc thẩm.
  
  6.1. Hoạt động kháng nghị phúc thẩm
  
  - Đối tượng kháng nghị theo thủ tục phúc thẩm là bản án và quyết định sơ thẩm chưa có hiệu lực pháp luật.
  
  - Thời hạn kháng nghị theo trình tự phúc thẩm của người có thẩm quyền tùy theo đối tượng kháng nghị phúc thẩm là bản án hay quyết định sơ thẩm và chủ thể kháng nghị là Viện trưởng Viện kiểm sát cùng cấp với Tòa án cấp sơ thẩm hay Viện trưởng Viện kiểm sát cấp trên trực tiếp để áp dụng theo quy định tại Điều 280 BLTTDS 2015.
  
  Về nội dung và hình thức kháng nghị phúc thẩm của Viện trưởng Viện kiểm sát nhân dân được quy định tại Khoản 1 Điều 279 BLTTDS 2015 và Điều 33 Quy chế Công tác kiểm sát giải quyết các vụ việc dân sự ban hành kèm theo Quyết định 364/QĐ-VKSNDTC ngày 02/10/2017 của Viện trưởng Viện kiểm sát nhân dân tối cao.
  
  6.2. Hoạt động của Kiểm sát viên tại phiên tòa, phiên họp phúc thẩm
  
  - Kiểm sát viên trình bày căn cứ, nội dung kháng nghị của Viện kiểm sát và xuất trình tài liệu chứng cứ bổ sung (nếu có). Kiểm sát viên chú ý lắng nghe đương sự trình bày nội dung, căn cứ kháng cáo, trả lời câu hỏi của Hội đồng xét xử; ý kiến của các đương sự không kháng cáo, người tham gia tố tụng khác, lời khai của người làm chứng…
  
  - Kiểm sát viên kiểm sát việc hỏi và công bố tài liệu chứng cứ, xem xét vật chứng tại phiên tòa phúc thẩm theo qui định tại Điều 303 BLTTDS năm 2015
  
  - Tại phiên tòa phúc thẩm có kháng nghị của Viện kiểm sát thì Kiểm sát viên tranh luận với đương sự về những vấn đề mà người bảo vệ quyền và lợi ích hợp pháp của đương sự, đương sự có ý kiến đối với kháng nghị của Viện kiểm sát theo qui định tại khoản 3 Điều 305 BLTTDS năm 2015.
  
  - Theo qui định tại Điều 306 và Khoản 4 Điều 314 BLTTDS năm 2015 và Điều 30 Thông tư liên tịch số 02/2016/TTLT-VKSNDTC-TANDTC ngày 31/8/2016 của Viện kiểm sát nhân dân tối cao và Tòa án nhân dân tối cao Quy định việc phối hợp giữa Viện kiểm sát nhân dân và Tòa án nhân dân trong việc thi hành một số qui định của BLTTDS 2015 (sau đây gọi tắt là Thông tư 02/2016) thì phát biểu của Kiểm sát viên tại phiên tòa phải đánh giá, nhận xét đầy đủ phần thủ tục cả những việc chấp hành đúng và những hạn chế vi phạm: Việc tuân theo pháp luật tố tụng của Thẩm phán, Hội đồng xét xử, những người tiến hành hành tố tụng khác; việc chấp hành pháp luật của những người tham gia tố tụng; phần quan điểm của Viện kiểm sát đối với kháng cáo, kháng nghị, đề xuất hướng giải quyết vụ án theo qui định tại Điều 308 và Khoản 5 Điều 314 BLTTDS năm 2015.
  
  7. Kiểm sát vụ án dân sự theo thủ tục rút gọn.
  
  7.1. Một số vấn đề lưu ý khi thực hiện kiểm sát giải quyết vụ án dân sự theo thủ tục rút gọn
  
  Để thể chế hóa đường lối cải cách tư pháp về thủ tục rút gọn đối với những vụ án đơn giản, chứng cứ rõ ràng và cụ thể hóa qui định của Hiến pháp và Luật Tổ chức Tòa án nhân dân về xét xử tập thể, trừ trường hợp xét xử theo thủ tục rút gọn, BLTTDS năm 2015 qui định thủ tục rút gọn là thủ tục được áp dụng để giải quyết các vụ án dân sự có đủ điều kiện với trình tự đơn giản so với thủ tục giải quyết các vụ án thông thường nhằm giải quyết vụ án nhanh chóng nhưng vẫn đảm bảo đúng pháp luật.
  
  Thực hiện kiểm sát việc giải quyết vụ án dân sự theo thủ tục rút gọn thì áp dụng những nội dung dưới đây; trường hợp những nội dung dưới đây không đề cập thì áp dụng những qui định khác tương ứng như kiểm sát vụ án dân sự theo thủ tục thông thường.
  
  + Kiểm sát quyết định đưa vụ án ra xét xử theo thủ tục rút gọn
  
  Khi nhận được quyết định đưa vụ án ra xét xử theo thủ tục rút gọn của Tòa án, Kiểm sát viên, Kiểm tra viên phải kiểm tra đối chiếu các điều kiện áp dụng thủ tục rút gọn theo qui định tại Điều 317 BLTTDS năm 2015; kiểm sát về thời hạn ban hành, nội dung, hình thức cũng như việc gửi Quyết định đưa vụ án ra xét xử theo thủ tục rút gọn theo quy định tại Điều 318 BLTTDS năm 2015. Thông qua việc kiểm sát nếu phát hiện quyết định của Tòa án có vi phạm thì báo cáo Lãnh đạo Viện xem xét kiến nghị với Tòa án để khắc phục vi phạm.
  
  7.2. Kiểm sát giải quyết vụ án dân sự theo thủ tục rút gọn
  
  + Giai đoạn sơ thẩm
  
  - Về thời hạn tố tụng khi giải quyết vụ án dân sự theo thủ tục rút gọn được qui định cụ thể, chặt chẽ nên Kiểm sát viên quan tâm kiểm sát việc thực hiện thời hạn tố tụng của Tòa án.
  
  - Việc tham gia phiên tòa sơ thẩm vụ án dân sự theo thủ tục rút gọn vẫn thực hiện qui định tại khoản 2 Điều 21 BLTTDS năm 2015. Thời hạn nghiên cứu hồ sơ để tham gia phiên tòa của Kiểm sát viên là 03 ngày kể từ ngày Viện Kiểm sát nhận hồ sơ do Tòa án chuyển đến theo qui định tại khoản 3 Điều 318 BLTTDS năm 2015.
  
  - Tại phiên tòa sơ thẩm, Kiểm sát viên kiểm sát việc Thẩm phán tiến hành hòa giải theo qui định tại khoản 3 Điều 320 BLTTDS năm 2015.
  
  - Thủ tục giải quyết vụ án dân sự theo thủ tục rút gọn không tổ chức phiên họp kiểm tra việc giao nộp, tiếp cận, công khai chứng cứ và hòa giải riêng mà Thẩm phán thực hiện công việc này ngay sau khi khai mạc phiên tòa. Khi kiểm sát việc hòa giải tại phiên tòa do Thẩm phán chủ trì cần lưu ý về thời hạn sau khi các đương sự hòa giải thành về toàn bộ các vấn đề giải quyết vụ án thì họ có thời gian cân nhắc những vấn đề đã hòa giải thành là 07 ngày. Sau thời hạn này, Thẩm phán ra Quyết định công nhận sự thỏa thuận của các đương sự. Trường hợp các đương sự không thỏa thuận được với nhau về vấn đề phải giải quyết trong vụ án thì Thẩm phán tiến hành xét xử theo thủ tục chung.
  
  - Trong giai đoạn chuẩn bị xét xử hoặc tại phiên tòa sơ thẩm xét xử vụ án dân sự theo thủ tục rút gọn, nếu xuất hiện tình tiết mới qui định tại khoản 3 Điều 317 BLTTDS năm 2015 thì Kiểm sát viên kiến nghị Tòa án chuyển vụ án sang thủ tục thông thường.
  
  - Các hoạt động kiểm sát khác của Kiểm sát viên, Kiểm tra viên trước khi mở phiên tòa, tại phiên tòa và sau phiên tòa sơ thẩm xét xử vụ án dân sự theo thủ tục rút gọn được thực hiện như qui định kiểm sát xét xử sơ thẩm theo thủ tục thông thường.
  
  + Giai đoạn Phúc thẩm
  
  -Thời hạn kháng nghị đối với bản án, quyết định của Tòa án cấp sơ thẩm theo thủ tục rút gọn của Viện kiểm sát cùng cấp là 07 ngày, Viện kiểm sát cấp trên trực tiếp là 10 ngày kể từ ngày nhận được bản án, quyết định theo qui định tại khoản 2 Điều 322 BLTTDS năm 2015.
  
  - Thời hạn nghiên cứu hồ sơ của Viện kiểm sát phúc thẩm là 05 ngày kể từ khi nhận hồ sơ do Tòa án chuyển đến trong trường hợp đương sự kháng cáo hoặc Viện kiểm sát cấp sơ thẩm kháng nghị phúc thẩm theo qui định tại khoản 2 Điều 323 BLTTDS năm 2015.
  
  8. Kiểm sát thủ tục giám đốc thẩm, tái thẩm
  
  8.1. Hoạt động kháng nghị giám đốc thẩm, tái thẩm
  
  - Theo qui định tại khoản 1 Điều 327 của BLTTDS năm 2015 thì đương sự có quyền làm đơn đề nghị xem xét lại bản án, quyết định của Tòa án đã có hiệu lực pháp luật theo trình tự giám đốc thẩm. Đồng thời tại khoản 2 Điều 327 BLTTDS năm 2015 qui định về việc Tòa án, Viện kiểm sát hoặc cơ quan, tổ chức, cá nhân khác phát hiện có vi phạm trong bản án, quyết định của Tòa án có hiệu lực pháp luật thì phải thông báo bằng văn bản cho người có thẩm quyền kháng nghị giám đốc thẩm theo qui định tại Điều 331 BLTTDS năm 2015.
  
  + Đối tượng, thẩm quyền, thời hạn kháng nghị Giám đốc thẩm, Tái thẩm
  
  - Đối tượng kháng nghị theo thủ tục Giám đốc thẩm và Tái thẩm là các bản án, quyết định giải quyết vụ án dân sự đã có hiệu lực pháp luật.
  
  - Thẩm quyền kháng nghị theo trình tự Giám đốc thẩm, Tái thẩm là Viện trưởng Viện kiểm sát nhân dân tối cao và Chánh án Tòa án nhân dân tối cao có quyền kháng nghị các bản án, quyết định giải quyết vụ án dân sự đã có hiệu lực pháp luật của Tòa án nhân dân các cấp trừ Quyết định của HĐTP TANDTC.
  
  - Thời hạn kháng nghị Giám đốc thẩm: thời hạn kháng nghị theo thủ tục Giám đốc thẩm là 3 năm kể từ ngày bản án, quyết định giải quyết vụ án dân sự có hiệu lực pháp luật theo quy định tại Khoản 1 Điều 334 BLTTDS năm 2015 và trong trường hợp quy định tại Khoản 2 Điều 334 BLTTDS năm 2015 thì thời hạn kháng nghị giám đốc thẩm được kéo dài thêm 2 năm.
  
  - Thời hạn kháng nghị Tái thẩm: thời hạn kháng nghị theo thủ tục Tái thẩm là 1 năm kể từ ngày người có thẩm quyền kháng nghị biết được căn cứ để kháng nghị theo thủ tục Tái thẩm quy định tại Điều 352 theo quy định tại Điều 355 BLTTDS năm 2015.
  
  - Quyết định kháng nghị Giám đốc thẩm, Tái thẩm của Viện trưởng Viện kiểm sát được thực hiện theo quy định tại Điều 333 BLTTDS năm 2015, Điều 48 Quy chế 364 và mẫu số 31 Quyết định 204/QĐ-VKSTC.
  
  - Về nội dung đề nghị của Viện trưởng Viện kiểm sát kháng nghị Giám đốc thẩm trên cơ sở thẩm quyền của HĐXX Giám đốc thẩm được quy định tại Điều 343 BLTTDS năm 2015
  
  8.2. Kiểm sát giải quyết vụ án dân sự theo trình tự giám đốc thẩm, tái thẩm
  
  - Trước phiên tòa
  
  + Kiểm sát viên xem xét tính có căn cứ và hợp pháp của kháng nghị; căn cứ đơn đề nghị kháng nghị của đương sự; thời hạn kháng nghị; thẩm quyền và nội dung kháng nghị có đúng hay không theo qui định tại các điều 326, 327, 331, 333, 334 BLTTDS năm 2015 (trong trường hợp kháng nghị giám đốc thẩm) và các Điều 352, 353, 354, 355 BLTTDS (trong trường hợp kháng nghị tái thẩm), đề xuất hướng giải quyết vụ án, báo cáo Lãnh đạo Viện kiểm sát cấp cao hoặc VKSNDTC nhất trí hay không nhất trí kháng nghị.
  
  - Tại phiên tòa
  
  + Kiểm sát viên tham gia phiên tòa giám đốc thẩm, tái thẩm vụ án dân sự theo qui định tại khoản 1 Điều 338 và Điều 357 BLTTDS năm 2015. Trong mọi trường hợp Kiểm sát viên phải tham gia phiên tòa giám đốc thẩm, tái thẩm không phụ thuộc vào việc Viện trưởng Viện kiểm sát cấp cao hay Viện trưởng Viện kiểm sát tối cao kháng nghị hay không.
  
  + Kiểm sát viên kiểm sát thủ tục phiên tòa từ khi bắt đầu đến khi Hội đồng xét xử ra quyết định:
  
  * Kiểm sát thành phần Hội đồng xét xử, Thư ký và Thẩm tra viên: Xem trường hợp nào phải từ chối hoặc thay đổi khi tiến hành tố tụng. Xem xét việc xét xử với thành phần Ủy ban Thẩm phán của Tòa án cấp cao 03 người hay toàn thể và Hội đồng thẩm phán TANDTC là 05 người hay toàn thể.
  
  * Kiểm sát việc triệu tập và sự có mặt, vắng mặt của các đương sự và những người tham gia tố tụng khác theo qui định tại khoản 2 Điều 341 BLTTDS.
  
  * Kiểm sát việc cung cấp và công bố tài liệu, chứng cứ mới tại phiên tòa.
  
  * Kiểm sát Hội đồng xét xử nghị án, biểu quyết và công bố nội dung quyết định về việc giải quyết vụ án theo qui định tại khoản 4, 5 và 6 Điều 341, Điều 342, Điều 343, Điều 356 và Điều 357 BLTTDS năm 2015.
  
  * Kiểm sát biên bản phiên tòa theo qui định tại Điều 236 BLTTDS năm 2015.
  
  + Các hoạt động của Kiểm sát viên tại phiên tòa:
  
  * Trình bày nội dung và căn cứ kháng nghị của Viện trưởng VKSND cấp cao hoặc Viện trưởng VKSNDTC.
  
  * Công bố tài liệu chứng cứ mới do Viện Kiểm sát thu thập để làm rõ hơn nội dung kháng nghị (nếu có).
  
  * Tranh luận với các chủ thể về kháng nghị của Viện kiểm sát. Các chủ thể này có thể là thành viên HĐXX hoặc đương sự và những người tham gia tố tụng khác nếu họ được triệu tập đến phiên tòa giám đốc thẩm, tái thẩm.
  
  * Kiểm sát viên thực hiện các quyền yêu cầu, kiến nghị: Yêu cầu HĐXX công bố tài liệu chứng cứ mới, đề nghị HĐXX tạm ngừng phiên tòa khi cần thiết. Trường hợp HĐXX không chấp nhận yêu cầu, đề nghị của Kiểm sát viên thì Kiểm sát viên vẫn tiếp tục tham gia phiên tòa và thực hiện quyền hạn trách nhiệm theo qui định.
  
  * Về trình bày kháng nghị Giám đốc thẩm, Tái thẩm và phát biểu ý kiến của Kiểm sát viên về việc giải quyết vụ án tại phiên tòa Giám đốc thẩm, Tái thẩm do Viện trưởng Viện kiểm sát kháng nghị.
  
  Theo quy định tại Khoản 1 Điều 31 Thông tư liên tịch số 02/2016, mẫu số 39 Quyết định 204, trường hợp do Viện trưởng Viện kiểm sát kháng nghị thì tại phiên tòa, Kiểm sát viên trình bày nội dung, tính có căn cứ và hợp pháp của kháng nghị. Nếu Hội đồng giám đốc thẩm yêu cầu trình bày về căn cứ kháng nghị thì Kiểm sát viên phân tích làm rõ thêm các căn cứ, tình tiết trong hồ sơ mà bản án phúc thẩm chấp nhận hoặc không chấp nhận không có căn cứ, vi phạm pháp luật. Ví dụ Hội đồng xét xử giám đốc thẩm đề nghị trình bày căn cứ của nhận định “Hợp đồng bảo lãnh thế chấp tài sản” của hợp đồng tín dụng là vô hiệu, Kiểm sát viên phải chứng minh bằng tài liệu, chứng cứ chứng minh vô hiệu về hình thức hoặc vi phạm về nội dung do tài sản bảo lãnh không thuộc quyền sở hữu của người bảo lãnh…
  
  Về phát biểu ý kiến giải quyết vụ án thì Kiểm sát viên đề xuất một trong những nội dung quy định tại các Khoản 2,3,4,5 Điều 243 BLTTDS năm 2015.
  
  * Về phát biểu ý kiến của Kiểm sát viên tại phiên tòa Giám đốc thẩm, Tái thẩm do Chánh án kháng nghị:
  
  Theo quy định tại Khoản 2 Điều 31 Thông tư liên tịch số 02/2016, mẫu số 40 Quyết định 204, trường hợp Chánh án Tòa án kháng nghị thì tại phiên tòa, Kiểm sát viên trình bày tính có căn cứ và hợp pháp của kháng nghị; căn cứ đơn đề nghị của đương sự, thời hạn kháng nghị, thẩm quyền và nội dung của quyết định kháng nghị của Chánh án Tòa án nhân dân đã theo đúng hoặc không đúng một trong các điều Điều 328, Điều 329, Điều 333 và Điều 334 BLTTDS năm 2015; kháng nghị đối với vi phạm pháp luật trong bản án là có (hoặc không có) cơ sở; là cần thiết hoặc không cần thiết.
  
  -Về trình bày, phát biểu ý kiến của Kiểm sát viên yêu cầu, đề nghị, kiến nghị tại phiên tòa Giám đốc thẩm, Tái thẩm theo quy định tại Điều 51 Quy chế 364.
  
  Về ý kiến đề xuất giải quyết vụ án Giám đốc thẩm, Tái thẩm khi xem xét kháng nghị của Chánh án Tòa án nhân dân, Kiểm sát viên căn cứ vào điều 343 BLTTDS năm 2015.
  
  - Kiểm sát sau phiên tòa giám đốc thẩm, tái thẩm
  
  Sau phiên tòa Giám đốc thẩm, Tái thẩm, Kiểm sát viên phải thực hiện báo cáo kết quả xét xử Giám đốc thẩm, Tái thẩm và kiểm sát quyết định Giám đốc thẩm, Tái thẩm theo quy định tại Điều 52 và Điều 53 Quy chế kiểm sát giải quyết các vụ việc dân sự.
  
  9. Kỹ năng kiểm sát thủ tục đặc biệt xem xét lại quyết định của Hội đồng thẩm phán TANDTC.
  
  91. Kiến nghị của Viện trưởng VKSNDTC với Hội đồng thẩm phán TANDTC xem xét lại Quyết định của Hội đồng thẩm phán TANDTC
  
  Trên cơ sở nghiên cứu tài liệu hồ sơ vụ án, đơn vị nghiệp vụ xác định những nội dung kiến nghị và báo cáo Viện trưởng VKSNDTC. Để thận trọng và xem xét tổng thể, Viện trưởng VKSNDTC nên triệu tập cuộc họp Ủy ban kiểm sát VKSNDTC để tham khảo ý kiến về dự thảo kiến nghị. Văn bản kiến nghị của Viện trưởng với Hội đồng thẩm phán TANDTC về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC phải chặt chẽ, logic về hình thức, nội dung, đảm bảo tính có căn cứ pháp luật và đề xuất hướng giải quyết vụ án tiếp theo theo qui định tại khoản 1 và khoản 3 Điều 358 BLTTDS năm 2015.
  
  9.2. Nghiên cứu yêu cầu của Ủy ban thường vụ Quốc hội và kiến nghị, đề nghị của Ủy ban Tư pháp của Quốc hội và Chánh án Tòa án nhân dân tối cao về xem xét lại Quyết định của Hội đồng thẩm phán Tòa án nhân dân tối cao
  
  Đơn vị nghiệp vụ của Viện KSNDTC nghiên cứu hồ sơ và đề xuất quan điểm của Viện trưởng VKSNDTC về yêu cầu của Ủy ban thường vụ Quốc hội, kiến nghị của Ủy ban Tư pháp của Quốc hội và đề nghị của Chánh án Tòa án nhân dân tối cao về xem xét lại Quyết định của Hội đồng thẩm phán Tòa án nhân dân tối cao theo qui định tại khoản 1 Điều 359 BLTTDS.
  
  Trong trường hợp cần thiết, đơn vị nghiệp vụ VKSNDTC trao đổi với các cơ quan và người có thẩm quyền liên quan đến yêu cầu của Ủy ban thường vụ Quốc hội, kiến nghị của Ủy ban Tư pháp của Quốc hội và đề nghị của Chánh án Tòa án nhân dân tối cao xem xét lại Quyết định của Hội đồng thẩm phán TANDTC.
  
  Đơn vị nghiệp vụ trình văn bản dự thảo của Viện trưởng VKSNDTC đối với yêu cầu của Ủy ban thường vụ Quốc hội, kiến nghị của Ủy ban Tư pháp của Quốc hội, đề nghị của Chánh án Tòa án nhân dân tối cao về xem xét lại Quyết định của Hội đồng thẩm phán Tòa án nhân dân tối cao.
  
  9.3. Tham dự phiên họp của Hội đồng thẩm phán Tòa án nhân dân tối cao xem xét đề nghị, kiến nghị của Ủy ban Tư pháp của Quốc hội, Viện trưởng VKSNDTC và của Chánh án Tòa án nhân dân tối cao
  
  Viện trưởng VKSNDTC hoặc Phó Viện trưởng VKSNDTC được Viện trưởng ủy quyền và đại diện đơn vị nghiệp vụ của VKSNDTC tham dự phiên họp của Hội đồng thẩm phán TANDTC xem xét kiến nghị, đề nghị theo qui định tại khoản 4 Điều 358 BLTTDS năm 2015. Khi tham dự phiên họp này, Viện trưởng VKSNDTC và đại diện đơn vị nghiệp vụ có nhiệm vụ kiểm sát thành phần, thủ tục, nội dung xem xét và quyết định của Hội đồng thẩm phán TANDTC về kiến nghị và đề nghị của cơ quan và người có thẩm quyền theo qui định tại khoản 2, điểm a, d, đ, e, g khoản 3 Điều 359 BLTTDS năm 2015.
  
  Viện trưởng VKSNDTC tranh luận, trao đổi những vấn đề cần thiết đề Hội đồng thẩm phán TANDTC xem xét, quyết định.
  
  - Viện trưởng VKSNDTC phát biểu quan điểm về kiến nghị, đề nghị của cơ quan, người có thẩm quyền. Nội dung phát biểu của Viện trưởng VKSNDTC phải trình bày những nội dung, căn cứ kiến nghị, đề nghị; phân tích, đánh giá các tình tiết của vụ án, chứng cứ cũ và chứng cứ mới bổ sung (nếu có) để làm rõ vi phạm pháp luật nghiêm trọng trong quyết định của Hội đồng thẩm phán TANDTC hoặc những tình tiết quan trọng mới có thể làm thay đổi cơ bản những quyết định của Hội đồng thẩm phán TANDTC; quan điểm và lý do của Viện trưởng VKSNDTC nhất trí hay không nhất trí với kiến nghị, đề nghị; ý kiến của Viện trưởng VKSNDTC phải thể hiện bằng văn bản có chữ ký của Viện trưởng và phải gửi cho TANDTC trong thời hạn 05 ngày làm việc kể từ ngày kết thúc phiên họp theo qui định tại điểm b, c khoản 3 Điều 359 BLTTDS.
  
  9.4. Tham dự phiên họp của Hội đồng thẩm phán TANDTC về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC
  
  Viện trưởng VKSNDTC hoặc Phó Viện trưởng VKSNDTC được Viện trưởng ủy nhiệm phải tham dự phiên họp của Hội đồng thẩm phán TANDTC về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC theo qui định tại khoản 6 Điều 359 BLTTDS năm 2015.
  
  Đơn vị nghiệp vụ của VKSNDTC nghiên cứu hồ sơ và đề xuất quan điểm với Viện trưởng VKSNDTC về yêu cầu, kiến nghị, đề nghị của cơ quan và người có thẩm quyền xem xét lại Quyết định của Hội đồng thẩm phán TANDTC.
  
  Viện trưởng VKSNDTC và đại diện đơn vị nghiệp vụ có liên quan khi tham dự phiên họp của Hội đồng thẩm phán TANDTC về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC có nhiệm vụ kiểm sát thành phần, thủ tục của phiên họp của Hội đồng thẩm phán TANDTC về yêu cầu, kiến nghị, đề nghị của cơ quan có thẩm quyền về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC theo qui định tại khoản 5 Điều 359 BLTTDS năm 2015.
  
  Viện trưởng VKSNDTC tranh luận, trao đổi những vấn đề cần thiết đề Hội đồng thẩm phán TANDTC xem xét lại Quyết định của Hội đồng thẩm phán TANDTC.
  
  Viện trưởng VKSNDTC phát biểu quan điểm về xem xét lại Quyết định của Hội đồng thẩm phán TANDTC theo qui định tại khoản 6 Điều 359 BLTTDS năm 2015.
  
  Viện trưởng VKSNDTC và đại diện đơn vị nghiệp vụ kiểm sát việc Hội đồng thẩm phán TANDTC quyết định những nội dung cụ thể khi xem xét lại Quyết định của Hội đồng thẩm phán TANDTC theo qui định tại Điều 360 BLTTDS năm 2015.
  
  Trên cơ sở kết quả của việc xem xét lại Quyết định của Hội đồng thẩm phán TANDTC, đơn vị nghiện vụ VKSNDTC thông báo đến Viện Kiểm sát nhân dân có liên quan về kết quả xem xét lại Quyết định của Hội đồng thẩm phán TANDTC.
  
  10. Kỹ năng kiểm sát giải quyết việc dân sự
  
  Căn cứ điều 27, 29, 31, 33 BLTTDS năm 2015. Những việc dân sự thuộc quyền kiểm sát của Viện kiểm sát bao gồm:
  
  - Các yêu cầu về dân sự quy định tại Điều 27 BLTTDS năm 2015;
  
  - Các yêu cầu về hôn nhân gia đình quy định tại Điều 29 BLTTDS năm 2015;
  
  - Các yêu cầu về kinh doanh, thương mại quy định tại Điều 31 BLTTDS năm 2015;
  
  - Các yêu cầu về lao động quy định tại Điều 33 BLTTDS năm 2015.
  
  10.1. Kỹ năng Kiểm sát việc xử lý đơn yêu cầu
  
  10.1.1. Kiểm sát việc trả lại đơn yêu cầu
  
  + Vào sổ thụ lý kiểm sát việc trả lại đơn yêu cầu
  
  + Lập hồ sơ kiểm sát việc trả lại đơn yêu cầu
  
  + Xác định vi phạm pháp luật và kiến nghị Tòa án khắc phục
  
  10.1. Kiểm sát việc thông báo thụ lý đơn yêu cầu
  
  + Vào sổ thụ lý kiểm sát thông báo về việc thụ lý đơn yêu cầu
  
  + Báo cáo lãnh đạo viện phân công Kiểm sát viên
  
  + Lập phiếu kiểm sát thông báo về việc thụ lý
  
  + Xác định vi phạm pháp luật và kiến nghị Tòa án khắc phục
  
  10.2. Kỹ năng Kiểm sát thủ tục giải quyết việc dân sự theo trình tự sơ thẩm
  
  10.2.1. Kỹ năng của Kiểm sát viên trước khi mở phiên họp
  
  + Viện kiểm sát nghiên cứu trong thời hạn 07 ngày, kể từ ngày nhận được hồ sơ (đối với nhóm việc dân sự 1 quy định tại khoản 3 Điều 366 BLTTDS năm 2015 và khoản 2 Điều 71 Luật Trọng tài thương mại năm 2010)
  
  + Viện kiểm sát nghiên cứu trong thời hạn 15 ngày, kể từ ngày nhận được hồ sơ ( đối với nhóm việc dân sự 2 quy định tại khoản 3 Điều 437, khoản 3 Điều 446, khoản 1 Điều 449, khoản 1 Điều 457 BLTTDS năm 2015).
  
  + Kiểm sát viên dự kiến nội dung, chuẩn bị bản phát biểu theo Mẫu số 25 ban hành kèm theo Quyết định số 204/2017/QĐ-VKSTC để trình bày ý kiến của Viện kiểm sát về việc giải quyết vụ việc trước Tòa án và báo cáo lãnh đạo Viện cấp mình về việc giải quyết việc dân sự.
  
  10.2.2. Hoạt động của Kiểm sát viên tại phiên họp
  
  + Khi Toà án mở phiên họp, Kiểm sát viên phải kiểm sát việc chấp hành các thủ tục tố tụng của Thẩm phán hoặc của Hội đồng xét đơn yêu cầu (gồm ba Thẩm phán), Thư ký và những người tham gia tố tụng khác theo quy định của BLTTDS năm 2015 và khoản 3, 4, 5 Điều 71 Luật Trọng tài thương mại năm 2010.
  
  + Kiểm sát viên phát biểu ý kiến của Viện kiểm sát về giải quyết việc dân sự
  
  10.2.3. Hoạt động của Kiểm sát viên sau phiên họp
  
  + Ngay sau khi kết thúc phiên họp, Kiểm sát viên gửi văn bản phát biểu ý kiến cho Tòa án để lưu vào hồ sơ việc dân sự
  
  10.3. Kỹ năng Kiểm sát thủ tục giải quyết việc dân sự theo trình tự Phúc thẩm
  
  10.3.1. Hoạt động kháng nghị phúc thẩm của Viện kiểm sát
  
  + Thẩm quyền kháng nghị của Viện kiểm sát
  
  - Việc dân sự nhóm 1, gồm những yêu cầuquy định tại các khoản 1, 2, 3, 4, 6, 7, 8, 9 và 10 Điều 27, các khoản 1, 2, 3, 4, 5, 6, 7, 8, 10 và 11 Điều 29, các khoản 1, 2, 3 và 6 Điều 31, các khoản 1, 2 và 5 Điều 33 của BLTTDS năm 2015,
  
  - Việc dân sự nhóm 2, gồm những yêu cầuquy định tại các khoản 5 Điều 27; khoản 9 Điều 29; khoản 4, 5 Điều 31; khoản 3, 4 Điều 33 của BLTTDS năm 2015;
  
  - Việc dân sự nhóm 3, gồm những yêu cầuquy định tại khoản 2 Điều 31 BLTTDS năm 2015 là những việc dân sự liên quan đến hoạt động của Trọng tài thương mại Việt Nam gồm:
  
  + Chỉ định, thay đổi Trọng tài viên;
  
  + Áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời;
  
  + Hủy phán quyết trọng tài;
  
  + Giải quyết khiếu nại đối với quyết định của Hội đồng trọng tài về thỏa thuận trọng tài vô hiệu, thỏa thuận trọng tài không thể thực hiện được, thẩm quyền của Hội đồng trọng tài;
  
  + Thu thập chứng cứ;
  
  + Triệu tập người làm chứng;
  
  + Đăng ký phán quyết trọng tài;
  
  + Các việc dân sự khác mà pháp luật về Trọng tài thương mại Việt Nam có quy định.
  
  + Thẩm quyền kháng nghị Đối với việc dân sự thuộc nhóm 1. Theo Điều 371 BLTTDS năm 2015 thẩm quyền kháng nghị thuộc về Viện kiểm sát cùng cấp (cấp huyện) và Viện kiểm sát cấp trên trực tiếp (cấp tỉnh).
  
  + Thẩm quyền kháng nghị Đối với việc dân sự nhóm 2 và yêu cầu xét tính hợp pháp của việc đình công thì Viện kiểm sát cùng cấp (cấp tỉnh) và Viện kiểm sát cấp trên (Viện kiểm sát nhân dân cấp cao) có quyền kháng nghị quyết định giải quyết việc dân sự của Toà án (Điều 405, 412, 426 BLTTDS năm 2015). Bởi đây là những việc dân sự thuộc thẩm quyền của Toà án nhân dân cấp tỉnh giải quyết theo thủ tục sơ thẩm.
  
  + Phạm vi kháng nghị Căn cứ Điều 371 BLTTDS năm 2015
  
  + Thời hạn kháng nghị
  
  - Viện kiểm sát cùng cấp có quyền kháng nghị quyết định giải quyết việc dân sự trong thời hạn 10 ngày, Viện kiểm sát cấp trên trực tiếp có quyền kháng nghị trong thời hạn 15 ngày, kể từ ngày Tòa án ra quyết định.
  
  - Đối với những việc dân sự quy định tại Phần thứ bảy BLTTDS năm 2015 (những việc dân sự thuộc nhóm 2), thì thời hạn kháng nghị có quy định riêng:
  
  - Đối với quyết định của Tòa án quy định tại khoản 4 và khoản 5 Điều 437 và khoản 5 Điều 438 của BLTTDS năm 2015, thì thời hạn kháng nghị của Viện kiểm sát nhân dân cấp tỉnh là 07 ngày, của Viện kiểm sát nhân dân cấp cao là 10 ngày, kể từ ngày Viện kiểm sát nhận được quyết định (khoản 2 Điều 442).
  
  - Đối với quyết định của Tòa án quy định tại khoản 2 và khoản 3 Điều 457 và khoản 5 Điều 458 của BLTTDS năm 2015, thời hạn kháng nghị của Viện kiểm sát nhân dân cấp tỉnh là 07 ngày, của Viện kiểm sát nhân dân cấp cao là 10 ngày, kể từ ngày Viện kiểm sát nhận được quyết định (khoản 2 Điều 461).
  
  + Thay đổi, bổ sung, rút kháng nghị
  
  - Trong trường hợp xét thấy kháng nghị không cần thiết thì Viện kiểm sát ra quyết định kháng nghị có quyền thay đổi, bổ sung, rút kháng nghị đối với quyết định giải quyết việc dân sự của Toà án theo quy định tại Điều 284, điểm c khoản 2 Điều 373 BLTTDS năm 2015.Trường hợp Viện kiểm sát rút kháng nghị thì Tòa án ra quyết định đình chỉ giải quyết việc xét đơn yêu cầu theo thủ tục phúc thẩm.
  
  10.3.2. Kiểm sát việc xét kháng cáo, kháng nghị
  
  Đây là hoạt động kiểm sát giải quyết việc dân sự theo thủ tục “phúc thẩm”. Ở thủ tục này Kiểm sát viên Viện Kiểm sát cùng cấp phải tham gia phiên họp phúc thẩm giải quyết việc dân sự; trường hợp Kiểm sát viên vắng mặt thì Tòa án vẫn tiến hành phiên họp, trừ trường hợp Viện kiểm sát kháng nghị phúc thẩm theo quy định tại khoản 2 Điều 21; khoản 1 Điều 374, khoản 2 Điều 407; khoản 2 Điều 438, khoản 3 Điều 446, khoản 1 Điều 449 và khoản 2 Điều 458 BLTTDS năm 2015.
  
  10.4. Kỹ năng Kiểm sát giải quyết việc dân sự theo thủ tục giám đốc thẩm , tái thẩm
  
  10.4.1. Đối với những việc dân sự nhóm 1
  
  BLTTDS năm 2015, Phần thứ sáu không có quy định riêng về thủ tục giám đốc thẩm, tái thẩm, do vậy, áp dụng Điều 361 BLTTDS năm 2015 thì quyết định giải quyết việc dân sự nhóm này vẫn có thể bị kháng nghị theo trình tự giám đốc thẩm, tái thẩm.
  
  10.4.2. Đối với những việc dân sự nhóm 2
  
  BLTTDS năm 2015 quy định về hiệu lực của phán quyết của Toà án nhân dân cấp cao khi xét quyết định của Toà án nhân dân cấp tỉnh bị kháng cáo, kháng nghị: “Quyết định của Tòa án nhân dân cấp cao có hiệu lực pháp luật kể từ ngày ra quyết định và có thể bị kháng nghị theo thủ tục giám đốc thẩm, tái thẩm theo quy định của Bộ luật này” (khoản 6 Điều 443, khoản 3 Điều 446, Điều 450 và khoản 6 Điều 462), quy định này có thể hiểu những việc dân sự loại này vẫn có thủ tục giám đốc thẩm, tái thẩm.
  
  10.4.3. Đối với những việc dân sự nhóm 3
  
  Việc dân sự liên quan đến hoạt động Trọng tài thương mại Việt Nam, đặc biệt là việc hủy phán quyết trọng tài, căn cứ khoản 10 Điều 71 Luật Trọng tài thương mại quy định về giá trị của quyết định giải quyết yêu cầu hủy phán quyết của trọng tài thương mại, theo đó, ”Quyết định của Tòa án là quyết định cuối cùng và có hiệu lực thi hành”` },
            { title: '1.3. Những việc khác', content: `Kiểm sát việc tuân theo pháp luật trong quá trình tiến hành thủ tục phá sản doanh nghiệp, hợp tác xã.
  
  Căn cứ các quy định của Luật phá sản năm 2004; Nghị quyết số 03/2005/NQ-HĐTP ngày 28/4/2005 của Hội đồng Thẩm phán TANDTC hướng dẫn thi hành một số quy định của Luật Phá sản và các quy định của BLTTDS thì Viện kiểm sát nhân dân có nhiệm vụ, quyền hạn:
  
  - Kiểm sát các quyết định của Thẩm phán trong quá trình tiến hành thủ tục phá sản doanh nghiệp, hợp tác xã.
  
  - Kháng nghị đối với quyết định của Tòa án trong quá trình tiến hành thủ tục phá sản.
  
  - Tham gia phiên họp xét kháng nghị quyết định mở thủ tục thanh lý tài sản, quyết định tuyên bố doanh nghiệp, hợp tác xã bị phá sản.
  
  - Yêu cầu, kiến nghị với Tòa án khắc phục vi phạm trong quá trình tiến hành thủ tục phá sản theo đúng quy định của pháp luật.
  
  Kiểm sát việc tuân theo pháp luật của Tòa án trong quá trình giải quyết yêu cầu xét tính hợp pháp của cuộc đình công.
  
  Căn cứ khoản 3 Điều 32 BLTTDS Viện kiểm sát nhân dân có nhiệm vụ, quyền hạn kiểm sát việc tuân theo pháp luật trong quá trình Tòa án giải quyết yêu cầu xét tính hợp pháp của cuộc đình công. Khi kiểm sát, Viện kiểm sát có quyền yêu cầu, kiến nghị theo trình tự, thủ tục tương tự như trong thủ tục giải quyết các vụ việc dân sự nếu phát hiện có vi phạm.` }
          ] 
        },
        { 
          title: '2. HOẠT ĐỘNG KIỂM SÁT', 
          subsections: [
            { title: '2.1. Vụ án dân sự', content: `Hoạt động của Kiểm sát viên trước khi mở phiên tòa
  Khi nhận được hồ sơ về những vụ án mà Kiểm sát viên phải tham gia phiên tòa sơ thẩm (những vụ án do Tòa án tiến hành thu thập chứng cứ hoặc đối tượng tranh chấp là tài sản công, lợi ích công cộng, quyền sử dụng đất, nhà ở hoặc có một bên đương sự là người chưa thành niên, người có nhược điểm về thể chất, tâm thần) Kiểm sát viên phải nghiên cứu, vào sổ thụ lý, báo cáo lãnh đạo Viện để quyết định việc tham gia phiên toà. Kiểm sát viên thông báo bằng văn bản cho Tòa án về việc tham gia phiên tòa
  - Căn cứ khoản 1 Điều 8 Quy chế KSDS thì trước khi tham gia phiên tòa, Kiểm sát viên phải nghiên cứu hồ sơ vụ án, lập hồ sơ kiểm sát, trích cứu đầy đủ, trung thực lời khai của đương sự và các tài liệu khác; nắm vững nội dung vụ án, phân tích tổng hợp chứng cứ; áp dụng điều, khoản của BLTTDS, BLDS và các văn bản pháp luật có liên quan để dự kiến đường lối xử lý vụ án, báo cáo lãnh đạo Viện, chuẩn bị ý kiến phát biểu của Viện kiểm sát tại phiên toà.
  Hoạt động của kiểm sát viên tại phiên tòa sơ thẩm.
  Tại phiên tòa sơ thẩm, Kiểm sát viên tiến hành các hoạt động:
  - Kiểm tra tư cách pháp lý của những người tiến hành tố tụng và những người tham gia tố tụng;
  - Kiểm tra số lượng, điều kiện tham gia Hội đồng xét xử của mỗi thành viên Hội đồng xét xử, đối chiếu danh sách Hội đồng xét xử trên thực tế với danh sách Hội đồng xét xử được ghi trong quyết định đưa vụ án ra xét xử; kiểm tra tư cách pháp lý của Thư ký Tòa án.
  - Yêu cầu Hội đồng xét xử quyết định việc thay đổi Thẩm phán hoặc Hội thẩm nhân dân nếu họ thuộc trường hợp phải từ chối tiến hành tố tụng hoặc bị thay đổi theo quy định tại Điều 47 BLTTDS, hoặc Thư ký Tòa án nếu thuộc trường hợp phải từ chối tiến hành tố tụng hoặc bị thay đổi theo quy định tại Điều 49 BLTTDS.
  - Đề nghị Hội đồng xét xử ra quyết định hoãn phiên tòa trong trường hợp phải thay đổi Thẩm phán, Hội thẩm nhân dân, Thư ký Tòa án.
  - Kiểm tra tư cách pháp lý của các đương sự và những người tham gia tố tụng khác theo quy định tại các điều 56, 63, 65, 67, 68 BLTTDS.
  - Yêu cầu Hội đồng xét xử quyết định việc thay đổi người giám định, người phiên dịch nếu họ thuộc trường hợp phải từ chối tiến hành tố tụng hoặc bị thay đổi theo quy định tại khoản 3 Điều 68 và khoản 3 Điều 70 BLTTDS.
  - Đề nghị Hội đồng xét xử hoãn phiên tòa trong các trường hợp:
  + Phải thay đổi người giám định, người phiên dịch theo quy định tại Điều 72 BLTTDS.
  + Đương sự, người bảo vệ quyền và lợi ích hợp pháp của đương sự vắng mặt lần thứ nhất có lý do chính đáng theo quy định tại Điều 199, 202 BLTTDS;
  + Bị đơn vắng mặt lần thứ nhất có lý do chính đáng theo quy định tại Điều 199 BLTTDS;
  + Người có quyền lợi, nghĩa vụ liên vắng mặt lần thứ nhất có lý do chính đáng theo quy định tại Điều 199 BLTTDS;
  + Người làm chứng, người giám định, người phiên dịch vắng mặt mà sự vắng mặt của họ gây trở ngại cho việc xét xử vụ án.
  + Khi có người tham gia tố tụng vắng mặt tại phiên tòa mà không thuộc trường hợp Tòa án phải hoãn phiên tòa, nhưng Kiểm sát viên xét thấy cần phải hoãn phiên tòa để chờ có sự tham gia của người này nhằm bảo đảm việc giải quyết vụ án được đúng đắn. Nếu Hội đồng xét xử không chấp nhận yêu cầu của Kiểm sát viên về việc thay đổi những người tiến hành tố tụng hoặc những người tham gia tố tụng mà vẫn tiếp tục xét xử thì Kiểm sát viên phải tham gia phiên tòa và phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ án, nhưng ngay sau phiên tòa, Kiểm sát viên phải báo cáo ngay với lãnh đạo Viện để xem xét, quyết định.
  - Kiểm sát việc chấp hành thủ tục tố tụng tại phiên tòa của Hội đồng xét xử, Thư ký Tòa án và những người tham gia tố tụng từ khi bắt đầu đến khi kết thúc phiên tòa, bao gồm: Thủ tục bắt đầu phiên tòa; thủ tục hỏi tại phiên tòa; thủ tục tranh luận tại phiên tòa; thủ tục nghị án và tuyên án. Yêu cầu Hội đồng xét xử khắc phục kịp thời nếu phát hiện có vi phạm về thủ tục tố tụng.
  - Theo dõi và ghi chép việc hỏi và trình bày ý kiến tại phiên tòa.
  - Tham gia hỏi sau khi các đương sự đã hỏi xong theo thứ tự quy định tại Điều 222 BLTTDS. Khi tham gia hỏi, Kiểm sát viên phải tôn trọng sự điều khiển của Chủ tọa phiên tòa; tôn trọng quyền và nghĩa vụ của những người tham gia tố tụng; Đặt câu hỏi ngắn gọn, rõ ràng, dễ hiểu; câu hỏi không được mang tính chất gợi ý trước hướng trả lời. Khi hỏi xong, Kiểm sát viên phải tập trung lắng nghe câu trả lời; ghi lại thông tin trong câu trả lời; phân tích thông tin trong câu trả lời, so sánh, đối chiếu với câu hỏi để xem câu trả lời đã đáp ứng được yêu cầu của câu hỏi hay chưa. Kiểm sát viên có thể hỏi lại, hỏi bổ sung. Khi kết thúc đợt hỏi, Kiểm sát viên nói với Chủ tọa là mình đã hỏi xong.
  - Phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ án.
  Căn cứ quy định tại Điều 234 BLTTDS, tại phiên tòa, để thực hiện nhiệm vụ kiểm sát việc tuân theo pháp luật, Kiểm sát viên phát biểu ý kiến về việc tuân theo pháp luật tố tụng trong quá trình giải quyết vụ án của Thẩm phán, Hội đồng xét xử; việc chấp hành pháp luật của người tham gia tố tụng dân sự, kể từ khi thụ lý vụ án cho đến trước thời điểm Hội đồng xét xử nghị án.
  - Trường hợp tại phiên tòa đương sự xuất trình tài liệu mới có thể làm thay đổi quan điểm giải quyết vụ án đã được lãnh đạo Viện cho ý kiến, Kiểm sát viên cần xem xét về nguồn gốc, nội dung tài liệu để có kết luận về tính hợp pháp và có căn cứ của tài liệu, trên cơ sở đó quyết định hướng giải quyết vụ án cho phù hợp và chịu trách nhiệm về quyết định của mình. Sau phiên tòa phải báo cáo Lãnh đạo Viện.
  - Kiểm sát việc tuyên án theo quy định tại Điều 238, 239 BLTTDS. Kiểm sát viên phải ghi lại những nhận định quan trọng và nội dung quyết định của bản án sơ thẩm để làm căn cứ kiểm tra biên bản phiên tòa; xem xét biên bản phiên toà, yêu cầu ghi những sửa đổi bổ sung vào biên bản phiên tòa (nếu có) và ký xác nhận theo quy định tại khoản 4 Điều 211 BLTTDS.
  Hoạt động của Kiểm sát viên sau phiên tòa sơ thẩm.
  Sau phiên tòa sơ thẩm, Kiểm sát viên tiến hành các hoạt động sau:
  - Viết báo cáo kết quả kiểm sát xét xử sơ thẩm. Báo cáo phải được lập thành hai bản, một bản báo cáo lãnh đạo Viện kiểm sát cấp mình, đồng thời lưu vào hồ sơ kiểm sát; một bản gửi cho Viện kiểm sát cấp trên trực tiếp.
  - Yêu cầu Tòa án gửi kịp thời bản án cho Viện kiểm sát theo đúng quy định tại khoản 2 Điều 241 BLTTDS.
  - Đề xuất với Lãnh đạo Viện xem xét, quyết định việc kháng nghị theo thủ tục phúc thẩm nếu xét thấy bản án, quyết định sơ thẩm có vi phạm nghiêm trọng về nội dung hoặc về thủ tục tố tụng, cụ thể:
  + Kiểm sát viên báo cáo lãnh đạo Viện đề nghị Viện trưởng Viện kiểm sát cấp trên xem xét, quyết định việc kháng nghị theo thủ tục phúc thẩm nếu thời hạn kháng nghị theo thủ tục phúc thẩm của VKS cùng cấp đã hết.
  + Kiểm sát viên đề xuất với Lãnh đạo Viện có văn bản báo cáo đề nghị Viện trưởng Viện kiểm sát cấp trên xem xét, quyết định kháng nghị theo thủ tục giám đốc thẩm hoặc tái thẩm nếu thời hạn kháng nghị phúc thẩm của Viện kiểm sát cấp trên đã hết.
  - Sao gửi bản án, quyết định sơ thẩm, thông báo về việc kháng cáo của Tòa án cấp sơ thẩm cho Viện kiểm sát cấp trên trực tiếp để kiểm tra xem xét.
  Hoạt động của Kiểm sát viên khi kiểm sát việc giải quyết các vụ án dân sự theo thủ tục phúc thẩm.
  Hoạt động của Kiểm sát viên trước khi mở phiên tòa
  - Nghiên cứu hồ sơ vụ án bị kháng cáo, kháng nghị và lập hồ sơ kiểm sát:
  + Căn cứ khoản 3 Điều 9 Quy chế KSDS thì Kiểm sát viên tham gia phiên tòa phúc thẩm trực tiếp nghiên cứu hồ sơ vụ án, xem xét lý do kháng cáo, kháng nghị, thủ tục kháng cáo, kháng nghị; đơn khiếu nại của đương sự (nếu có). Kiểm sát viên phải trích cứu đầy đủ các lời khai của đương sự, những người tham gia tố tụng, các tài liệu liên quan đến việc kháng cáo, kháng nghị, đề xuất hướng giải quyết vụ án, báo cáo lãnh đạo Viện cho ý kiến.
  + Căn cứ khoản 2 Điều 262 BLTTDS thì thời hạn nghiên cứu hồ sơ của Viện kiểm sát cùng cấp là mười lăm ngày, kể từ ngày nhận được hồ sơ vụ án; hết thời hạn đó, Viện kiểm sát phải trả hồ sơ vụ án cho Tòa án.
  + Kiểm sát viên phải lập Hồ sơ kiểm sát bảo đảm Hồ sơ kiểm sát thể hiện được các thủ tục tố tụng và nội dung của vụ án, quan điểm của Lãnh đạo Viện về việc giải quyết vụ án. Tài liệu có trong hồ sơ phải được sắp xếp thứ tự theo đúng các tiêu mục trên bìa hồ sơ, được đánh số bút lục từ 1 đến hết. Kiểm sát viên lập hồ sơ phải ký tên vào phần cuối của mục lục tài liệu.
  - Bổ sung, thay đổi, rút kháng nghị; chuẩn bị bản dự thảo ý kiến của Viện kiểm sát về giải quyết vụ án dân sự và báo cáo lãnh đạo Viện:
  + Căn cứ khoản 4 Điều 9 Quy chế KSDS thì trước khi mở phiên tòa, Kiểm sát viên báo cáo đề xuất với Lãnh đạo Viện thay đổi, bổ sung hoặc rút kháng nghị phúc thẩm nếu phát hiện kháng nghị của Viện kiểm sát không đủ căn cứ hoặc không phù hợp với tình tiết vụ án.
  + Chuẩn bị đề cương hỏi. Các câu hỏi phải tập trung vào nội dung bản án, quyết định bị kháng cáo, kháng nghị hoặc có liên quan đến việc xem xét nội dung kháng cáo, kháng nghị.
  + Căn cứ khoản 4 Điều 9 Quy chế KSDS thì Kiểm sát viên phải chuẩn bị bản dự thảo ý kiến của Viện kiểm sát về việc giải quyết vụ án. Bản dự thảo ý kiến của Viện kiểm sát về việc giải quyết vụ án phải báo cáo Lãnh đạo Viện cho ý kiến trước khi tham gia phiên tòa xét xử phúc thẩm.
  Hoạt động của Kiểm sát viên tại phiên tòa xét xử phúc thẩm.
  - Tại phiên tòa xét xử phúc thẩm, Kiểm sát viên thực hiện các hoạt động sau:
  - Trình bày về nội dung kháng nghị và căn cứ của việc kháng nghị (có thể xuất trình bổ sung tài liệu, chứng cứ) (đối với trường hợp vụ án chỉ có Viện kiểm sát kháng nghị).
  - Trình bày về nội dung kháng nghị và căn cứ của việc kháng nghị sau khi các đương sự trình bày về nội dung kháng cáo và căn cứ của việc kháng cáo (đối với trường hợp vừa có kháng cáo, vừa có kháng nghị).
  - Tham gia hỏi đương sự và những người tham gia tố tụng khác để làm sáng tỏ những tình tiết vụ án theo quy định tại Điều 272 BLTTDS. Việc hỏi của Kiểm sát viên cần tập trung làm rõ những vướng mắc liên quan đến kháng cáo, kháng nghị (để bảo vệ quan điểm kháng nghị của Viện kiểm sát hoặc quan điểm của Viện kiểm sát về hướng giải quyết kháng cáo).
  - Yêu cầu Hội đồng xét xử công bố tài liệu vụ án theo quy định tại Điều 272 BLTTDS;
  - Yêu cầu Hội đồng xét xử cho nghe băng, đĩa ghi âm, xem băng đĩa, ghi hình tại phiên tòa (nếu có);
  - Nhận xét kết luận giám định, hỏi người giám định về những vấn đề còn chưa rõ, hoặc có mâu thuẫn trong kết luận giám định hoặc có mâu thuẫn với những tình tiết khác của vụ án;
  - Điều chỉnh bản dự thảo ý kiến cho phù hợp với diễn biến của vụ án để phát biểu trước Tòa trên cơ sở kết quả hoạt động hỏi, tranh luận tại phiên tòa.
  - Trình bày bài phát biểu ý kiến. Bài phát biểu ý kiến của Kiểm sát viên đảm bảo các yêu cầu sau:
  + Tóm tắt nội dung tranh chấp, kháng cáo của đương sự, kháng nghị của Viện kiểm sát (nếu có), yêu cầu của các bên đương sự, đại diện của họ và những người tham gia tố tụng khác;
  + Phân tích những căn cứ để bảo vệ kháng nghị của Viện kiểm sát (nếu có), những căn cứ để chấp nhận hoặc không chấp nhận kháng cáo của đương sự và đại diện của họ;
  + Đề xuất quan điểm về việc giải quyết vụ án. Hướng giải quyết vụ án phải nêu rõ là đề nghị giữ nguyên, sửa hay hủy bản án sơ thẩm theo quy định tại các điều từ điều 275 đến điều 278 BLTTDS).
  - Rút kháng nghị trong trường hợp sau khi tham gia hỏi, tranh luận nếu thấy có căn cứ và phải chịu trách nhiệm về rút kháng nghị của mình.
  - Tập trung theo dõi nội dung của bản án khi Chủ tọa hoặc một thành viên khác của Hội đồng xét xử tuyên án để xem bản án có phản ánh chính xác và đầy đủ kết quả hỏi, tranh luận trước đó tại phiên tòa hay không; đồng thời cần chú ý xem ý kiến của Kiểm sát viên về việc giải quyết vụ án được ghi nhận trong bản án thế nào.
  - Kiểm tra biên bản phiên tòa ngay sau khi phiên tòa kết thúc, yêu cầu ghi những sửa đổi, bổ sung vào biên bản phiên tòa và ký xác nhận theo quy định tại khoản 4 Điều 211 BLTTDS;
  - Kiểm sát việc tuân theo pháp luật của Tòa án:
  + Kiểm sát căn cứ về thời hạn xét xử phúc thẩm đảm bảo thực hiện đúng quy định tại Điều 258 BLTTDS;
  + Kiểm sát việc khai mạc phiên tòa và bắt đầu phiên tòa phúc thẩm đảm bảo thực hiện đúng quy định tại Điều 267 BLTTDS;
  + Kiểm sát thành phần Hội đồng xét xử và Thư ký Tòa án xem có ai bị đương sự đề nghị thay đổi hoặc thuộc vào những trường hợp phải từ chối hoặc bị thay đổi theo quy định tại các Điều 46, 47, 49 BLTTDS không;
  + Kiểm sát việc hoãn phiên tòa theo quy định tại Điều 266 BLTTDS;
  + Kiểm sát các hoạt động diễn ra tại phiên tòa theo quy định từ Điều 268 đến Điều 281 BLTTDS;
  + Kiểm sát quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời hoặc việc không ra quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời của Hội đồng xét xử tại phiên tòa theo quy định tại Điều 261 BLTTDS.
  Hoạt động của Kiểm sát viên sau phiên tòa xét xử phúc thẩm
  - Căn cứ khoản 6 Điều 9 Quy chế KSDS thì sau phiên tòa xét xử phúc thẩm hoạt động cụ thể của Kiểm sát viên là:
  + Báo cáo kết quả xét xử với lãnh đạo Viện. Báo cáo kết quả kiểm sát xét xử phúc thẩm phải được lưu hồ sơ kiểm sát và phải gửi Lãnh đạo Viện kiểm sát cấp trên. Nội dung báo cáo kết quả kiểm sát xét xử phúc thẩm: Tóm tắt quá trình xét xử phúc thẩm; nhận xét việc chấp hành thủ tục tại phiên tòa của Hội đồng xét xử, Thư ký Tòa án, đương sự và những người tham gia tố tụng khác; đánh giá, nhận xét về tính hợp pháp và có căn cứ của bản án, quyết định phúc thẩm.
  + Chuẩn bị tài liệu, chứng cứ và làm văn bản đề xuất Lãnh đạo Viện báo cáo Viện kiểm sát cấp trên xem xét việc kháng nghị theo thủ tục giám đốc thẩm hoặc tái thẩm trong trường hợp kết luận trong bản án, quyết định của Tòa án cấp phúc thẩm không phù hợp với những tình tiết khách quan của vụ án; có vi phạm nghiêm trọng thủ tục tố tụng; có sai lầm nghiêm trọng trong việc áp dụng pháp luật hoặc khi phát hiện có một trong những căn cứ quy định tại Điều 283 hoặc Điều 305 BLTTDS.
  + Kiểm sát chặt chẽ việc gửi bản án, quyết định phúc thẩm theo đúng thời hạn quy định tại Điều 281 BLTTDS.
  - Tập hợp, báo cáo để Viện trưởng kiến nghị với Chánh án Toà án nhân dân cùng cấp về những vi phạm pháp luật trong việc giải quyết vụ án dân sự.
  - Hoàn thiện hồ sơ kiểm sát ở thủ tục phúc thẩm.
  Hoạt động của Kiểm sát viên khi kiểm sát việc giải quyết vụ án dân sự theo thủ tục giám đốc thẩm, tái thẩm.
  Hoạt động của Kiểm sát viên trước khi mở phiên tòa giám đốc thẩm, tái thẩm
  - Hoạt động của Kiểm sát viên trước khi mở phiên tòa giám đốc thẩm, tái thẩm về cơ bản được thực hiện tương tự như hoạt động của Kiểm sát viên trước khi mở phiên tòa phúc thẩm.
  - Kiểm sát viên cần lưu ý tới các hoạt động sau đây:
  + Nghiên cứu hồ sơ vụ án: Căn cứ khoản 3 Điều 10 Quy chế KSDS thì trong khi nghiên cứu hồ sơ vụ án, nếu xét thấy cần thiết, Kiểm sát viên báo cáo Lãnh đạo Viện xem xét, quyết định hoãn thi hành án để xem xét việc kháng nghị theo thủ tục giám đốc thẩm theo quy định tại khoản 1 Điều 286 BLTTDS; thời hạn nghiên cứu hồ sơ giám đốc thẩm, tái thẩm là 15 ngày kể từ ngày nhận được hồ sơ vụ án theo quy định tại khoản 2 Điều 290 BLTTDS.
  + Đối với bản án, quyết định do Chánh án Tòa án kháng nghị, Kiểm sát viên nghiên cứu hồ sơ, kiểm tra bản án, quyết định và kháng nghị của Chánh án, đề xuất quan điểm nhất trí hoặc không nhất trí với kháng nghị. Ngoài ra, Kiểm sát viên cần xem xét kỹ cả những nội dung bản án, quyết định của Tòa án mà quyết định kháng nghị không đề cập. Nếu xét thấy có vi phạm thì kịp thời báo cáo Lãnh đạo Viện để xem xét kháng nghị.
  + Dự thảo bản phát biểu ý kiến của Viện kiểm sát đối với kháng nghị của Tòa án sau khi có ý kiến của Lãnh đạo Viện. Bản dự thảo phát biểu ý kiến của Viện kiểm sát đối với kháng nghị của Tòa án có 3 phần:
  Phần đầu: Nêu căn cứ pháp luật của việc phát biểu ý kiến của Viện kiểm sát (Điều 21 Luật tổ chức Viện kiểm sát nhân dân; Điều 295 BLTTDS);
  Phần nội dung: Đối chiếu với những căn cứ kháng nghị giám đốc thẩm, tái thẩm quy định tại Điều 283 và Điều 305 BLTTDS để phân tích, nhận xét bản án, quyết định bị kháng nghị đã có những vi phạm pháp luật hay không có vi phạm pháp luật;
  Phần đề nghị: Nêu rõ quan điểm giải quyết như: Đề nghị bác kháng nghị và giữ nguyên bản án, quyết định có hiệu lực pháp luật bị kháng nghị; hủy bản án, quyết định đã có hiệu lực pháp luật để xét xử sơ thẩm hoặc xét xử phúc thẩm lại; hủy bản án, quyết định của Tòa án đã xét xử vụ án và đình chỉ giải quyết vụ án…
  + Báo cáo Lãnh đạo Viện xem xét, quyết định đối với những trường hợp Viện kiểm sát kháng nghị mà sau khi nghiên cứu hồ sơ vụ án thấy cần phải thay đổi, bổ sung hoặc rút kháng nghị trước phiên tòa giám đốc thẩm, tái thẩm.
  + Lập hồ sơ kiểm sát: Hồ sơ kiểm sát phải phản ánh được nội dung và những tình tiết của vụ án, quan điểm của Lãnh đạo Viện về vụ án. Tài liệu có trong hồ sơ phải được sắp xếp thứ tự theo đúng các tiêu mục trên bìa hồ sơ, được đánh số bút lục từ 1 đến hết. Kiểm sát viên lập hồ sơ phải ký tên vào phần cuối của mục lục tài liệu. Kiểm sát viên phải hoàn chỉnh hồ sơ kiểm sát, hồ sơ kiểm sát phải được quản lý chặt chẽ theo đúng quy định của Nhà nước, của ngành Kiểm sát về quản lý, lưu trữ tài liệu.
  Hoạt động của Kiểm sát viên tại phiên tòa giám đốc thẩm, tái thẩm.
  - Kiểm sát thành phần Hội đồng giám đốc thẩm, tái thẩm theo quy định tại Điều 54 BLTTDS;
  - Đối chiếu với hồ sơ vụ án đã nghiên cứu khi một thành viên của Hội đồng giám đốc thẩm, tái thẩm trình bày tóm tắt nội dung vụ án, quá trình xét xử vụ án, quyết định kháng nghị, các căn cứ, nhận định của kháng nghị và đề nghị của người kháng nghị.
  - Trình bày quan điểm kháng nghị của Viện kiểm sát (nếu có) hoặc phát biểu quan điểm của Viện kiểm sát về quyết định kháng nghị của Chánh án Tòa án nhân dân.
  - Điều chỉnh dự thảo bản phát biểu ý kiến của Viện kiểm sát về việc giải quyết vụ án cho phù hợp với diễn biến của vụ án trên cơ sở kết quả thảo luận và phát biểu ý kiến của các thành viên Hội đồng giám đốc thẩm, tái thẩm tại phiên tòa.
  - Đối với kháng nghị của Chánh án Tòa án, Kiểm sát viên phải nêu rõ lý do nhất trí hoặc không nhất trí kháng nghị.
  - Quyết định hướng xử lý vụ án và chịu trách nhiệm về quyết định của mình đối với trường hợp có những tài liệu mới phát sinh tại phiên toà có thể làm thay đổi quan điểm giải quyết vụ án đã được Viện trưởng Viện kiểm sát cho ý kiến; sau phiên tòa báo cáo ngay với lãnh đạo Viện.
  - Đề nghị hoãn phiên tòa giám đốc thẩm, tái thẩm để báo cáo Viện trưởng xem xét, quyết định đối với trường hợp tại phiên tòa phát sinh tài liệu, tình tiết mới có thể dẫn tới việc thay đổi, bổ sung hoặc rút kháng nghị.
  Hoạt động của Kiểm sát viên sau phiên tòa giám đốc thẩm, tái thẩm.
  - Hoạt động của Kiểm sát viên sau phiên tòa giám đốc thẩm, tái thẩm được thực hiện tương tự như hoạt động của Kiểm sát viên sau phiên tòa xét xử phúc thẩm;
  - Căn cứ khoản 8 Điều 10 Quy chế KSDS thì các hoạt động của Kiểm sát viên sau phiên tòa giám đốc thẩm, tái thẩm gồm:
  + Báo cáo kết quả xét xử bằng văn bản với lãnh đạo Viện, lãnh đạo đơn vị nghiệp vụ.
  + Đề xuất, báo cáo Lãnh đạo Viện kiểm sát nhân dân tối cao để có đường lối giải quyết trong trường hợp phiên tòa giám đốc thẩm, tái thẩm vi phạm nghiêm trọng thủ tục tố tụng hoặc phát hiện quyết định giám đốc thẩm, tái thẩm có vi phạm pháp luật cần kháng nghị tiếp (trừ quyết định giám đốc thẩm, tái thẩm của Hội đồng Thẩm phán Tòa án nhân dân tối cao).
  + Sao gửi cho Viện kiểm sát địa phương nơi Tòa án đã ra bản án, quyết định bị kháng nghị giám đốc thẩm, tái thẩm biết; đồng thời, thông báo bằng văn bản kết quả xét xử.
  + Tập hợp vi phạm pháp luật của Tòa án nhân dân trong việc giải quyết các vụ án dân sự để báo cáo Viện trưởng Viện kiểm sát kiến nghị với Chánh án Tòa án nhân dân khắc phục và có biện pháp phòng ngừa.
  + Hoàn thiện hồ sơ kiểm sát ở trình tự giám đốc thẩm, tái thẩm.
  Hoạt động của Kiểm sát viên khi kiểm sát bản án, quyết định dân sự của Tòa án.
              Kiểm sát bản án
              Kiểm sát bản án sơ thẩm
              Những nội dung chính Kiểm sát viên cần lưu ý khi thực hiện kiểm sát Bản án sơ thẩm bao gồm:
              Kiểm sát về mặt hình thức của bản án sơ thẩm xem có được ban hành theo đúng mẫu bản án sơ thẩm ban hành kèm theo Nghị quyết số 03/2012/NQ-HĐTP ngày 03/12/2012 của Hội đồng Thẩm phán Tòa án nhân dân tối cao hướng dẫn thi hành một số quy định trong Phần thứ nhất “Những quy định chung” của Bộ luật tố tụng dân sự đã được sửa đổi, bổ sung theo Luật sửa đổi, bổ sung một số điều của Bộ luật tố tụng dân sự hay không.
              Kiểm sát về mặt nội dung của bản án sơ thẩm, theo đó, Kiểm sát viên được phân công kiểm sát bản án sơ thẩm phải kiểm tra xem xem bản án sơ thẩm có đầy đủ các nội dung theo quy định của Điều 238 BLTTDS đã sửa đổi, bổ sung năm 2011 hay không. Cụ thể, theo quy định tại khoản 2 Điều 238 BLTTDDS đã được sửa đổi, bổ sung 2011 thì cơ cấu của Bản án sơ thẩm gồm ba phần là phần mở đầu; phần nội dung vụ án và nhận định của Tòa án; phần quyết định;
              - Khi kiểm sát phần mở đầu của bản án, Kiểm sát viên cần xem xét:
              + Tên Tòa án xét xử sơ thẩm;
              + Số, ngày tháng thụ lý nhằm quản lý án. Điều này có ý nghĩa cho việc xác định thời hiệu giải quyết một số loại án.
              + Họ, tên của các thành viên Hội đồng xét xử, thư ký phiên toà, Kiểm sát viên, người giám định, người phiên dịch...;
              + Đối với những vụ án cần sự có mặt của người giám định, người phiên dịch Kiểm sát viên lưu ý xác định những vi phạm có thể xảy ra trong trường hợp này.
              + Họ tên, tuổi, địa chỉ của nguyên đơn, bị đơn, người có quyền lợi nghĩa vụ liên quan, tổ chức khởi kiện, người đại diện hợp pháp, người bảo vệ quyền lợi và lợi ích hợp pháp của đương sự.
              + Đối tượng tranh chấp;
              + Số, ngày, tháng, năm của quyết định đưa vụ án ra xét xử;
              + Xét xử công khai hoặc xét xử kín theo quy định tại Khoản 2 Điều 15 BLTTDS đã sửa đổi, bổ sung năm 2011;
              + Thời gian và địa điểm xét xử.
              - Khi kiểm sát nội dung vụ án và nhận định của tòa án, Kiểm sát viên cần xem xét:
              + Nội dung bản án phải thể hiện được yêu cầu của nguyên đơn là gì, các chứng cứ chứng minh của nguyên đơn cho yêu cầu của mình. Cần lưu ý xem lời yêu cầu cuối cùng của nguyên đơn tại phiên toà có được bản án phản ánh hay không để xem xét việc Hội đồng chấp nhận toàn bộ, chấp nhận một phần hay bác bỏ yêu cầu của nguyên đơn.
              + Việc xuất trình các tài liệu có liên quan để chứng minh cho lời khai của nguyên đơn và việc Toà án chấp nhận hay không chấp nhận tài liệu đó là chứng cứ.
              + Lời đề nghị, yêu cầu phản tố của bị đơn, thừa nhận hay không thừa nhận yêu cầu của nguyên đơn; yêu cầu đó có được chấp nhận không và các chứng cứ đưa ra có phù hợp và có căn cứ không.
              + Lời trình bày của người có quyền lợi nghĩa vụ liên quan; yêu cầu của họ là gì và việc xuất trình tài liệu có liên quan cho Tòa án để bảo vệ quyền lợi của (nếu có).
              + Việc nhận định của Tòa án thông qua việc phân tích những căn cứ để chấp nhận hoặc không chấp nhận yêu cầu, đề nghị của đương sự, người bảo vệ quyền và lợi ích hợp pháp của đương sự? Kiểm sát viên cần phải xem xét kỹ lưỡng mối quan hệ giữa phần nội dung và phần nhận của Tòa án trong bản án nhằm phát hiện ra vi phạm của Tòa án khi không có hồ sơ để kiểm tra và đối chiếu.
              - Kiểm sát phần quyết định của bản án đảm bảo phần quyết định của bản án phải đạt được một số yêu cầu:
              + Chấp nhận yêu cầu của nguyên đơn hay bác yêu cầu của nguyên đơn? Nếu chấp nhận thì chấp nhận toàn bộ hay chấp nhận một phần yêu cầu của nguyên đơn? Chấp nhận cụ thể những gì?
              + Khi đã chấp nhận yêu cầu của nguyên đơn thì buộc bị đơn và người có quyền lợi nghĩa vụ liên quan thực hiện những gì? Cụ thể ra sao? Trong trường hợp bị đơn phản tố thì có chấp nhận phản tố không? Nếu chấp nhận thì buộc nguyên đơn thực hiện những gì?
              + Đối với trường hợp kiểm sát quyết định áp dụng án phí và mức án phí thì yêu cầu khi kiểm sát bản án, Kiểm sát viên phải nắm được tổng trị giá tài sản có tranh chấp là bao nhiêu trên cơ sở đó đối chiếu với quyết định án phí của bản án xem có đúng với loại có giá ngạch và không giá ngạch nếu không đúng thì rút hồ sơ xem xét ban hành kháng nghị.
              + Đối với các quyết định về chi phí giám định, định giá và mức án phí, quyền kháng cáo và vấn đề thi hành án thì chi phí định giá đương sự nào yêu cầu thì họ phải chịu chi phí. Còn đối với định giá cần lưu ý xem bản án có nêu rõ việc thành lập hội đồng hay áp dụng khung giá của Uỷ ban nhân dân địa phương để cân nhắc tính khách quan của trị giá tài sản có tranh chấp.
              Kiểm sát bản án phúc thẩm:
              Kiểm sát viên căn cứ Điều 279 BLTTDS đã sửa đổi, bổ sung năm 2011 để kiểm sát bản án phúc thẩm. Ngoài ra, khi tiến hành kiểm sát bản án phúc thẩm, Kiểm sát viên cần chú ý:
              - Kiểm sát viên cần xem xét phạm vi xét xử phúc thẩm của Tòa án có đúng không.
  - Kiểm sát viên cần xem xét nội dung kháng cáo và những nhận định của Hội đồng xét xử có phù hợp không để xác định căn cứ chấp nhận hoặc không chấp nhận kháng cáo; chấp nhận toàn bộ hay một phần; việc buộc đương sự khác thực hiện nghĩa vụ dân sự, trách nhiệm dân sự đến đâu... có đúng qui định của pháp luật không?
              - Kiểm tra quyết định của bản án có đúng thẩm quyền của Hội đồng xét xử phúc thẩm hay không.
  Kiểm sát một số quyết định trong quá trình Tòa án giải quyết vụ việc dân sự
  Theo quy định tại Điều 11 Quy chế công tác kiểm sát giải quyết các vụ việc dân sự ban hành kèm theo Quyết định số 567/QĐ-VKSTC ngày 08/02/2012 của Viện trưởng Viện Kiểm sát nhân dân tối cao thực hiện quyền kiểm sát các quyết định của Tòa án trong quá trình giải quyết vụ việc dân sự để thực hiện quyền kiến nghị hoặc kháng nghị.
              * Kiểm sát các quyết định của Tòa án để thực hiện quyền kiến nghị
  Quyết định công nhận sự thỏa thuận của các đương sự;
            Khi nhận được quyết định công nhận sự thoả thuận của các đương sự do Tòa án gửi đến Kiểm sát viên phải lưu ý những nội dung sau:
  - Kiểm sát về mặt hình thức của quyết định xem có được ban hành theo đúng mẫu quyết định công nhận thỏa thuận của đương sự hay không.
            - Kiểm sát về thời hạn Tòa án ra quyết định công nhận sự thoả thuận của các đương sự có đúng với quy định của pháp luật hay không.
              - Kiểm sát về thẩm quyền ra quyết định công nhận sự thoả thuận của các đương sự.
              - Kiểm sát về điều kiện ra quyết định công nhận sự thỏa thuận thành của đương sự.
            - Kiểm sát về nội dung các đương sự thoả thuận với nhau.
  - Kiểm sát về căn cứ pháp lý và phần quyết định công nhận trong quyết định của Tòa án có phù hợp với các quy định của pháp luật hiện hành hay không? Có đảm bảo đúng quy định của nguyên tắc quyền quyết định và tự định đoạt của các đương sự hay không.
  - Kiểm sát việc Tòa án công nhận thỏa thuận của các đương sự về nghĩa vụ chịu án phí có phù hợp với quy định của pháp luật hay không.
              Quyết định tạm đình chỉ giải quyết vụ án
           Khi nhận được quyết định tạm đình chỉ giải quyết vụ án dân sự Kiểm sát viên cần lưu ý:
  - Thẩm quyền ra quyết định tạm đình chỉ.
              - Hình thức có được ban hành theo đúng mẫu quyết định tạm đình chỉ giải quyết vụ án hay không.
              - Lý do tạm đình chỉ có phù hợp với quy định của pháp luật hay không?
  Quyết định đình chỉ giải quyết vụ án
              Khi kiểm sát quyết định đình chỉ giải quyết vụ án, Kiểm sát viên cần lưu ý:
            - Thẩm quyền ra quyết định đình chỉ.
              - Lý do Tòa án đình chỉ giải quyết vụ án có đúng quy định của pháp luật tố tụng hay không.
              - Quyết định về án phí của Tòa án trong trường hợp này như thế nào? Có đúng quy định của pháp luật không.
              Quyết định giải quyết việc dân sự
              Khi kiểm sát quyết định giải quyết việc dân sự như Quyết định tuyên bố một người mất tích; quyết định huỷ bỏ quyết định tuyên bố một người mất tích; quyết định tuyên bố một người đã chết; quyết định huỷ bỏ quyết định tuyên bố một người đã chết..., Kiểm sát viên cần chú ý xem xét và đối chiếu với hồ sơ tài liệu mà Viện kiểm sát đã tiếp cận trước khi tham gia phiên họp xem Tòa án áp dụng có căn cứ và đúng thủ tục theo quy định của pháp luật tố tụng không.
              Quyết định giám đốc thẩm
              Kiểm sát viên căn cứ Điều 301 BLTTDS đã được sửa đổi, bổ sung 2011 để kiểm sát Quyết định giám đốc thẩm. Ngoài ra, khi kiểm sát Quyết định giám đốc thẩm, Kiểm sát viên cần chú ý:
              - Cơ cấu bố cục của Quyết định giám đốc thẩm cơ bản giống như các Bản án sơ thẩm và Bản án phúc thẩm. Tuy nhiên, về nội dung được tóm tắt ngắn gọn và nêu rõ bản án, quyết định có hiệu lực pháp luật bị kháng nghị theo thủ tục giám đốc thẩm; quyết định kháng nghị, lý do bị kháng nghị; nhận định của Hội đồng giám đốc thẩm.
  - Thời hạn gửi quyết định giám đốc thẩm cho VKS.
  - Thời hạn mở phiên tòa giám đốc.
  - Phạm vi giám đốc thẩm.
  - Khi xem xét Quyết định giám đốc thẩm, Kiểm sát viên cần đối chiếu những nhận định của Hội đồng xét xử xem có phù hợp và khách quan với những tài liệu có trong hồ sơ vụ án không.
  Quyết định tái thẩm
  - Bố cục của Quyết định tái thẩm được như ở Quyết định giám đốc thẩm quy định tại Điều 310 BLTTDS.
  - Khi tiến hành kiểm sát, Kiểm sát viên cần xem xét quyết định tái thẩm có nêu và nhận định những căn cứ để kháng nghị theo thủ tục tái thẩm theo qui định của Điều 305 BLTTDS; quyết định của Hội đồng xét xử tái thẩm có đúng quy định tại Điều 309 BLTTDS hay không.
  * Kiểm sát các quyết định của Tòa án để thực hiện quyền kiến nghị
   Quyết định chuyển vụ việc dân sự cho Tòa án khác
  Khi kiểm sát quyết định chuyển vụ việc dân sự cho Tòa án khác, Kiểm sát viên cần lưu ý một số nội dung cơ bản sau:
  - Thời hạn gửi quyết định chuyển vụ việc dân sự của Tòa án cho VKS có đúng với quy định của pháp luật không.
  - Thẩm quyền của Tòa án trong việc ra quyết định chuyển vụ án.
  - Căn cứ để Tòa án ra quyết định chuyển vụ án, tuy nhiên cần lưu ý về quy định không thay đổi thẩm quyền giải quyết của Tòa án quy định tại Tiểu mục 4.4 Mục 4 Phần I Nghị quyết số 01/2005/NQ-HĐTP của HĐTP TANDTC.
              Quyết định nhập hoặc tách vụ án
            Khi kiểm sát quyết định nhập hoặc tách vụ án, Kiểm sát viên cần lưu ý:          - Thời hạn gửi quyết định nhập hoặc tách vụ án của Tòa án cho VKS.
            - Thẩm quyền của Tòa án, căn cứ nhập hoặc tách vụ án theo đúng quy định tại Điều 38 BLTTDS.
  Quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời
              Để kiểm sát quyết định áp dụng, thay đổi, huỷ bỏ biện pháp khẩn cấp tạm thời Kiểm sát viên phải nghiên cứu thật kỹ nội dung quyết định cũng như kiểm tra về mặt hình thức của quyết định.
              - Về mặt hình thức của quyết định, Kiểm sát viên phải kiểm tra xem quyết định áp dụng, thay đổi, hủy bỏ biện pháp khẩn cấp tạm thời có được Tòa án ban hành theo đúng mẫu quyết định áp dụng, thay đổi, hủy bỏ khẩn cấp tạm thời hay không.
              - Về mặt nội dung, Kiểm sát viên về các nội dung sau:
            + Kiểm sát về thẩm quyền của Tòa án trong việc áp dụng, thay đổi, huỷ bỏ biện pháp khẩn cấp tạm thời.
            + Kiểm sát về quyền yêu cầu áp dụng biện pháp khẩn cấp tạm thời và các trường hợp áp dụng.
           + Kiểm sát về việc áp dụng biện pháp khẩn cấp tạm thời của Tòa án có đúng với yêu cầu của đương sự hay không? Có phù hợp với thực tế khách quan cần áp dụng hay không?
            + Kiểm sát việc Tòa án tự mình áp dụng biện pháp khẩn cấp tạm thời có đúng quy định của pháp luật hay không.
            + Kiểm sát việc thay đổi, áp dụng bổ sung, huỷ bỏ biện pháp khẩn cấp tạm thời; căn cứ thay đổi, huỷ bỏ.
            + Kiểm sát về nội dung việc áp dụng biện pháp khẩn cấp tạm thời trong từng trường hợp cụ thể theo đúng quy định của BLTTDS.
   Quyết định đưa vụ án ra xét xử sơ thẩm
              Khi kiểm sát Quyết định đưa vụ án ra xét xử sơ thẩm, Kiểm sát viên cần lưu những vấn đề sau:
              - Kiểm sát về mặt hình thức của quyết định đưa vụ án ra xét xử sơ thẩm xem quyết định đó có được ban hành theo đúng mẫu hay không.
              - Kiểm sát về mặt nội dung, Kiểm sát viên cần lưu ý những nội dung sau:
              + Kiểm sát về thẩm quyền ra quyết định.
              + Kiểm sát về thời hạn chuẩn bị xét xử.
              + Kiểm sát về quan hệ pháp luật mà Tòa án xác định có phù hợp với thông báo thụ lý vụ án hay không.
             Quyết định đưa vụ án ra xét xử phúc thẩm
   Khi kiểm sát quyết định đưa vụ án ra xét xử phúc thẩm, Kiểm sát viên, thực hiện như khi Kiểm sát quyết định đưa vụ án ra xét xử sơ thẩm, nhưng lưu ý một số nội dung sau:
  - Về mặt hành thức, quyết định đưa vụ án ra xét xử phúc thẩm phải được ban hành theo đúng mẫu quyết định đưa vụ án ra xét sử phúc thẩm ban hành kèm theo Nghị quyết số 05/2006/NQ-HĐTP ngày 04/8/2006 hướng dẫn thi hành một số quy định trong Phần thứ ba “Thủ tục giải quyết vụ án tại Tòa án cấp phúc thẩm” của BLTTDS.
  Về nội dung, thời hạn chuẩn bị xét xử phúc thẩm được quy định tại Điều 258 BLTTDS và hướng dẫn tại Mục 2 Phần II Nghị quyết số 02/2006/NQ-HĐTP của Hội đồng thẩm phán Tòa án nhân dân tối cao.
  Quyết định hoãn phiên tòa sơ thẩm
           Kiểm sát viên phải thực hiện kiểm sát quyết định hoãn phiên tòa cả về hình thức và nội dung.
              - Về hình thức: Kiểm tra xem quyết định hoãn phiên tòa sơ thẩm có được Tòa án ban hành theo đúng mẫu quyết định hoãn phiên tòa sơ thẩm hay không.
              - Về nội dung: Kiểm sát viên cần lưu ý một số nội dung sau:
            + Lý do hoãn phiên toà có phải là các trường hợp được quy định tại khoản 1 Điều 208 BLTTDS hay không.
              + Kiểm sát về thẩm quyền ra quyết định hoãn phiên toà.
              + Nội dung của quyết định hoãn phiên toà có phù hợp với những nội dung ghi trong quyết định đưa vụ án ra xét xử hay không?
              + Kiểm sát về thời hạn hoãn phiên tòa có đúng quy định tại khoản 1 Điều 208 BLTTDS không.
           Quyết định hoãn phiên tòa phúc thẩm
  Khi kiểm sát quyết định hoãn phiên tòa phúc thẩm, Kiểm sát viên viên thực hiện tương tự như khi kiểm sát quyết định hoãn phiên tòa sơ thẩm nhưng cần chú ý một số vấn đề sau:
              - Về hình thức: Kiểm tra xem quyết định hoãn phiên tòa phúc thẩm có được Tòa án ban hành theo đúng mẫu quyết định hoãn phiên tòa phúc thẩm hay không.
              - Về lý do hoãn có thuộc một trong những căn cứ hoãn phiên tòa phúc thẩm quy định tại khoản 1,2,3 Điều 266 BLTTDS hay không.` },
            { title: '2.2. Việc dân sự', content: `Kiểm sát việc thông báo thụ lý việc dân sự
  - Hoạt động kiểm sát việc thông báo thụ lý việc dân sự được xác định từ khi Tòa án gửi văn bản thông báo thụ lý việc dân sự cho Viện kiểm sát.
  - Khi nhận được thông báo thụ lý việc dân sự, Kiểm sát viên được phân công phải vào sổ thụ lý để theo dõi, kiểm tra văn bản thông báo thụ lý việc dân sự theo những nội dung quy định tại khoản 2 Điều 174 BLTTDS - Lập phiếu kiểm sát theo dõi vi phạm để tổng hợp kiến nghị với Tòa án các vi phạm về thời hạn gửi thông báo, nội dung, hình thức thông báo; theo dõi quyết định chuyển việc dân sự của Tòa án.
  - Báo cáo Lãnh đạo Viện ra văn bản kiến nghị yêu cầu Tòa án khắc phục theo quy định tại khoản 1 Điều 21 BLTTDS, nếu thấy văn bản thông báo thụ lý việc dân sự của Tòa án có vi phạm pháp luật.
  Kiểm sát phiên họp giải quyết việc dân sự theo trình tự sơ thẩm.
  - Hoạt động của Kiểm sát viên trước khi mở phiên họp:
  - Nghiên cứu hồ sơ:
  + Căn cứ khoản 1 Điều 313 BLTTDS để kiểm sát thì sau khi ra quyết định mở phiên họp giải quyết việc dân sự, Tòa án gửi ngay quyết định và hồ sơ giải quyết việc dân sự cho VKSND cùng cấp để nghiên cứu. Thời hạn để Viện kiểm sát nghiên cứu là 7 ngày, kể từ ngày nhận được hồ sơ (khoản 1 Điều 313, Khoản 2 Điều 354; khoản 1 Điều 362; khoản 2 Điều 368 BLTTDS và khoản 2 Điều 71 Luật TTTM).
  + Kiểm sát viên phải kiểm tra thủ tục thụ lý và xem xét đơn yêu cầu do Tòa án thụ lý theo quy định của pháp luật tố tụng dân sự .
  + Nghiên cứu nội dung việc dân sự để chuẩn bị ý kiến của Viện kiểm sát để phát biểu tại phiên họp.
  - Chuẩn bị phát biểu ý kiến tại phiên họp và lập hồ sơ kiểm sát:
  + Kiểm sát viên chuẩn bị nội dung ý kiến phát biểu của Viện kiểm sát về giải quyết việc dân sự và báo cáo lãnh đạo Viện cấp mình về việc giải quyết việc dân sự đó.
  + Kiểm sát viên phải lập hồ sơ kiểm sát để chuẩn bị tham gia phiên họp. Việc lập hồ sơ kiểm sát được thực hiện tương tự như khi kiểm sát vụ án dân sự.
  - Hoạt động của Kiểm sát viên tại phiên họp:
  + Kiểm sát viên căn cứ các Điều 313, Điều 314, Điều 315 BLTTDS để thực hiện giống với phiên tòa sơ thẩm xét xử vụ án dân sự.
  + Kiểm sát viên phải kiểm sát việc tuân theo pháp luật về trình tự, thủ tục, thành phần giải quyết việc dân sự.
  - Hoạt động của Kiểm sát viên sau phiên họp:
  + Kiểm sát viên kiểm sát việc Tòa án gửi quyết định giải quyết việc dân sự trong thời hạn 5 ngày làm việc theo quy định tại Điều 315 BLTTDS;
  + Báo cáo kết quả phiên họp với Lãnh đạo Viện kiểm sát, đề xuất Viện trưởng Viện kiểm sát kháng nghị theo thủ tục phúc thẩm (nếu còn thời hạn kháng nghị thuộc thẩm quyền Viện trưởng cùng cấp) hoặc báo cáo đề nghị Viện kiểm sát cấp trên kháng nghị (nếu hết thời hạn kháng nghị thuộc thẩm quyền Viện trưởng cùng cấp) khi xét thấy quyết định của Thẩm phán hoặc Hội đồng xét đơn yêu cầu có vi phạm pháp luật về nội dung hay có vi phạm nghiêm trọng về thủ tục tố tụng.
  + Hoàn thiện hồ sơ kiểm sát giải quyết việc dân sự.
  - Hồ sơ kiểm sát giải quyết việc dân sự phải có các văn bản và thể hiện được các nội dung chủ yếu sau:
  + Văn bản thông báo thụ lý việc dân sự của Tòa án;
  + Đơn yêu cầu và các tài liệu, chứng cứ kèm theo đơn đơn yêu cầu;
  + Yêu cầu của người có quyền lợi, nghĩa vụ liên quan (nếu có);
  + Các tài liệu, chứng theo quy định tại Nghị quyết 04/2012/NQ-HDTP ngày 03 tháng 12 năm 2012 của Hội đồng Thẩm phán Tòa án nhân dân tối cao Hướng dẫn thi hành một số quy định về “chứng minh và chứng cứ”của Bộ luật tố tụng dân sự đã được sửa đổi, bổ sung theo Luật sửa đổi, bổ sung một số điều của Bộ luật tố tụng dân sự ngày 29 tháng 3 năm 2011.
  + Quyết định phân công thay đổi Kiểm sát viên thực hiện kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng, tham gia phiên họp giải quyết việc dân sự của Viện trưởng Viện kiểm sát;
  + Bản nhận xét đánh giá chứng cứ có trong hồ sơ việc dân sự, quan điểm về giải quyết việc dân sự của Kiểm sát viên (Kiểm tra viên, chuyên viên) được phân công kiểm sát việc tuân theo pháp luật trong hoạt động tố tụng, tham gia phiên họp giải quyết vụ việc dân sự;
  + Bản chuẩn bị về những vấn đề cần hỏi tại phiên họp;
  + Ý kiến bằng văn bản của Viện kiểm sát về đường lối giải quyết việc dân sự;
  + Diễn biến và kết quả phiên họp;
  + Quyết định về giải quyết việc dân sự của Tòa án;
  + Kháng nghị của Tòa án nhân dân; kết luận và kháng nghị của Viện kiểm sát (nếu có).
  Kiểm sát việc giải quyết quyết định việc dân sự bị kháng cáo, kháng nghị theo thủ tục phúc thẩm
  Hoạt động của Kiểm sát viên trước, trong và sau phiên họp phúc thẩm thực hiện theo quy định tại Điều 12 Quy chế KSDS.
  Kiểm sát việc giải quyết việc dân sự theo thủ tục giám đốc thẩm, tái thẩm
  - Khi kiểm sát việc giải quyết việc dân sự theo thủ tục giám đốc thẩm, tái thẩm, Kiểm sát viên cần lưu ý:
  + Căn cứ Điều 311 BLTTDS thì các việc dân sự liên quan đến công nhận và thi hành tại Việt Nam các bản án, quyết định của Tòa án nước ngoài và quyết định của Trọng tài nước ngoài không áp dụng quy định tại Chương XX Phần thứ năm BLTTDS để giải quyết mà áp dụng quy định tại Phần thứ Sáu của BLTTDS.
  + Căn cứ Điều 359, 373, 363 BLTTDS và đối chiếu với quy định tại Thông tư liên tịch 03/2005 cho thấy phán quyết của Tòa án nhân dân tối cao trong những trường hợp không bị kháng nghị theo trình tự giám đốc thẩm hoặc tái thẩm, nghĩa là đối với những việc dân sự quy định tại Phần thứ sáu BLTTDS không có trình tự giải quyết theo thủ tục giám đốc thẩm và tái thẩm.
  + Những việc dân sự khác, phán quyết của Tòa án nhân dân tối cao đều có thể bị kháng nghị theo trình tự giám đốc thẩm hoặc tái thẩm.
  - Hoạt động của Kiểm sát viên trước, trong và sau phiên họp giám đốc thẩm, tái thẩm thực hiện theo quy định về kiểm sát giải quyết vụ án dân sự theo thủ tục giám đốc thẩm, tái thẩm.
  Hoạt động của Kiểm sát viên khi kiểm sát việc giải quyết yêu cầu mở thủ tục phá sản.
  Một số nội dung Kiểm sát viên cần lưu ý khi kểm sát giải quyết yêu cầu mở thủ tục phá sản:
  - VKSND cấp huyện có nhiệm vụ kiểm sát việc tuân theo pháp luật trong việc giải quyết phá sản của Tòa án nhân dân cấp huyện đối với hợp tác xã đã đăng ký kinh doanh tại cơ quan đăng ký kinh doanh cấp huyện đó.
  - Khi đối tượng bị yêu cầu mở thủ tục phá sản là hợp tác xã thì sau khi Tòa án nhận được đơn phải có trách nhiệm kiểm tra hợp tác xã đăng ký kinh doanh tại cơ quan đăng ký kinh doanh cấp huyện hay cấp tỉnh để xác định thẩm quyền của Tòa án nhân dân cấp tương ứng. Trên cơ sở đó, Viện kiểm sát cũng xác định chính xác nhiệm vụ của cấp mình.
  - Những trường hợp cần thiết Tòa án nhân dân cấp tỉnh lấy lên để tiến hành thủ tục phá sản đối với hợp tác xã thuộc thẩm quyền của Tòa án nhân dân cấp huyện cũng là những vụ phá sản mà Viện kiểm sát cấp tỉnh phải nắm chắc để xác định đúng thẩm quyền. Đó là những trường hợp:
  + Hợp tác xã bị yêu cầu mở thủ tục phá sản có chi nhánh, văn phòng đại diện, có bất động sản, có chủ nợ tại nhiều nơi khác nhau;
  + Hợp tác xã bị yêu cầu mở thủ tục phá sản có chi nhánh, văn phòng đại diện, có bất động sản, có chủ nợ hoặc người mắc nợ ở nước ngoài;
  + Hợp tác xã bị yêu cầu mở thủ tục phá sản có khoản nợ còn có tranh chấp phải giải quyết;
  + Hợp tác xã là đương sự trong vụ án bị đình chỉ do Tòa án ra quyết định mở thủ tục phá sản đối với hợp tác xã đó hoặc trong trường hợp phức tạp khác (cần phải tuyên bố giao dịch của doanh nghiệp, hợp tác xã vô hiệu theo quy định tại khoản 1 Điều 43 Luật phá sản).
  - VKSND cấp tỉnh (nơi doanh nghiệp, hợp tác xã đăng ký kinh doanh) có nhiệm vụ kiểm sát việc tuân theo pháp luật việc giải quyết phá sản của Tòa án nhân dân cấp tỉnh đối với doanh nghiệp, hợp tác xã đã đăng ký kinh doanh tại cơ quan đăng ký kinh doanh cấp tỉnh đó. Trong trường hợp cần thiết, Tòa án nhân dân cấp tỉnh có thể lấy lên để tiến hành thủ tục phá sản đối với hợp tác xã thuộc thẩm quyền của Tòa án nhân dân cấp huyện thì Viện kiểm sát cấp tỉnh cũng có nhiệm vụ Kiểm sát việc giải quyết vụ phá sản đó.
  - Đối với việc phá sản doanh nghiệp có vốn đầu tư nước ngoài, Viện kiểm sát cấp tỉnh nơi doanh nghiệp đặt trụ sở có nhiệm vụ kiểm sát việc tuân theo pháp luật trong việc giải quyết phá sản của Tòa án nhân dân cấp tỉnh nơi đặt trụ sở chính của doanh nghiệp có vốn đầu tư nước ngoài đó.
  - Viện kiểm sát nhân dân tối cao có nhiệm vụ kiểm sát hoạt động của Tòa phúc thẩm Tòa án nhân dân tối cao và VKSND cấp tỉnh có nhiệm vụ kiểm sát hoạt động của Tòa án nhân dân cấp tỉnh trong việc xét khiếu nại của đương sự, kháng nghị của Viện kiểm sát đối với quyết định mở thủ tục thanh lý tài sản và quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản.
  Kiểm sát việc ra quyết định mở thủ tục phá sản.
  - Kiểm sát việc gửi quyết định mở thủ tục phá sản cho VKS: Căn cứ khoản 1, khoản 3 Điều 29 Luật Phá sản 2004, Tòa án gửi quyết định mở thủ tục phá sản cho Viện kiểm sát trong thời hạn 7 ngày, kể từ ngày ra quyết định.
  - Kiểm sát viên căn cứ Điều 28 Luật Phá sản để kiểm tra thời hạn ra quyết định mở hoặc không mở thủ tục phá sản (30 ngày kể từ ngày thụ lý đơn); lý do mở thủ tục phá và lý do không mở thủ tục phá sản và nội dung và hình thức quyết định mở hay không mở thủ tục phá sản.
  - Xem xét việc thụ lý của Tòa án có đúng quy định của pháp luật hay không như: Thẩm quyền nộp đơn theo các quy định tại Điều 13, 14, 16, 17 và 18 Luật phá sản; chủ thể có nghĩa vụ nộp đơn yêu cầu mở thủ tục phá sản quy định tại Điều 15 Luật Phá sản;
  - Xác định rõ ai được quyền đại diện cho các chủ thể nêu trên sẽ nộp đơn, vấn đề này được xác định như sau:
  + Đối với chủ nợ, Điều 13 Luật Phá sản chỉ cho phép chủ nợ không có bảo đảm và chủ nợ có bảo đảm một phần có quyền làm đơn;
  + Đối với người lao động, Điều 14 Luật Phá sản quy định đại diện người lao động hoặc đại diện tập thể lao động được cử hợp pháp bằng văn bản khi có sự thông qua của quá nửa người lao động trong doanh nghiệp;
  + Đối với chủ sở hữu doanh nghiệp nhà nước Điều 16 Luật Phá sản, là các tổ chức, cá nhân đại diện cho các công ty nhà nước được quy định tại Điều 61 và 62 Luật Doanh nghiệp Nhà nước;
  + Đối với cổ đông công ty cổ phần, Điều 17 Luật Phá sản quy định trường hợp Điều lệ công ty không quy định mà công ty không tổ chức được Đại hội đồng cổ đông thì cổ đông hoặc nhóm cổ đông sở hữu trên 20% tổng số cổ phần phổ thông trong thời gian liên tục ít nhất 6 tháng có quyền nộp đơn;
  + Đối với thành viên hợp danh, Điều 18 Luật Phá sản không cho phép thành viên góp vốn quyền nộp đơn vì theo quy định của Luật Doanh nghiệp, chỉ có thành viên hợp danh có quyền quản lý công ty, nhân danh công ty tham gia quan hệ với bên ngoài;
  + Đối với doanh nghiệp, hợp tác xã Điều 15 Luật Phá sản quy định chủ doanh nghiệp và đại diện hợp pháp của doanh nghiệp, hợp tác xã được nộp đơn yêu cầu mở thủ tục phá sản.
  - Xác định trách nhiệm thông báo doanh nghiệp, hợp tác xã lâm vào tình trạng phá sản theo quy định tại Điều 20 Luật Phá sản.
  - Xem xét thẩm quyền của Tòa án thụ lý đơn yêu cầu mở thủ tục phá sản.
  - Giám sát các trường hợp trả lại đơn có phù hợp với quy định tại Điều 24 Luật Phá sản 2004 không?
  - Trong quá trình kiểm sát việc ra quyết định mở thủ tục phá sản, nếu phát hiện có vi phạm thì Viện kiểm sát có quyền kiến nghị Tòa án xem xét, xử lý và khắc phục theo đúng quy định của pháp luật.
  Kiểm sát quá trình giải quyết yêu cầu mở thủ tục phá sản
  - Kiểm sát thủ tục giải quyết yêu cầu mở thủ tục phá sản:
  + Căn cứ Điều 5 Luật Phá sản thì thủ tục giải quyết yêu cầu mở thủ tục phá sản như sau: Nộp đơn yêu cầu và mở thủ tục phá sản; phục hồi hoạt động kinh doanh; thanh lý tài sản, các khoản nợ; tuyên bố doanh nghiệp, hợp tác xã bị phá sản.
  + Sau khi quyết định mở thủ tục phá sản, căn cứ vào quy định cụ thể của điều luật, Thẩm phán quyết định áp dụng một trong hai thủ tục phục hồi hoạt động kinh doanh và thanh lý tài sản, các khoản nợ, hoặc quyết định chuyển áp dụng thủ tục phục hồi hoạt động kinh doanh sang thủ tục thanh lý tài sản, các khoản nợ hoặc tuyên bố doanh nghiệp, hợp tác xã bị phá sản. Từ những cơ sở trên, Kiểm sát viên phải xác định được các tình huống có thể xảy ra trong quá trình giải quyết yêu cầu mở thủ tục phá sản.
  - Kiểm sát việc tuyên bố phá sản trong trường hợp đặc biệt có thể xảy ra:
  + Căn cứ khoản 1 Điều 87 Luật phá sản thì trong thời hạn 30 ngày kể từ ngày hết thời hạn nộp tiền tạm ứng phí phá sản do Tòa án ấn định, Tòa án có thể ra ngay Quyết định tuyên bố phá sản nếu doanh nghiệp, hợp tác xã không còn tiền hoặc tài sản khác để nộp tiền tạm ứng phí phá sản;
  + Căn cứ khoản 2 Điều 87 Luật phá sản thì sau khi thụ lý đơn yêu cầu mở thủ tục phá sản và nhận các tài liệu, giấy tờ do các bên liên quan gửi đến, Tòa án ra Quyết định tuyên bố phá sản nếu doanh nghiệp, hợp tác xã không còn tài sản hoặc còn nhưng không đủ để thanh toán phí phá sản.
  - Kiểm sát việc Quyết định áp dụng thủ tục phục hồi hoạt động kinh doanh:
  + Căn cứ Điều 68 Luật Phá sản thì sau khi ra quyết định mở thủ tục phá sản và tổ chức Hội nghị chủ nợ thành công, Thẩm phán ra Quyết định áp dụng thủ tục phục hồi hoạt động kinh doanh. Việc thực hiện quyết định này cũng có thể xảy ra một trong các trường hợp sau:
  Một là, việc phục hồi hoạt động kinh doanh thực hiện xong, Thẩm phán ra Quyết định đình chỉ thủ tục phục hồi theo Điều 76 Luật Phá sản 2004 và hậu quả là doanh nghiệp thoát khỏi tình trạng phá sản.
  Hai là, doanh nghiệp không xây dựng được phương án phục hồi hoặc Hội nghị chủ nợ không thông qua phương án phục hồi hoặc việc phục hồi hoạt động kinh doanh thực hiện không đúng hoặc không thực hiện được, Thẩm phán ra Quyết định thanh lý tài sản theo Điều 80 Luật Phá sản.
  Ba là, trường hợp doanh nghiệp hoạt động kinh doanh bị thua lỗ đã được Nhà nước áp dụng biện pháp đặc biệt để phục hồi nhưng vẫn không phục hồi được và không thanh toán được các khoản nợ đến hạn khi các chủ nợ yêu cầu thì Tòa án ra Quyết định áp dụng thủ tục thanh lý tài sản theo Điều 78 Luật Phá sản mà không cần phải triệu tập Hội nghị chủ nợ để xem xét việc áp dụng thủ tục phục hồi hoạt động kinh doanh.
  Hoạt động của Kiểm sát viên trong trường hợp này là:
  + Kiểm sát việc Tòa án dựa trên những căn cứ nào để ra các quyết định; căn cứ đó có đúng quy định của các điều luật đã viện dẫn hay không.
  + Kiểm tra các hoạt động của Hội nghị chủ nợ nhằm xác định căn cứ mà Tòa án áp dụng để ra quyết định áp dụng thủ tục phục hồi hay áp dụng thủ tục thanh lý tài sản trong những trường hợp nêu trên có đúng căn cứ mà pháp luật quy định không?
  + Kiểm sát các hoạt động của Hội nghị chủ nợ về những nội dung: Thời hạn họp; về thành phần Hội nghị; xem xét nội dung của Hội nghị chủ nợ và đặc biệt phải chú ý kiểm tra hoạt động biểu quyết để thông qua các Nghị quyết của Hội nghị chủ nợ. Các Nghị quyết của Hội nghị chủ nợ bao gồm: Nghị quyết đồng ý với các giải pháp tổ chức lại hoạt động kinh doanh, kế hoạch thanh toán nợ cho các chủ nợ (điểm d khoản 1 Điều 64 Luật Phá sản 2004); Nghị quyết về thông qua phương án phục hồi hoạt động kinh doanh của doanh nghiệp, hợp tác xã (khoản 2 Điều 71 Luật Phá sản 2004).
  Tóm lại, khi kiểm sát việc giải quyết yêu cầu mở thủ tục phá sản, pháp luật chỉ quy định Viện kiểm sát tiếp nhận các thông tin, tài liệu, quyết định mà Tòa án có trách nhiệm gửi cho Viện kiểm sát. Trong quá trình đó, Viện kiểm sát có trách nhiệm cập nhật thông tin, nhận các tài liệu, quyết định để xem xét và xác định nếu có vi phạm thì thực hiện quyền yêu cầu, quyền kiến nghị hoặc kháng nghị theo quy định của pháp luật.
  Kháng nghị quyết định mở thủ tục thanh lý tài sản, quyết định tuyên bố phá sản doanh nghiệp, hợp tác xã
  - Căn cứ Điều 83, Điều 91 Luật Phá sản thì Viện kiểm sát cùng cấp có quyền kháng nghị đối với quyết định mở thủ tục thanh lý tài sản và quyết định tuyên bố doanh nghiệp, hợp tác xã bị phá sản.
  - Kiểm sát viên cần kết hợp nghiên cứu quyết định mở thủ tục thanh lý tài sản và quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản với nhiều nguồn tài liệu khác (đơn khiếu nại của đương sự, thông tin từ các chủ thể khác), đồng thời đối chiếu những tài liệu đã thu thập được với những quy định của Luật Phá sản và kết quả của Hội nghị chủ nợ để xem xét quyết định của Tòa án có căn cứ và hợp pháp hay không, cụ thể:
  + Kiểm sát quyết định mở thủ tục thanh lý tài sản: Kiểm sát viên cần căn cứ khoản 2 Điều 81, Điều 78; Điều 79; Điều 80 và Điều 81 Luật phá sản để kiểm sát thời hạn gửi quyết định mở thủ tục thanh lý tài sản; căn cứ ra quyết định mở thủ tục thanh lý tài; nội dung của quyết định mở thủ tục thanh lý tài sản.
  + Kiểm sát quyết định tuyên bố phá sản, Kiểm sát viên căn cứ khoản 1 Điều 89 Luật Phá sản để kiểm sát. Quyết định tuyên bố phá sản phải được gửi cho Viện kiểm sát nhân dân cùng cấp trong thời hạn 15 ngày kể từ ngày ra quyết định. Kiểm sát viên nghiên cứu quyết định tuyên bố phá sản và kiểm tra những nội dung sau: căn cứ ra quyết định tuyên bố phá sản theo quy định tại Điều 86 Luật Phá sản; quyết định đình chỉ thủ tục thanh lý tài sản theo quy định tại Điều 85 Luật Phá sản;
  + Quyết định tuyên bố phá sản trong trường hợp đặc biệt theo quy định tại Điều 87 Luật Phá sản; nội dung của quyết định tuyên bố phá sản qui định tại Điều 88 Luật Phá sản.
  - Yêu cầu Tòa án đã ban hành các quyết định đó chuyển hồ sơ giải quyết yêu cầu phá sản để xem xét việc kháng nghị, nếu phát hiện có dấu hiệu vi phạm trong quyết định mở thủ tục thanh lý tài sản và quyết định tuyên bố phá sản đối với doanh nghiệp, hợp tác xã.
  - Kháng nghị quyết định mở thủ tục thanh lý tài sản, quyết định tuyên bố phá sản doanh nghiệp, hợp tác xã được thực hiện theo những quy định sau:
  + Thời hạn kháng nghị: Khoản 3 Điều 83 và khoản 2 Điều 91 Luật Phá sản 2004 quy định thời hạn kháng nghị của Viện kiểm sát là 20 ngày, kể từ ngày cuối cùng đăng báo về quyết định mở thủ tục thanh lý và quyết định tuyên bố doanh nghiệp, hợp tác xã bị phá sản..
  + Nội dung kháng nghị: Kiểm sát viên phải xác định vi phạm trong quyết định mở thủ tục thanh lý và quyết định tuyên bố doanh nghiệp, hợp tác xã bị phá sản (vi phạm về thủ tục hay áp dụng pháp luật nội dung). Sau đó đề xuất hướng giải quyết vi phạm theo hướng: Sửa quyết định hay hủy quyết định mở thủ tục thanh lý tài sản và giao hồ sơ về phá sản cho Tòa án đã ra quyết định mở thủ tục thanh lý tài sản để tiếp tục thủ tục phục hồi theo qui định tại khoản 2 Điều 84 Luật Phá sản hoặc hủy quyết định tuyên bố doanh nghiệp, hợp tác xã bị phá sản của Tòa án cấp dưới và giao hồ sơ về phá sản cho Tòa án cấp dưới tiếp tục tiến hành thủ tục phá sản theo quy định tại khoản 2 Điều 92 Luật Phá sản.
  + Hình thức quyết định kháng nghị phải bằng văn bản do Viện trưởng Viện kiểm sát nhân dân cùng cấp ký. Quyết định kháng nghị của Viện kiểm sát phải gửi cho Tòa án cùng cấp kèm hồ sơ về phá sản để Tòa án làm thủ tục chuyển lên Tòa án cấp trên trực tiếp xem xét giải quyết kháng nghị.
  Tham gia phiên họp xét khiếu nại, kháng nghị quyết định mở thủ tục thanh lý tài sản, quyết định tuyên bố doanh nghiệp, hợp tác xã phá sản
  - Căn cứ Điều 84 và Điều 92 Luật Phá sản thì Tòa án cấp trên cử một tổ gồm 3 Thẩm phán xem xét giải quyết khiếu nại và kháng nghị đối với quyết định mở thủ tục thanh lý và quyết định tuyên bố phá sản.
  - Căn cứ tiểu mục 3.2 Mục 3 Phần V Nghị quyết 03/2005/NQ-HĐTP thì khi có quyết định kháng nghị của Viện kiểm sát đối với Quyết định thanh lý tài sản hoặc Quyết định tuyên bố phá sản thì Tòa án cấp trên trực tiếp phải thông báo cho Viện kiểm sát cùng cấp biết để xem xét việc tham gia phiên họp xét kháng nghị.
  - Sau khi nhận được thông báo bằng văn bản của Tòa án, Viện kiểm sát nhân dân cùng cấp xét thấy cần thiết thì chủ động cử Kiểm sát viên tham gia phiên họp xét kháng nghị và thông báo bằng văn bản cho Tòa án biết. Như vậy, đối với các phiên họp xét khiếu nại mà Viện kiểm sát không có kháng nghị thì Kiểm sát viên không phải tham gia.
  - Trước khi mở phiên họp xét kháng nghị, Viện trưởng VKSND cấp trên trực tiếp hoặc Viện trưởng Viện kiểm sát xét xử phúc thẩm thuộc Viện kiểm sát nhân dân tối cao phải cử Kiểm sát viên nghiên cứu hồ sơ việc giải quyết yêu cầu mở thủ tục phá sản, chuẩn bị quan điểm của Viện kiểm sát về việc giải quyết việc phá sản.
  - Tại phiên họp xét kháng nghị, sau khi phân tích đưa những căn cứ, nội dung kháng nghị, Kiểm sát viên phát biểu quan điểm và đề xuất hướng giải quyết theo quy định tại khoản 2 Điều 84 và khoản 2 Điều 92 Luật Phá sản như sau:
  + Sửa quyết định mở thủ tục thanh lý tài sản của Toà án cấp dưới;
  + Huỷ quyết định mở thủ tục thanh lý tài sản và giải quyết tuyên bố doanh nghiệp, hợp tác xã phá sản của Toà án nhân dân cấp dưới và giao hồ sơ về phá sản cho Tòa án cấp dưới tiếp tục tiến hành phục hồi hoặc thủ tục phá sản theo quy định của Luật phá sản.
  - Để thực hiện những quyền hạn, nhiệm vụ trên đây, Viện kiểm sát có quyền:
  + Yêu cầu Tòa án xác minh làm rõ những vấn đề cần làm sáng tỏ nhằm giải quyết yêu cầu mở thủ tục phá sản đúng pháp luật;
  + Yêu cầu Tòa án nhân dân cung cấp hồ sơ cùng các quyết định giải quyết phá sản để xem xét thực hiện quyền kháng nghị đối với quyết định mở thủ tục thanh lý tài sản và quyết định tuyên bố phá sản;
  + Xem xét việc áp dụng các biện pháp khẩn cấp tạm thời theo quy định tại Điều 55 Luật Phá sản.
  Kiểm sát việc xét tính hợp pháp của cuộc đình công
  - Điều 172 BLLĐ năm 2006 đã đưa ra khái niệm về đình công; Điều 172a quy định đình công phải do Ban chấp hành công đoàn cơ sở hoặc Ban chấp hành công đoàn lâm thời tổ chức và lãnh đạo. Đối với doanh nghiệp chưa có Ban chấp hành công đoàn cơ sở thì việc tổ chức và lãnh đạo cuộc đình công phải do đại diện được tập thể lao động cử và việc cử này đã được thông báo với công đoàn huyện, quận, thị xã, thành phố thuộc tỉnh hoặc tương đương (sau đây gọi chung là đại diện tập thể lao động).
  - Điều 173 BLLĐ năm 2006 quy định các trường hợp cuộc đình công là bất hợp pháp.
  - Các quy định về thẩm quyền, thủ tục xét tính hợp pháp của cuộc đình công: Thẩm quyền xem xét tính hợp pháp của cuộc đình công quy định tại Điều 177 Bộ luật lao động (BLLĐ); Thủ tục xem xét tính hợp pháp của cuộc đình công, thủ tục giải quyết khiếu nại đối với quyết định về tính hợp pháp của cuộc đình công được quy định cụ thể tại các Điều 176a, 176b, 177a, 177b, 177c, 177d, 177đ, 177e, 177g, 179a BLLĐ hoặc được dẫn chiếu sang các quy định của BLTTDS.
  - Hậu quả pháp lý của cuộc đình công bất hợp pháp quy định tại Điều 178 và 179 BLLĐ năm 2006.
  Hoạt động của Kiểm sát viên khi kiểm sát việc xét tính hợp pháp của cuộc đình công
  Khái niệm về đình công đã được quy định tại Điều 209 Bộ luật lao động năm 2012. Điều 210 Bộ luật lao động năm 2012 quy định đình công phải do Ban chấp hành công đoàn cơ sở tổ chức và lãnh đạo; ở nơi chưa có tổ chức công đoàn cơ sở thì đình công do tổ chức công đoàn cấp trên tổ chức và lãnh đạo theo đề nghị của người lao động.
  - Điều 215 Bộ luật lao động năm 2012 quy định các trường hợp cuộc đình công là bất hợp pháp.
  - Các quy định về thẩm quyền, thủ tục xét tính hợp pháp của cuộc đình công: Thẩm quyền xem xét tính hợp pháp của cuộc đình công quy định tại Điều 225 Bộ luật lao động (BLLĐ) năm 2012; Thủ tục xem xét tính hợp pháp của cuộc đình công, thủ tục giải quyết khiếu nại đối với quyết định về tính hợp pháp của cuộc đình công được quy định cụ thể tại các từ Điều 223 đến Điều 231 Bộ luật lao động năm 2012 hoặc được dẫn chiếu sang các quy định của BLTTDS sửa đổi bổ sung năm 2011.
  - Hậu quả pháp lý của cuộc đình công bất hợp pháp quy định tại Điều 232 và  233 BLLĐ năm 2012.
  Hoạt động của Kiểm sát viên khi kiểm sát việc xét tính hợp pháp của cuộc đình công
  - Kiểm tra thẩm quyền xét tính hợp pháp của các cuộc đình công theo quy định tại Điều 225 Bộ luật lao động 2012.
  - Kiểm tra điều kiện thụ lý đơn yêu cầu bảo đảm: Người yêu cầu đình công đúng thẩm quyền quy định tại Điều 212,213,214 Bộ luật lao động năm 2012; đơn yêu cầu phải hợp pháp (nghĩa là đơn yêu cầu phải có đầy đủ nội dung quy định tại khoản 2 Điều 223 BLLĐ năm 2012); kèm theo đơn, văn bản yêu cầu các chủ thể phải gửi các bản sao quyết định đình công, bản yêu cầu, quyết định hoặc biên bản hoà giải của cơ quan, tổ chức có thẩm quyền giải quyết vụ tranh chấp lao động tập thể, tài liệu, chứng cứ có liên quan đến việc xét tính hợp pháp của cuộc đình công.
  - Kiểm sát trình tự, thủ tục xét tính hợp pháp của cuộc đình công, Kiểm sát viên phải kiểm tra những nội dung sau: Kiểm sát thành phần tham gia phiên họp xét tính hợp pháp của cuộc đình công theo quy định tại Điều 228, Điều 229 BLLĐ; kiểm sát trình tự xét tính hợp pháp của cuộc đình công theo Điều 231 BLLĐ; kiểm sát việc ra quyết định của Toà án theo Điều 232 BLLĐ.
  Chú ý: Khi kiểm sát việc xét tính hợp pháp của các cuộc đình công, pháp luật không quy định Viện kiểm sát phải tham gia vào phiên họp xét tính hợp pháp của cuộc đình công mà chỉ quy định Viện kiểm sát tiếp nhận quyết định về việc xét tính hợp pháp của cuộc đình công mà Tòa án có trách nhiệm gửi cho Viện kiểm sát. Trong quá trình đó, Viện kiểm sát có trách nhiệm kiểm tra, xác định những căn cứ, trình tự, thủ tục ra quyết định. Nếu phát hiện vi phạm của Tòa án trong việc ra quyết định về việc xét tính hợp pháp của cuộc đình công thì Viện kiểm sát thực hiện quyền kiến nghị, yêu cầu hoặc kháng nghị theo quy định của pháp luật.` }
          ] 
        },
      ],
    },
    {
      part: 'Phần Thứ Bảy',
      title: 'KIỂM SÁT VỤ ÁN HÀNH CHÍNH',
      sections: [
        { 
          title: '1. THỤ LÝ, LẬP HỒ SƠ', 
          subsections: [
            { title: '1.2. Lập hồ sơ', content: `- Kiểm tra xác định tính hợp pháp, kịp thời, đầy đủ, khách quan trong quá trình thu thập tài liệu, chứng cứ xác minh, lập hồ sơ của Toà án bằng các hoạt động:
  
  + Nghiên cứu hồ sơ, tài liệu để xác định tính hợp pháp và giá trị chứng minh của tài liệu, chứng cứ. Giá trị chứng minh của tài liệu, chứng cứ phụ thuộc vào nguồn gốc xuất xứ và thủ tục thu thập, xác minh của Toà án.
  
  + Xác minh thêm hoặc yêu cầu Toà án trưng cầu giám định, xác minh làm rõ tài liệu, chứng cứ.
  
  + Sau khi xác định tính hợp pháp của từng tài liệu, chứng cứ, Kiểm sát viên tiến hành tổng hợp, phân tích, đánh giá tính khách quan của các tài liệu, chứng cứ đó. Nếu tài liệu, chứng cứ thiếu khách quan, chỉ có lợi cho một bên, thì kịp thời yêu cầu Toà án khắc phục.
  
  - Kiểm tra lại tính hợp pháp trong việc thụ lý vụ án:
  
  + Kiểm sát viên căn cứ vào những tài liệu, chứng cứ đã thu thập, Kiểm sát viên kiểm tra lại tính hợp pháp trong việc thụ lý: Người khởi kiện và quyền khởi kiện, thời hiệu khởi kiện, đối tượng khởi kiện và nội dung việc kiện có thuộc thẩm quyền của Toà án hay không.
  
  + Tập trung nghiên cứu những vướng mắc hoặc thay đổi, bổ sung của tài liệu, chứng cứ so với hồ sơ ban đầu. Những vấn đề cần được bổ sung tài liệu, chứng cứ hoặc xác minh thêm nếu không có điều kiện tự mình tiến hành thì yêu cầu Toà án khắc phục. Trường hợp hồ sơ vụ án chưa đủ cơ sở để giải quyết thì Kiểm sát viên yêu cầu Toà án bổ sung.
  
  - Ở thủ tục phúc thẩm, giám đốc thẩm hoặc tái thẩm, hoạt động kiểm sát lập hồ sơ vụ án phài tập trung làm rõ những nội dung quyết định của bản án, quyết định bị kháng cáo, kháng nghị; những tài liệu, chứng cứ có liên quan do Toà án đã giải quyết vụ án dùng làm căn cứ để nhận định, phán quyết và những tài liệu chứng cứ mới bổ sung sau kháng cáo, kháng nghị.
  
  - Kiểm sát viên cần lưu ý một số vấn đề sau:
  
  + Nghiên cứu đơn kiện: Kiểm sát viên phải nghiên cứu kỹ đơn kiện và đối chiếu với các tài liệu có liên quan để xác định tính hợp pháp của việc kiện; xác định tư cách của người khởi kiện, người đại diện hoặc người được uỷ quyền, xác định bên bị kiện thông qua tên, tuổi, địa chỉ, chữ ký của người kiện; xác định thời hiệu khởi kiện còn hay hết thông qua ngày, tháng, năm khởi kiện, đối chiếu với các tài liệu khác; đánh giá được tính hợp pháp trong các yêu cầu của nguyên đơn, xác định ai là người bị kiện, ai là người có quyền lợi và nghĩa vụ liên quan.
  
  + Nghiên cứu các tài liệu, chứng cứ do nguyên đơn xuất trình và Toà án xác minh thu thập để xác định tính hợp pháp của các tài liệu chứng cứ, xem xét các diễn biến về quan điểm, yêu cầu của nguyên đơn, những thay đổi về nội dung yêu cầu của người khởi kiện.
  
  + Nghiên cứu các tài liệu chứng cứ do bên bị kiện giải trình và những tài liệu chứng cứ do Toà án xác minh thu thập để xác định tính hợp pháp của quyết định hành chính, hành vi hành chính hoặc quyết định kỷ luật buộc thôi việc cán bộ, công chức bị khiếu kiện (xem xét thẩm quyền ban hành quyết định hoặc thẩm quyền thực hiện hành vi bị khiếu kiện; xem xét những căn cứ mà bên bị kiện dựa vào đó để ban hành quyết định hoặc thực hiện hành vi bị khiếu kiện).
  
  + Nghiên cứu quan điểm của bên bị kiện về việc kiện thông qua quyết định giải quyết khiếu nại lần đầu và các tài liệu, chứng cứ mà bên bị kiện dùng để bảo vệ quan điểm của mình.
  
  + Nghiên cứu những tài liệu, chứng cứ của những người có quyền lợi và nghĩa vụ liên quan, thông qua việc đánh giá các tài liệu, chứng cứ để xác định những ai là người có quyền lợi và nghĩa vụ liên quan, quan điểm và yêu cầu hợp pháp của từng người. Kiểm sát viên phải lưu ý những thay đổi trong yêu cầu của những người có quyền lợi và nghĩa vụ liên quan, vì những thay đổi đó có thể dẫn đến sự thay đổi về bản chất vụ án.` }
          ] 
        },
        { 
          title: '2. XÉT XỬ SƠ THẨM', 
          subsections: [
            { title: '2.1. Trước phiên tòa', content: `4.1.1. Khi nhận được các văn bản tố tung: Quyết định ADTĐHB biện pháp khân cấp tạm thời, văn bản thông báo về việc không ra quyết định ADTĐHB biện pháp khẩn cấp tạm thời, quyết định đưa vụ án ra xét xử, KSV, KTV, CV được phân công thực hiện hoạt động kiểm sát việc giải quyết vụ án hành chính phải tiến hành kiểm sát các quyết định này. Nếu có căn cứ cho rằng Tòa án ban hành các quyết định trên là không đúng quy định của pháp luật thì thực hiện quyền kiến nghị theo quy định tạ khoản 1 Điều 70 Luật TTHC
   4.1.2. Nghiên cứu hồ sơ vụ án
  Việc nhận hồ sơ và thời gian nghiên cứu hồ sơ để tham gia phiên tòa, phiên họp sơ thẩm của VKS được thực hiện theo quy định tại Điều 124 Luật TTHC và điểm a khoản 1 Điều 2 TTLT số 03/2012.
  KSV, KTV, CV được phân công thực hiện hoạt động kiểm sát việc giải quyết vụ án hành chính tiến hành nghiên cứu hồ sơ, kiểm tra tính , đánh giá tính hợp pháp, tính có căn cứ của tài liệu, chứng cứ do các bên đương sự cung cấp hoặc do Tòa án xác minh, thu thập, nếu thấy các tài liệu, chứng cứ có trong hồ sơ vụ án chưa đảm bảo cho việc giải quyết vụ án hành chính của Tòa án đúng căn cứ pháp luật thì báo cáo đề xuất Lãnh đạo Viện thực hiện quyền yêu cầu Tòa án xác minh thu thập chứng cứ theo quy định tại khoản 3 Điều 78 Luật TTHC và Điều 4 TTLT số 03/2012.
   
  Ngoài xem xét về việc tuân theo pháp luật tố tụng trong quá trình giải quyết vụ án hành chính của Thẩm phán, việc chấp hành pháp luật của người tham gia tố tụng từ khi thụ lý vụ án cho đến trước khi mở phiên tòa, KSV, KTV, CV thực hiện nghiên cứu hồ sơ vụ án đồng thời tiến hành xem xét yêu cầu khởi kiện, đánh giá các tài liệu, chứng cứ có trong hồ sơ vụ án, đối chiếu các văn bản quy phạm pháp luật về nội dung quan hệ đang có tranh chấp để kiểm sát việc giải quyết vụ án của Tòa án, bảo đảm việc giải quyết vụ án của Tòa án đúng căn cứ pháp luật. Cụ thể:
   
  a. Xem xét toàn bộ nội dung vụ án với các vấn đề sau:
  - Xác định tính hợp pháp của yêu cầu khởi kiện: Việc xác định tính hợp pháp của yêu cầu khởi kiện được đặt ra ngay từ khi kiểm sát việc thụ lýcủa Toà án và trở thành nhiệm vụ xuyên suốt trong quá trình tố tụng. Tính hợp pháp của yêu cầu khởi kiện được thể hiện ở các điểm sau:
  + Tư cách pháp lý của người khởi kiện, người đại diện, người được đương sự uỷ quyền tham gia tố tụng.
  + Thủ tục, điều kiện khởi kiện theo quy định tại Điều 28 Luật Tố tụng hành chính, các điều 31, 36, 39 Luật khiếu nại, tố cáo hoặc các tài liệu chứng minh cho việc đương sự đã khiếu nại nhưng không được người có thẩm quyền giải quyết khiếu nại trả lời, biên lai nộp dự phí, án phí và các tài liệu liệu đương sự nộp cùng đơn khởi kiện.
  + Thời hiệu khởi kiện: Việc xác định thời hiệu khởi kiện được thực hiện theo quy định theo quy định tại Điều 104 Luật TTHC.
  + Vụ việc đã được giải quyết bằng một bản án, quyết định đã có hiệu lực pháp luật của Toà án hay chưa?
  + Khiếu kiện có thuộc thẩm quyền giải quyết của Toà án theo quy định tại Điều 28 Luật TTTHC không?
  - Xác định tính hợp pháp của quyết định hành chính, hành vi hành chính bị khởi kiện:
  + Đối với quyết định hành chính bị khởi kiện, Kiểm sát viên phải nghiên cứu chi tiết ngày, tháng, năm ban hành, thẩm quyền ký quyết định, con dấu, chữ ký của người có thẩm quyền đối chiếu với các quy định của pháp luật để xem xét văn bản đó có phù hợp với quy định của pháp luật hay không?
  + Đối với hành vi hành chính bị khởi kiện, Kiểm sát viên phải nghiên cứu các văn bản quy phạm pháp luật quy định về nhiệm vụ công vụ của cơ quan hành chính nhà nước, người có thẩm quyền trong cơ quan hành chính nhà nước đang bị khởi kiện, để xác định hành vi hành chính đang bị khởi kiện có phù hợp với quy định của pháp luật hay không?
  - Xác định nội dung tranh chấp, quan hệ tranh chấp: Xác định nội dung yêu cầu khởi kiện cũng như nội dung yêu cầu của những người tham gia tố tụng khác, xác định tính hợp pháp, tính có căn cứ của các yêu cầu này. Việc xác định nội dung quan hệ tranh chấp cũng đồng thời với việc xác định tư cách của người khởi kiện, người bị kiện, người đại diện, người được uỷ quyền hoặc những người có quyền lợi nghĩa vụ liên quan.
   
  b. Đánh giá chứng cứ, xác định sự thật khách quan của vụ án:
  - Đánh giá tính hợp pháp của chứng cứ: Kiểm sát viên phải kiểm tra từng loại nguồn chứng cứ và khẳng định nguồn chứng cứ, trình tự, thủ tục thu thập chứng cứ theo đúng quy định của pháp luật.
  - Xác định chứng cứ có trong hồ sơ đã đầy đủ chưa? Tiêu chuẩn để xem xét, đánh giá chứng cứ đã đầy đủ là chứng cứ đó đã đủ để chứng minh cho cho yêu cầu của các đương sự tham gia vụ kiện chưa?
  - Đối chiếu, phân tích các tài liệu, chứng cứ để làm rõ rõ sự thật khách quan, bản chất trong quan điểm của từng đương sự và bản chất của mâu thuẫn trong nội dung vụ án cần được giải quyết.
  - Tập hợp, chuẩn bị những tài liệu, chứng cứ có giá trị chứng minh để có quan điểm đúng về việc giải quyết vụ án.
   
  c. Làm rõ các vấn đề về áp dụng pháp luật:
  - Xem xét nguyên nhân dẫn đến việc cơ quan hành chính nhà nước, người có thẩm quyền trong cơ quan hành chính nhà nước ra quyết định hành chính (họăc thực hiện hành vi hành chính) đang bị khởi kiện; quyết định hành chính, hành vi hành chính bị khởi kiện gây thiệt hại gì cho người khởi kiện; các văn bản pháp luật nội dung điều chỉnh quan hệ pháp luật đang có tranh chấp là những văn bản nào…
  - Xác định yêu cầu khởi kiện có được chấp nhận hay không, chấp nhận những vấn đề gì.
  - Đánh giá chứng cứ, xác định sự thật khách quan của yêu cầu khởi kiện trên cơ sở đối chiếu, phân tích các tài liệu, chứng cứ có trong hồ sơ, nghiên cứu kỹ quan điểm của các chủ thể tham gia tố tụng (thông qua bản trình bày quan điểm của họ và các lời khai do Toà án lập) để từ đó làm rõ sự thật khách quan của quan hệ đang có tranh chấp, cũng như những mâu thuẫn trong các lời trình bày, lời khai của các đương sự, trên cơ sở đó chuẩn bị lý lẽ, căn cứ pháp lý để bảo vệ hoặc bác bỏ các tài liệu cũng như yêu cầu của các đương sự.
   
  4.1.3. Lập hồ sơ kiểm sát
  Người được phân công nghiên cứu hồ sơ vụ án phải lập hồ sơ kiểm sát, trích cứu đầy đủ trung thực lời trình bày của đương sự, sao chụp các tài liệu, chứng cứ do đương sự nộp hoặc do Tòa án thu thập có trong hồ sơ vụ án.
  - Hồ sơ kiểm sát phải bao gồm các tài liệu phản ánh đầy đủ hoạt động tiến hành tố tụng của Toà án nhân dân, Viện kiểm sát nhân dân và những người tham gia tố tụng khác. Hồ sơ kiểm sát được lập bắt đầu từ khi Viện kiểm sát nhận được văn bản thông báo thụ lý vụ án của Toà án nhân dân và kết thúc khi Kiểm sát viên hoàn thành việc kiểm sát bản án, quyết định do Toà án cùng cấp gửi đến.
  - Các tài liệu chứng cứ cần có trong hồ sơ kiểm sát là:
  + Đơn khởi kiện của đương sự, biên lai thu dự phí án phí sơ thẩm, quyết định hành chính bị khởi kiện (nếu đương sự khởi kiện hành vi hành chính thì hành vi này phải được nêu trong đơn khởi kiện);
  + Quyết định giải quyết khiếu nại lần đầu, lần hai (nếu có), các tài liệu thể hiện việc đương sự đã khiếu nại nhưng không được giải quyết, các tài liệu, chứng cứ do người bị khởi kiện cung cấp nhằm bác lại yêu cầu khởi kiện cũng như các tài liệu chứng minh cho yêu cầu phản tố của họ, các tài liệu do người có quyền lợi nghĩa vụ liên quan cung cấp…(những tài liệu chứng cứ này cần được phô tô).
  + Trích lục những lời trình bày hoặc khai nhận của những người tham gia tố tụng khác, nhưng phải bảo đảm tính đầy đủ, khách quan, toàn diện.
  Các tài liệu có trong hồ sơ kiểm sát phải được đánh số thứ tự theo thời gian và lập bản kê danh mục tài liệu theo quy định về công tác văn thư lưu trữ của Viện kiểm sát nhân dân tối cao.
  4.1.4. Chuẩn bị đề cương để tham gia hỏi tại phiên toà.
  - Kiểm sát viên phải chuẩn bị câu hỏi cho từng đương sự, từng vấn đề còn đang có mâu thuẫn, tranh chấp; có câu hỏi nhằm xác định giá trị chứng minh của tài liệu, có câu hỏi nhằm làm rõ sự thật khách quan của nội dung đang có tranh chấp.
  - Câu hỏi mà Kiểm sát viên đưa ra phải ngắn gọn, rõ ràng, dễ hiểu tập trung vào vấn đề cần làm sáng tỏ và phù hợp vào từng đối tượng được hỏi.
   
  2.1.4. Dự thảo quan điểm về việc giải quyết vụ án của Viện kiểm sát để trình bày tại phiên toà.
  - Dự thảo quan điểm về việc giải quyết vụ án của Kiểm sát viên phải nêu được các vấn đề sau:
  + Loại việc có thuộc thẩm quyền giải quyết của Toà án theo quy định tại Điều 28 Luật TTHC?
  + Việc thụ lý và giải quyết vụ án của Toà án đã đúng với quy định tại các điều 29, 30 Luật TTHC chưa?
  + Người khởi kiện có phải là người bị thiệt hại do quyết định hành chính hoặc hành vi hành chính đang bị khởi kiện gây ra theo quy định tại khoản 6 Điều 3 Luật TTHC không?
  + Đối tượng khởi kiện, điều kiện khởi kiện đã đầy đủ theo quy định tại Điều 103 Luật TTHC?
  + Thời hiệu khởi kiện còn hay hết theo quy định tại Điều 104 Luật TTHC?
   
  - Dự thảo ý kiến được thông qua Lãnh đạo Viện trước khi Kiểm sát viên tham gia phiên toà.` },
            { title: '2.2. Tại phiên tòa', content: `- Báo cáo kết quả xét xử với Lãnh đạo Viện và Viện kiểm sát cấp trên. Báo cáo kết quả xét xử sơ thẩm phải được làm thành hai bản, một bản báo cáo Lãnh đạo Viện kiểm sát cấp trên, một bản báo cáo Lãnh đạo Viện và lưu trong hồ sơ kiểm sát. Nội dung báo cáo phải nêu tính có căn cứ, hợp pháp (hay không hợp pháp) của quyết định của Hội đồng xét xử sơ thẩm, quan điểm của Viện kiểm sát về việc giải quyết vụ án được kiểm sát viên trình bày tại phiên toà. Với vụ án do Viện kiểm sát khởi tố, nếu tại phiên toà, Kiểm sát viên rút quyết định khởi tố hoặc thay đổi quan điểm của Viện kiểm sát về việc giải quyết vụ án thì Kiểm sát viên phải ghi rõ lý do của việc rút quyết định khởi tố hoặc thay đổi quan điểm.
  - Đề xuất với Lãnh đạo Viện xem xét, quyết định việc kháng nghị theo thủ tục phúc thẩm (hoặc báo cáo Viện kiểm sát cấp trên xem xét kháng nghị theo thủ tục phúc thẩm), chuẩn bị căn cứ pháp luật, dự thảo văn bản kháng nghị (trong trường hợp ý kiến của Viện kiểm sát về việc giải quyết vụ án không được Hội đồng xét xử chấp nhận).
  - Nghiên cứu phần nhận định của Toà án trong bản án, quyết định xem có phù hợp với các tình tiết của vụ án hay không? Toà án áp dụng các văn bản pháp luật về nội dung để giải quyết vụ án đã phù hợp, đúng pháp luật chưa? đối chiếu phần quyết định trong bản án, quyết định với phần ghi chép của Kiểm sát viên cũng như ý kiến đề xuất về đường lối giải quyết vụ án của Viện kiểm sát tại phiên toà để phát hiện vi phạm.
  - Đề xuất việc kháng nghị hoặc kiến nghị theo quy định tại Điều 22 Luật tổ chức VKSND năm 2002 nếu phát hiện bản án, quyết định có vi phạm pháp luật.` },
            { title: '2.3. Sau phiên tòa', content: `- Báo cáo kết quả xét xử với Lãnh đạo Viện và Viện kiểm sát cấp trên. Báo cáo kết quả xét xử sơ thẩm phải được làm thành hai bản, một bản báo cáo Lãnh đạo Viện kiểm sát cấp trên, một bản báo cáo Lãnh đạo Viện và lưu trong hồ sơ kiểm sát. Nội dung báo cáo phải nêu tính có căn cứ, hợp pháp (hay không hợp pháp) của quyết định của Hội đồng xét xử sơ thẩm, quan điểm của Viện kiểm sát về việc giải quyết vụ án được kiểm sát viên trình bày tại phiên toà. Với vụ án do Viện kiểm sát khởi tố, nếu tại phiên toà, Kiểm sát viên rút quyết định khởi tố hoặc thay đổi quan điểm của Viện kiểm sát về việc giải quyết vụ án thì Kiểm sát viên phải ghi rõ lý do của việc rút quyết định khởi tố hoặc thay đổi quan điểm.
  
  - Đề xuất với Lãnh đạo Viện xem xét, quyết định việc kháng nghị theo thủ tục phúc thẩm (hoặc báo cáo Viện kiểm sát cấp trên xem xét kháng nghị theo thủ tục phúc thẩm), chuẩn bị căn cứ pháp luật, dự thảo văn bản kháng nghị (trong trường hợp ý kiến của Viện kiểm sát về việc giải quyết vụ án không được Hội đồng xét xử chấp nhận).
  
  - Nghiên cứu phần nhận định của Toà án trong bản án, quyết định xem có phù hợp với các tình tiết của vụ án hay không? Toà án áp dụng các văn bản pháp luật về nội dung để giải quyết vụ án đã phù hợp, đúng pháp luật chưa? đối chiếu phần quyết định trong bản án, quyết định với phần ghi chép của Kiểm sát viên cũng như ý kiến đề xuất về đường lối giải quyết vụ án của Viện kiểm sát tại phiên toà để phát hiện vi phạm.
  
  - Đề xuất việc kháng nghị hoặc kiến nghị theo quy định tại Điều 22 Luật tổ chức VKSND năm 2002 nếu phát hiện bản án, quyết định có vi phạm pháp luật.` }
          ] 
        },
        { 
          title: '3. PHÚC THẨM, GIÁM ĐỐC, TÁI THẨM', 
          subsections: [
            { title: '3.1. Phúc thẩm', content: `3.1.1. Hoạt động của Kiểm sát viên trước khi mở phiên toà phúc thẩm
  Trước khi mở phiên tòa, KSV, KTV, CV được phân công thực hiện hoạt động kiểm sát việc giải quyết vụ án hành chính tiến hành nghiên cứu hồ sơ vụ án có kháng cáo, kháng nghị và lập hồ sơ kiểm sát.
  Việc nhận hồ sơ và nghiên cứu hồ sơ vụ án để tham gia phien tòa phúc thẩm của VKS được thực hiện theo quy định tại Điều 200 Luật TTHC và điểm b khoản 1 Điều 2 Thông tư liên tịch số 03/2012. Việc nghiên cứu hồ sơ vụ án cần làm rõ các nội dung sau:
  +       Xác định tính hợp pháp của kháng cáo, kháng nghị: Kiểm sát viên căn cứ vào các điều 174, 175, 176, 178, 181, 182 và Điều 183 của Luật TTHC để xác định tính hợp pháp của kháng cáo, kháng nghị. Tr¬ường hợp kháng cáo quá hạn thì phải xem xét, làm rõ thời gian có trở ngại khách quan để chấp nhận việc kháng cáo.
  +       Xác định vi phạm pháp luật của bản án, quyết định bị kháng cáo, kháng nghị: Kiểm sát viên phải xuất phát từ nội dung yêu cầu của kháng cáo, kháng nghị để nghiên cứu các tài liệu chứng cứ có trong hồ sơ vụ án mà Toà án cấp sơ thẩm lấy làm căn cứ nhận định và đ¬ưa ra phán quyết; đánh giá tính hợp pháp, khách quan của bản án, quyết định thông qua việc xem xét tính hợp pháp, khách quan, đầy đủ của các tài liệu, chứng cứ  có trong hồ sơ vụ án.
  +       Xem xét những tài liệu và chứng cứ mới bổ sung ở thủ tục phúc thẩm và xác định tính hợp pháp của những tài liệu chứng cứ mới đó có thật sự làm thay đổi việc áp dụng pháp luật khi giải quyết tranh chấp so với phán quyết của Toà án cấp sơ thẩm. Tr¬ường hợp Viện kiểm sát kháng nghị thì Kiểm sát viên có trách nhiệm bổ sung tài liệu, chứng cứ để bảo vệ quan điểm kháng nghị theo quy định tại các điều 188, 189 Luật TTHC.
  +       Nghiên cứu các văn bản pháp luật mà Toà án cấp sơ thẩm áp dụng để giải quyết vụ án, đối chiếu với các tình tiết khách quan của vụ án để xác định việc áp dụng pháp luật của Toà án cấp sơ thẩm đã phù hợp với quy định của pháp luật hay ch¬ưa.
  +       Trường hợp phát hiện kháng nghị của Viện kiểm sát không đủ căn cứ hoặc không phù hợp với các tình tiết khách quan của bản án, quyết định bị kháng nghị thì Kiểm sát viên đề xuất với Lãnh đạo viện điều chỉnh kháng nghị (rút một phần hoặc toàn bộ kháng nghị theo quy định của pháp luật).
  +       Lập hồ sơ kiểm sát: Hồ sơ kiểm sát ở thủ tục phúc thẩm cũng có những tài liệu tương tự như hồ sơ kiểm sát ở thủ tục sơ thẩm và có thêm bản án, quyết định bị kháng cáo, kháng nghị, đơn kháng cáo, quyết định kháng nghị những tài liệu chứng cứ mới được bổ sung.
  +       Chuẩn bị đề cương hỏi: Việc xây dựng đề cương hỏi tiến hành như đối với việc xây dựng đề cương hỏi ở cấp sơ thẩm.
  +       Dự thảo ý kiến của Viện kiểm sát về việc tuân theo pháp luật trong quá trình giải quyết vụ án hành chính ở giai đoạn phúc thẩm. Dự thảo ý kiến phải nêu được tính hợp pháp và tính có căn cứ của yêu cầu kháng cáo, nội dung và quan điểm nêu trong kháng nghị; xác định tính hợp pháp hoặc vi phạm pháp luật của bản án, quyết định bị kháng cáo, kháng nghị; ý kiến về việc tuân theo pháp luật trong quá trình giải quyết vụ án hành chính. Dự thảo ý kiến của Viện kiểm sát phải được thông qua Lãnh đạo Viện trước khi tham dự phiên toà phúc thẩm,
  3.1.2. Hoạt động của Kiểm sát viên tại phiên toà phúc thẩm
  - Kiểm sát việc tuân theo pháp luật của những người tiến hành tố tụng và những người tham gia tố tụng trong quá trình giải quyết kháng cáo, kháng nghị; sử dụng tài liệu chứng cứ để bảo vệ quan điểm kháng nghị.
  - Kiểm sát viên thực hiện những nhiệm vụ trên đây thông qua các hoạt động sau:
  +       Kiểm sát việc đưa vụ án ra xét xử tại tòa, việc chấp hành thời hạn mở phiên toà (lưu ý những trường hợp Toà án không phải mở phiên toà).
  +       Kiểm sát thành phần tham gia phiên toà: Người tiến hành tố tụng và người tham gia tố tụng theo quy định tại các điều 34, 41, 47, 48, 192 và Điều 193 Luật TTHC (lưu ý những trường hợp phải từ chối tiến hành tố tụng).
  +       Kiểm sát việc chấp hành trình tự, thủ tục mở phiên toà theo quy định tại Điều 202 Luật TTHC. Kiểm sát viên phải xem xét việc sử dụng chứng cứ, đánh giá chứng cứ của Hội đồng xét xử nhằm đảm bảo đúng pháp luật, khách quan, toàn diện.
  - Tham gia hỏi để bảo vệ quan điểm kháng nghị hoặc quan điểm của Viện kiểm sát về việc giải quyết kháng cáo: Khi hỏi, Kiểm sát viên phải tập trung làm rõ những vướng mắc có liên quan đến kháng cáo, kháng nghị. Việc hỏi của Kiểm sát viên phải trên cơ sở tài liệu, chứng cứ có trong hồ sơ.
  - Xem xét rút quyết định kháng nghị và chịu trách nhiệm trước Viện trưởng cấp mình.
  - Trình bày ý kiến của Viện kiểm sát về việc tuân theo pháp luật tố tụng trong quá trình giải quyết vụ án ở giai đoạn phúc thẩm.
  - Kiểm sát việc tuyên án theo quy định tại Điều 205 và Điều 206 Luật TTHC.
  Lưu ý: Theo quy định tại Điều 196 và Điều 207 Luật TTHC quy định các trường hợp Hội đồng xét xử không phải mở phiên tòa. Theo đó, Tòa án cấp phúc thẩm phải tổ chức phiên họp và ra quyết định giải quyết việc kháng cáo, kháng nghị trong thời hạn 15 ngày, kể từ ngày nhận được kháng cáo, kháng nghị. Kiểm sát viên Viện kiểm sát cùng cấp tham gia phiên họp phúc thẩm và phát biểu ý kiến về việc giải quyết kháng cáo, kháng nghị trước khi Hội đồng xét xử phúc thẩm ra quyết định.
  3.1.3. Hoạt động của Kiểm sát viên sau khi kết thúc phiên tòa phúc thẩm.
  - Kiểm sát bản án, quyết định của Toà án. Nếu phát hiện có sai sót thì yêu cầu Toà án khắc phục. Trường hợp vi phạm nghiêm trọng thì đề xuất việc kháng nghị.
  - Làm báo cáo kết quả kiểm sát xét xử: Báo cáo kết quả kiểm sát xét xử phúc thẩm làm thành 2 bản, một bản báo cáo lãnh đạo và lưu hồ sơ, một bản gửi Viện kiểm sát cấp trên. Nội dung báo cáo phải nêu rõ những tình tiết mới phát sinh dẫn đến trường hợp Toà án quyết định khác với quan điểm của Viện kiểm sát hoặc những trường hợp Kiểm sát viên phải điều chỉnh quan điểm giải quyết vụ án. Những trường hợp Kiểm sát viên điều chỉnh hoặc rút quyết định kháng nghị tại phiên toà phúc thẩm thì phải nêu rõ lý do và trình bày quan điểm của mình về những vấn đề đó.
   
  - Sắp xếp hồ sơ kiểm sát để có tài liệu lưu trữ, theo dõi rút kinh nghiệm.` },
            { title: '3.2. Giám đốc, tái thẩm', content: `3.2.1. Hoạt động của Kiểm sát viên trước phiên toà giám đốc thẩm, tái thẩm
  - Xác định tính hợp pháp của kháng nghị theo thủ tục giám đốc thẩm, tái thẩm đối với những bản án, quyết định đã có hiệu lực pháp luật của Toà án cấp dưới phải bảo đảm các quy định tại các điều 210, 211, 214,215, 233 và Điều 236 Luật TTHC.
  - Xác định vi phạm pháp luật của bản án, quyết định đã có hiệu lực pháp luật bị kháng nghị. Đối với vụ án do Viện kiểm sát kháng nghị, Kiểm sát viên phải đọc lại hồ sơ vụ án (hồ sơ kiểm sát), tập trung vào vi phạm pháp luật của bản án, quyết định đã có hiệu lực pháp luật của Toà án đã được phân tích trong quyết định kháng nghị của Viện kiểm sát, các tài liệu chứng cứ có trong hồ sơ vụ án chứng minh cho quan điểm kháng nghị của Viện kiểm sát.
  - Lập hồ sơ kiểm sát: Hồ sơ kiểm sát ở thủ tục giám đốc thẩm, tái thẩm cũng có những tài liệu tương tự như hồ sơ kiểm sát ở thủ tục sơ thẩm và có thêm bản án (quyết định) sơ thẩm, bản án (quyết định) phúc thẩm bị kháng nghị, đơn khiếu nại, quyết định kháng nghị, bản trình bày quan điểm của Viện kiểm sát về kháng nghị của Toà án.
  - Chuẩn bị đề cương để tham gia phiên toà:
  + Đối với vụ án mà quan điểm của Kiểm sát viên thống nhất với kháng nghị của Toà án thì việc chuẩn bị đề cư¬ơng để tham gia phiên toà giám đốc thẩm, tái thẩm cần có các căn cứ pháp luật để xác định bản án (quyết định) bị kháng nghị có vi phạm pháp luật về nội dung hoặc thủ tục tố tụng không.
  + Đối với vụ án mà quan điểm của Kiểm sát viên không thống nhất với kháng nghị của Toà án thì Kiểm sát viên phải chuẩn bị đầy đủ các tài liệu, chứng cứ có trong hồ sơ vụ án có giá trị cao nhất cho phán quyết của Toà án có bản án (quyết định) bị kháng nghị nhưng Kiểm sát viên cho là phù hợp với quy định của pháp luật để trình bày trước phiên toà giám đốc thẩm, tái thẩm.
  + Đối với vụ án do Viện kiểm sát kháng nghị, Kiểm sát viên phải chuẩn bị các tài liệu, chứng cứ có trong hồ sơ vụ án, các căn cứ pháp luật nêu trong quyết định kháng nghị, dự kiến những tình huống mà Hội đồng giám đốc thẩm, tái thẩm có thể sẽ hỏi tới để bảo vệ quan điểm nêu trong quyết định kháng nghị.
  - Dự thảo quan điểm của VKSND về kháng nghị của Toà án.
  3.2.2. Hoạt động của Kiểm sát tại phiên toà giám đốc thẩm, tái thẩm:
  - Theo quy định của pháp luật, thủ tục giám đốc thẩm, tái thẩm được Toà án có thẩm quyền tiến hành theo quy định tại Điều 223 Luật TTHC.
  - Thành phần của Hội đồng giám đốc thẩm, tái thẩm được quy định tại các điều 21, 29 Luật tổ chức TAND và và Điều 218 Luật TTHC.
  - Phiên toà giám đốc thẩm, tái thẩm không có sự tham gia của các đương sự (trừ trường hợp Toà án thấy cần thiết phải nghe ý kiến của họ trước khi quyết định). Khi giải quyết kháng nghị, Hội đồng giám đốc thẩm, tái thẩm chỉ xem xét phần nội dung trong vụ án bị kháng nghị.
  - Nhiệm vụ của của Kiểm sát viên tại phiên toà là:
  + Kiểm sát việc tuân theo pháp luật của Hội đồng giám đốc thẩm, tái thẩm và những người tham gia phiên toà được Toà án triệu tập (nếu có).
  + Tham gia tranh luận bảo vệ quan điểm của Viện kiểm sát (quan điểm kháng nghị của Viện kiểm sát hoặc quan điểm của Viện kiểm sát đối với kháng nghị của Toà án).
  + Khi thực hiện các nhiệm vụ trên đây, Kiểm sát viên tiến hành các thao tác nghiệp vụ tương tự như khi tham dự phiên toà phúc thẩm. Điểm khác căn bản ở giai đoạn này là Kiểm sát viên sử dụng các tài liệu, chứng cứ có trong hồ sơ vụ án và căn cứ pháp lý để bảo vệ quan điểm kháng nghị của Viện kiểm sát hoặc đưa ra quan điểm đối với kháng nghị của Toà án.
  + Cần lưu ý là tại phiên toà giám đốc thẩm, tái thẩm, khi gặp những trường hợp không đủ căn cứ để bảo vệ quan điểm kháng nghị của Viện kiểm sát thì Kiểm sát viên không được điều chỉnh hoặc rút kháng nghị mà phải đề nghị Hội đồng xét xử cho tạm hoãn phiên toà, sau đó đề xuất, xin ý kiến Lãnh đạo viện về việc rút kháng nghị. 
  3.2.3. Hoạt động của Kiểm sát viên sau khi kết thúc phiên tòa giám đốc thẩm, tái thẩm.
  - Kiểm sát bản án, quyết định của Toà án. Nếu phát hiện có sai sót thì yêu cầu Toà án khắc phục. Trường hợp vi phạm nghiêm trọng thì đề xuất việc kiến nghị.
  - Làm báo cáo kết quả kiểm sát xét xử: Báo cáo kết quả kiểm sát xét xử giám đốc thẩm, tái thẩm được làm thành các bản để báo cáo Lãnh đạo Viện, lưu vào hồ sơ kiểm sát và gửi Viện kiểm sát cấp trên (đối với Viện kiểm sát tỉnh, thành phố). Nội dung báo cáo phải nêu rõ quan điểm của Viện kiểm sát tại phiên toà đối với kháng nghị của Toà án, quan điểm của Hội đồng giám đốc thẩm, tái thẩm đối với kháng nghị của Viện kiểm sát. Sau phiên toà phúc thẩm, giám đốc thẩm, tái thẩm của Toà án cấp tỉnh và của Toà giám đốc TAND tối cao, nếu phát hiện bản án, quyết định có vi phạm pháp luật nghiêm trọng thuộc một trong các quy định tại Điều 210 và Điều 233 Luật TTHC, Kiểm sát viên phải chuẩn bị đầy đủ căn cứ, làm văn bản đề xuất với Viện trưởng kèm hồ sơ vụ án để Viện trưởng báo cáo lên Viện trưởng VKSND tối cao xem xét việc kiến nghị theo thẩm quyền.
   
  - Sắp xếp hồ sơ kiểm sát để có tài liệu lưu trữ, theo dõi rút kinh nghiệm` },
            { title: '3.3. Thủ tục đặc biệt', content: `- Theo quy định tại Điều 239 Luật TTHC quy định, quyết định của Hội đồng Thẩm phán TAND tối cao khi có căn cứ xác định có vi phạm pháp luật nghiêm trọng hoặc phát hiện tình tiết quan trọng mới có thể làm thay đổi cơ bản nội dung quyết định mà Hội đồng Thẩm phán TAND tối cao, đương sự không biết được khi ra quyết định đó thì được xem xét lại nếu thuộc một trong các trường hợp sau:
  + Theo yêu cầu của Ủy ban thường vụ Quốc hội;
  + Theo kiến nghị của Ủy ban tư pháp của Quốc hội;
  + Theo kiến nghị của Viện trưởng VKSND tối cao;
  + Theo đề nghị của Chánh án TAND tối cao.
  - Trường hợp có yêu cầu của Ủy ban thường vụ Quốc hội, Chánh án TAND tối cao có trách nhiệm báo cáo Hội đồng Thẩm phán TAND tối cao để xem xét lại quyết định của Hội đồng Thẩm phán TAND tối cao.
  - Trường hợp có kiến nghị của Ủy ban tư pháp của Quốc hội, kiến nghị của Viện trưởng VKSND tối cao hoặc Chánh án TAND tối cao phát hiện vi phạm, tình tiết mới thì Chánh án TAND tối cao có trách nhiệm báo cáo Hội đồng Thẩm phán TAND tối cao xem xét kiến nghị, đề nghị đó.
  - Phiên họp của Hội đồng Thẩm phán TAND tối cao xem xét kiến nghị, đề nghị trên phải có sự tham dự của Viện trưởng VKSND tối cao.
   
  - Khi có một trong các căn cứ trên, Chánh án TAND tối cao sẽ tổ chức nghiên cứu hồ sơ vụ án, xác minh, thu thập tài liệu, chứng cứ, báo cáo Hội đồng Thẩm phán TAND tối cao xem xét lại quyết định của Hội đồng Thẩm phán trong thời hạn 04 tháng, kể từ ngày nhận được yêu cầu của Ủy ban thường vụ Quốc hội hoặc kể từ ngày có quyết định của Hội đồng Thẩm phán. Phiên họp của Hội đồng Thẩm phán có sự tham gia của Viện trưởng VKSND tối cao. Trường hợp xét thấy cần thiết, TAND tối cao có thể mời cá nhân, cơ quan, tổ chức có liên quan đến tham dự phiên họp. Quyết định của hội đồng Thẩm phán TAND tối cao phải được ít nhất 3/4 tổng số thành viên của Hội đồng Thẩm phán biểu quyết tán thành.` }
          ] 
        },
      ],
    },
    {
      part: 'Phần Thứ Tám',
      title: 'KIỂM SÁT THI HÀNH ÁN DÂN SỰ',
      sections: [
        { 
          title: '1. NHIỆM VỤ, QUYỀN HẠN', 
          subsections: [
            { title: '1.1. Đối tượng', content: `- Căn cứ khoản 2 Điều 12 Luật THADS thì Viện kiểm sát các cấp trong phạm vi nhiệm vụ, quyền hạn của mình kiểm sát việc tuân theo pháp luật về thi hành án của cơ quan thi hành án dân sự, Chấp hành viên, cơ quan, tổ chức và cá nhân có liên quan đến việc thi hành án nhằm bảo đảm việc thi hành án kịp thời, đầy đủ, đúng pháp luật.
  2. Viện kiểm sát nhân dân kiểm sát việc tuân theo pháp luật của Tòa án, cơ quan thi hành án dân sự, Chấp hành viên, cơ quan, tổ chức, cá nhân có liên quan trong việc thi hành án dân sự.
  Khi kiểm sát thi hành án dân sự, Viện kiểm sát nhân dân có nhiệm vụ, quyền hạn sau đây:
  a) Kiểm sát việc cấp, chuyển giao, giải thích, sửa chữa, bổ sung bản án, quyết định của Tòa án;
  b) Yêu cầu Chấp hành viên, cơ quan thi hành án dân sự cùng cấp, cấp dưới ra quyết định về thi hành án, gửi các quyết định về thi hành án; thi hành đúng bản án, quyết định; tự kiểm tra việc thi hành án và thông báo kết quả kiểm tra cho Viện kiểm sát nhân dân; yêu cầu cơ quan, tổ chức và cá nhân cung cấp hồ sơ, tài liệu, vật chứng có liên quan đến việc thi hành án theo quy định của Luật này;
  c) Trực tiếp kiểm sát hoạt động thi hành án dân sự của cơ quan thi hành án dân sự cùng cấp và cấp dưới, Chấp hành viên, các cơ quan, tổ chức và cá nhân có liên quan; ban hành kết luận kiểm sát khi kết thúc việc kiểm sát;
  d) Tham gia phiên họp của Tòa án xét miễn, giảm nghĩa vụ thi hành án đối với khoản thu nộp ngân sách nhà nước và phát biểu quan điểm của Viện kiểm sát nhân dân;
  đ) Kiến nghị xem xét hành vi, quyết định liên quan đến thi hành án có vi phạm, pháp luật ít nghiêm trọng của Tòa án, cơ quan thi hành án dân sự cùng cấp hoặc cấp dưới, yêu cầu khắc phục vi phạm pháp luật và xử lý người vi phạm; kiến nghị cơ quan, tổ chức liên quan có sơ hở, thiếu sót trong hoạt động quản lý khắc phục nguyên nhân, điều kiện dẫn tới vi phạm pháp luật và áp dụng các biện pháp phòng ngừa;
  e) Kháng nghị hành vi, quyết định của Thủ trưởng, Chấp hành viên cơ quan thi hành án dân sự cùng cấp, cấp dưới có vi phạm pháp luật nghiêm trọng xâm phạm lợi ích của Nhà nước, quyền, lợi ích hợp pháp của cơ quan, tổ chức, cá nhân; yêu cầu đình chỉ việc thi hành, thu hồi, sửa đổi, bổ sung hoặc hủy bỏ quyết định có vi phạm pháp luật trong việc thi hành án, chấm dứt hành vi vi phạm pháp luật.”
  - Căn cứ khoản 1 Điều 64 Luật THADS  thì quyết định miễn, giảm nghĩa vụ thi hành án của Tòa án có thể bị Viện kiểm sát kháng nghị theo thủ tục phúc thẩm. Thời hạn kháng nghị của Viện kiểm sát cùng cấp là 07 ngày, của Viện kiểm sát cấp trên trực tiếp là 15 ngày, kể từ ngày nhận được quyết định. Hết thời hạn kháng nghị, Viện kiểm sát không kháng nghị thì quyết định của Toà án có hiệu lực thi hành.
   
  Theo các quy định trên thì đối tượng của Công tác KSTHA dân sự là việc tuân theo pháp luật của Tòa án trong việc ban hành các quyết định thuộc thẩm quyền và việc tuân theo pháp luật về thi hành án; của cơ quan thi hành án dân sự, Chấp hành viên, cơ quan, tổ chức và cá nhân có liên quan đến việc thi hành án nhằm bảo đảm việc thi hành án kịp thời, đầy đủ, đúng pháp luật.` },
            { title: '1.2. Phạm vi', content: `Căn cứ Điều 4 Qui chế KSTHA thì phạm vi của Công tác kiểm sát thi hành án dân sự được thực hiện từ khi các bản án, quyết định của Toà án đã có hiệu lực pháp luật hoặc chưa có hiệu lực pháp luật nhưng được thi hành ngay theo qui định của pháp luật dân sự, hôn nhân gia đình, hành chính, kinh doanh, thương mại, lao động, quyết định tuyên bố phá sản doanh nghiệp… cho đến khi bản án, quyết định đó được thi hành xong.` },
            { title: '1.3. Quyền hạn', content: `- Yêu cầu Toà án nhân dân, Cơ quan thi hành án cùng cấp và cấp dưới, Chấp hành viên, các cơ quan, tổ chức, đơn vị và cá nhân có liên quan đến việc thi hành án: Ra quyết định thi hành án; quyết định ủy thác thi hành án; áp dụng thời hiệu yêu cầu thi hành án; quyết định hoãn, tạm đình chỉ, đình chỉ thi hành án, trả lại đơn yêu cầu thi hành án, quyết định tiếp tục thi hành án theo đúng quy định tại các điều 36, 30, 48, 49, 50, 51, 57, 134, 135, 137 Luật THADS sửa đổi, bổ sung năm 2014.2013.
  - Trực tiếp kiểm sát việc tuân theo pháp luật trong việc thi hành án của Cơ quan thi hành án cùng cấp và cấp dưới, Chấp hành viên, các cơ quan, tổ chức, đơn vị và cá nhân có liên quan và việc giải quyết khiếu nại, tố cáo đối với việc thi hành án. theo quy định tại khoản 2 Điều 24 Luật tổ chức VKSND năm 2002; khoản   2 Điều 28 Luật tổ chức Viện kiểm sát nhân dân tối cao năm 2014.
  - Đề nghị xét miễn, giảm nghĩa vụ thi hành án đối với khoản thu nộp ngân sách nhà nước; có ý kiến bằng văn bản trong trường hợp cơ quan thi hành án dân sự đề nghị xét miễn, giảm nghĩa vụ thi hành án theo quy định tại Điều 62 Luật THADS sửa đổi, bổ sung năm 20143; tham gia phiên họp xét miễn, giảm nghĩa vụ thi hành án theo quy định tại Điều 63 Luật THADS sửa đổi, bổ sung năm 20134.
  - Kháng nghị quyết định của Toà án về miễn, giảm nghĩa vụ thi hành án đối với khoản thu nộp ngân sách nhà nước theo quy định tại Điều 64 Luật THADS sửa đổi, bổ sung năm 2014; kháng nghị đối với quyết định, hành vi của Thủ trưởng cơ quan thi hành án dân sự, Chấp hành viên cơ quan thi hành án dân sự cùng cấp và cấp dưới theo quy định Điều 160 Luật THADS sửa đổi, bổ sung năm 2014 và khoản 5 Điều 24, Điều 25 Luật tổ chức VKSND;khoản 7,8 Điều 28 Luật THADS sửa đổi, bổ sung năm 2014.
  - Kiểm sát việc tuân theo pháp luật trong việc tiêu huỷ vật chứng, tài sản theo quy định tại Điều 125 Luật THADS sửa đổi, bổ sung năm 2014; việc cưỡng chế thi hành án theo quy định tại Điều 72 Luật THADS sửa đổi, bổ sung năm 2014; việc thi hành quyết định giám đốc thẩm, tái thẩm tuyên giữ nguyên bản án, quyết định đã có hiệu lực pháp luật theo quy định tại Điều 134 Luật THADS sửa đổi, bổ sung nă 2014;
  - Kiểm sát việc thực hiện kiến nghị, kháng nghị: Định kỳ 6 tháng, 1 năm Viện kiểm sát tiến hành kiểm sát việc Cơ quan thi hành án thực hiện kiến nghị, kháng nghị của Viện kiểm sát. Trước khi tiến hành kiểm sát phải có văn bản thông báo nội dung, phương thức kiểm sát cho Cơ quan thi hành án.
  - Yêu cầu khởi tố về hình sự: Trong quá trình kiểm sát việc tuân theo pháp luật trong việc thi hành án nếu phát hiện có dấu hiệu tội phạm thì báo cáo Lãnh đạo Viện kiểm sát xem xét yêu cầu Cơ quan điều tra khởi tố về hình sự. Báo cáo phải gửi kèm các tài liệu liên quan đến dấu hiệu tội phạm để Lãnh đạo Viện xem xét, quyết định.` }
          ] 
        },
        { 
          title: '2. HOẠT ĐỘNG KIỂM SÁT', 
          subsections: [
            { title: '2.1. Gửi bản án', content: `- Căn cứ Điều 380 BLTTDS thì khi bản án, quyết định của Toà án thuộc trường hợp được thi hành theo quy định tại Điều 375 của BLTTDS thì Toà án đã tuyên bản án, quyết định đó phải cấp cho người được thi hành án và người phải thi hành án bản án hoặc quyết định đó có ghi “để thi hành”. Toà án phải giải thích cho người được thi hành, người phải thi hành bản án, quyết định về quyền yêu cầu, thời hạn yêu cầu thi hành án và nghĩa vụ thi hành án theo quy định của pháp luật về thi hành án dân sự.
  - Căn cứ Điều 27 Luật THADS sửa đổi, bổ sung năm 2014 thì Toà án, Hội đồng xử lý vụ việc cạnh tranh, Trọng tài thương mại đã ra bản án, quyết định được quy định tại Điều 2 của Luật THADS sửa đỏi, bổ sung năm 2014  phải cấp cho đương sự bản án, quyết định có ghi “Để thi hành".
  - Thời hạn chuyển giao bản án, quyết định cho Cơ quan thi hành án quy định tại khoản 1, 2, 3 Điều 28 Luật THADS sửa đổi, bổ sung năm 2014); khi chuyển giao bản án, quyết định phải gửi kèm biên bản kê biên, tạm giữ tang vật, tài sản các tài liệu khác liên quan (nếu có) quy định tại khoản 4 Điều 28 Luật THADS sửa đổi, bổ sung năm 2014; Điều 381 BLTTDS.
  - Căn cứ khoản 2 Điều 179 Luật THADS sửa đổi, bổ sung năm 2014, Điều 382 BLTTDS thì khi thi hành có điểm chưa rõ trong bản án, quyết định thì theo yêu cầu của Cơ quan thi hành án, của người được thi hành án, người phải thi hành án, người có quyền, nghĩa vụ liên quan Tòa án đó ra bản án, quyết định giải thích những điểm chưa rõ; thời hạn giải thích là 15 ngày kể từ ngày nhận được văn bản yêu cầu, nội dung giải thích phải căn cứ vào biên bản phiên toà và biên bản nghị án; thẩm quyền giải thích phải do Thẩm phán ra quyết định hoặc Thẩm phán chủ tọa phiên toà nếu trường hợp họ không còn là Thẩm phán nữa thì do Chánh án Toà án đó ra bản án, quyết định đó giải thích.` },
            { title: '2.2. Đưa ra thi hành', content: `- Khi kiểm sát bản án, quyết định dân sự, Viện kiểm sát cần kiểm sát các hoạt động sau của Cơ quan thi hành án nhằm bảo đảm:
  + Việc ra quyết định thi hành án theo đúng quy định tại các điều 7, 30, 35, 36 Luật THADS sửa đổi, bổ sung năm 2014; Điều 377, 383 BLTTDS;
  + Việc Thủ trưởng Cơ quan thi hành án ra quyết định thi hành án đúng thẩm quyền quy định tại Điều 35 Luật THADS sửa đổi, bổ sung năm 2014.
  + Việc Thủ trưởng Cơ quan thi hành án ra quyết định thi hành án trong những trường hợp ra quyết định thi hành án theo đơn yêu cầu của người được thi hành án đúng quy định về quyền yêu cầu tại Điều 7, thời hạn ra quyết định khi có đơn yêu cầu tại khoản 2 Điều 36 Luật THADS sửa đổi, bổ sung năm 2014.
  + Việc Thủ trưởng Cơ quan thi hành án chủ động ra quyết định thi hành án phải tuân theo đúng quy định tại Điều 36 Luật THADS sửa đổi, bổ sung năm 2014. Căn cứ khoản 1 Điều 36 Luật THADS thì Thủ trưởng Cơ quan thi hành án chủ động ra quyết định thi hành phần bản án, quyết định sau đây: Hình phạt tiền, truy thu tiền, tài sản thu lợi bất chính, án phí; Trả lại tiền, tài sản cho đương sự; tịch thu sung quỹ nhà nước, tịch thu tiêu huỷ vật chứng, tài sản; thu hồi quyền sử dụng đất và tài sản khác thuộc diện sung quỹ nhà nước; quyết định áp dụng biện pháp khẩn cấp tạm thời.
  + Căn cứ để ra quyết định thi hành án: Bản án, quyết định dân sự của Tòa án đã có hiệu lực pháp luật hoặc trong trường hợp chưa có hiệu lực pháp luật nhưng được thi hành ngay theo đúng quy định tại Điều 2 Luật THADS sửa đổi, bổ sung năm 2014, Điều 376 BL TTDS;
  + Nội dung quyết định thi hành án phải đúng nội dung bản án, quyết định của Toà án.` },
            { title: '2.3. Ủy thác', content: `- Kiểm sát việc ủy thác thi hành án:
  Căn cứ Điều 55 Luật THADS sửa đổi, bổ sung năm 2014 thì: 
  + Thủ trưởng Cơ quan thi hành án có thẩm quyền uỷ thác cho Cơ quan thi hành án nơi người phải thi hành án cư trú, làm việc, nơi có tài sản hoặc nơi có trụ sở ra quyết định thi hành án.  
  + Trường hợp người phải thi hành án có tài sản, làm việc, cư trú hoặc có trụ sở ở nhiều địa phương thì Thủ trưởng cơ quan thi hành án dân sự uỷ thác thi hành án từng phần cho cơ quan thi hành án dân sự nơi người phải thi hành án có điều kiện thi hành án để thi hành phần nghĩa vụ của họ.  
  + Trường hợp ủy thác thi hành nghĩa vụ liên quan đến tài sản thì Thủ trưởng cơ quan thi hành án dân sự ủy thác đến cơ quan thi hành án dân sự nơi người phải thi hành án có tài sản; nếu không xác định được nơi có tài sản hoặc nơi có tài sản trùng với nơi làm việc, cư trú, có trụ sở của người phải thi hành án thì ủy thác đến nơi làm việc, cư trú hoặc nơi có trụ sở của người đó. 
  + Trường hợp thi hành nghĩa vụ liên đới mà người phải thi hành án cư trú hoặc có tài sản ở các địa phương khác nhau thì Thủ trưởng cơ quan thi hành án dân sự uỷ thác toàn bộ nghĩa vụ thi hành án đến cơ quan thi hành án dân sự thuộc một trong các địa phương nơi người phải thi hành án có điều kiện thi hành án. 
  + Việc ủy thác phải thực hiện trong thời hạn 05 ngày làm việc, kể từ ngày xác định có căn cứ ủy thác. Trường hợp cần thiết phải ủy thác việc thi hành quyết định của Tòa án về áp dụng biện pháp khẩn cấp tạm thời thì việc uỷ thác phải thực hiện ngay sau khi có căn cứ uỷ thác. 
  - Kiểm sát thẩm quyền uỷ thác thi hành án bảo đảm ủy thác thi hành án của Thủ trưởng Cơ quan thi hành án cấp tỉnh, cấp huyện, cấp quân khu quy định tại Điều 56 Luật THADS sửa đổi, bổ sung năm 2014.
  - Kiểm sát về thủ tục ủy thác thi hành án bảo đảm theo đúng quy định tại Điều 57 Luật THADS sửa đổi, bổ sung năm 2014. Trước khi khi ủy thác, cơ quan thi hành án dân sự phải xử lý xong tài sản tạm giữ, thu giữ, tài sản kê biên tại địa bàn có liên quan đến khoản uỷ thác Trường hợp Thủ trưởng cơ quan thi hành án dân sự đã ra quyết định thi hành án nhưng xét thấy cần ủy thác thì phải ra quyết định thu hồi một phần hoặc toàn bộ quyết định thi hành án và ra quyết định ủy thác cho nơi có điều kiện thi hành… Trong thời hạn 05 ngày làm việc, kể từ ngày nhận được quyết định ủy thác, Thủ trưởng cơ quan thi hành án dân sự ra quyết định thi hành án và thông báo bằng văn bản cho cơ quan thi hành án dân sự đã ủy thác về việc nhận được quyết định ủy thác; quyết định uỷ thác phải được gửi cho Toà án đã chuyển giao bản án, quyết định, VKSND cùng cấp, VKSND nơi nhận uỷ thác, người được thi hành án, người phải thi hành án, người có quyền, nghĩa vụ liên quan.` },
            { title: '2.4. Khôi phục thời hiệu', content: `- Căn cứ Điều 38 Luật THADS sửa đổi, bổ sung năm 2014 thì Quyết định thời hiệu thi hành án phải gửi cho VKSND cùng cấp. Kiểm sát viên cần chủ động phối hợp với Cơ quan thi hành án cùng cấp để nắm các bản án, quyết định cần ra quyết định thi hành án, có biện pháp yêu cầu Cơ quan thi hành án thực hiện việc ra quyết định thi hành án, nếu phát hiện vi phạm của cơ quan này thì có thể trực tiếp yêu cầu hoặc ra văn bản kháng nghị đối với vi phạm pháp luật trong việc ra quyết định khôi phục thời hiệu thi hành án yêu cầu Thủ trư¬ởng Cơ quan thi hành án huỷ bỏ quyết định đó.
  - Căn cứ Điều 30 Luật THADS sủa đỏi, bổ sung năm 2014 thì Thủ trưởng Cơ quan thi hành án có thẩm quyền quyết định thi hành án xem xét, ra quyết định khôi phục thời hiệu yêu cầu thi hành án.
  - Kiểm sát viên cần chú ý đến việc xác định các trở ngại khách quan, sự kiện bất khả kháng theo quy định tại khoản 3 Điều 2 Nghị định 58/2009/NĐ-CP khoản 2 Điều 3 Nghị định 125/2013/NĐ-CP ngày 14/10/2013, theo đó sẽ xác định được việc có vi phạm hay không của Thủ trưởng Cơ quan thi hành án khi xác định thời hịêu thi hành án. Trở ngại khách quan, sự kiện bất khả kháng mà đương sự không thể yêu cầu thi hành án đúng hạn đó là:
  + Sự kiện bất khả kháng là trường hợp thiên tai, hỏa hoạn, địch họa;
  + Trở ngại khách quan là trường hợp đương sự không nhận được bản án, quyết định mà không phải do lỗi của họ; đương sự đi công tác ở vùng biên giới, hải đảo mà không thể gửi đơn yêu cầu thi hành án đúng hạn; tai nạn, ốm nặng đến mức mất khả năng nhận thức, phải điều trị nội trú hoặc do lỗi của cơ quan xét xử, cơ quan thi hành án dân sự hoặc cơ quan, cá nhân khác dẫn đến việc đương sự không thể yêu cầu thi hành án đúng hạn hoặc đương sự chết mà chưa xác định được người thừa kế; tổ chức hợp nhất, sáp nhập, chia, tách, giải thể, cổ phần hóa mà chưa xác định được tổ chức, cá nhân mới có quyền yêu cầu thi hành án theo quy định của pháp luật.
  + Đối với trường hợp xảy ra thiên tai, hỏa hoạn, địch họa hoặc do đương sự chết mà chưa xác định được người thừa kế hay do trở ngại khách quan khác xảy ra tại địa phương nên không thể yêu cầu thi hành án đúng hạn thì phải có xác nhận của Ủy ban nhân dân cấp xã nơi người đó cư trú. Đối với trường hợp do phải chữa bệnh nội trú nên không thể yêu cầu thi hành án đúng hạn thì phải có xác nhận hoặc giấy nhập viện, xuất viện của tổ chức y tế cấp huyện trở lên. Đối với trường hợp do yêu cầu công tác nên không thể yêu cầu thi hành án đúng hạn thì phải có xác nhận của Thủ trưởng cơ quan, đơn vị hoặc giấy cử đi công tác của cơ quan, đơn vị đó. Đối với những trường hợp bất khả kháng, trở ngại khách quan khác nên không thể yêu cầu thi hành án đúng hạn thì phải có xác nhận của cơ quan có thẩm quyền hoặc tài liệu hợp pháp khác để chứng minh. Xác nhận của tổ chức, cá nhân có thẩm quyền phải thể hiện rõ địa điểm, nội dung và thời gian xảy ra sự kiện bất khả kháng hoặc trở ngại khách quan dẫn đến việc đương sự không thể yêu cầu thi hành án đúng hạn.
  + Trường hợp người yêu cầu thi hành án chứng minh được do trở ngại khách quan, sự kiện bất khả kháng mà không thể yêu cầu thi hành án đúng hạn thì thời gian có trở ngại khách quan, sự kiện bất khả kháng đó không được tính vào thời hiệu yêu cầu thi hành án. Đối với trường hợp hoãn, tạm đình chỉ thi hành án thì thời gian hoãn, tạm đình chỉ không tính vào thời hiệu yêu cầu thi hành án, trừ trường hợp người được thi hành án đồng ý cho người phải thi hành án hoãn thi hành án.
  - Căn cứ Điều 383 BLTTDS thì thời hiệu thi hành án là 05 năm kể từ ngày bản án, quyết định có hiệu lực pháp luật; trường hợp bản án, quyết định chưa có hiệu lực pháp luật nhưng được thi hành ngay thì thời hiệu cũng được tính từ ngày bản án, quyết định có hiệu lực pháp luật. Trong trường hợp thời hạn thực hiện nghĩa vụ được ấn định trong bản án, quyết định của Tòa án thì thời hạn 05 năm được tính từ ngày nghĩa vụ đến hạn; đối với bản án, quyết định của Tòa án thi hành theo định kỳ thì thời hạn 05 năm được áp dụng cho từng định kỳ, tính từ ngày nghĩa vụ đến hạn.
   
  - Thời hiệu thi hành án chỉ áp dụng đối với trường hợp thi hành án theo đơn yêu cầu; người phải thi hành án có quyền chứng minh thời hiệu yêu cầu thi hành án đã hết.` },
            { title: '2.5. Xác minh', content: `- VKSND phải kiểm sát việc thực hiện trách nhiệm xác minh điều kiện thi hành án của Cơ quan thi hành án thông qua kiểm sát việc tổ chức, phân công trách nhiệm cho Chấp hành viên tổ chức, thực hiện bản án, quyết định của Cơ quan thi hành án; việc phân loại án có điều kiện, không có điều kiện, qua việc thường xuyên, định kỳ xác minh điều kiện thi hành án của Chấp hành viên được phân công thụ lý hồ sơ; việc xác định về điều kiện thi hành án (có điều kiện, chưa có điều kiện) theo đúng quy định tại Điều 44 Luật THADS sủa đổi, bổ sung năm 2014. Người được thi hành án có quyền chứng minh việc người phải thi hành án có tài sản để thi hành án.
  - Người phải thi hành án chỉ được coi là chưa có điều kiện thi hành nghĩa vụ về tài sản trong trường hợp sau:
  + Không có thu nhập hoặc thu nhập thấp chỉ đảm bảo cuộc sống tối thiểu cho nguời phải thi hành án và gia đình; không có tài sản tại thời điểm xác minh hoặc tuy có tài sản nhưng tài sản có giá trị nhỏ không đủ hoặc chỉ đủ để chi phí về thi hành án, tài sản mà theo quy định của pháp luật không được xử lý để thi hành án hoặc tài sản không bán được, tài sản chung chưa được phân chia hoặc vì lý do khách quan khác nên không xử lý được để thi hành án;
  + Người phải thi hành án bị lâm vào hoàn cảnh kinh tế đặc biệt khó khăn kéo dài do thiên tai, hoả hoạn, tai nạn hoặc ốm đau gây ra;
  - Căn cứ khoản 2 Điều 44 Luật THADS sửa đổi, bổ sung năm 2014 thì trong thời hạn 10 ngày, kể từ ngày chủ động ra quyết định thi hành án hoặc kể từ ngày nhận được yêu cầu xác minh của người được thi hành án, Chấp hành viên phải tiến hành việc xác minh; trường hợp thi hành quyết định áp dụng biện pháp khẩn cấp tạm thời thì phải xác minh ngay. Việc xác minh phải được lập thành biên bản, có xác nhận của tổ trưởng tổ dân phố, Uỷ ban nhân dân, công an cấp xã hoặc cơ quan, tổ chức nơi tiến hành xác minh. Biên bản xác minh phải thể hiện đầy đủ kết quả xác minh.
  - Việc xác minh tài sản dự định kê biên của Chấp hành viên phải đảm bảo đúng các quy định tại thông tư 07/TT-BTP ngày 9/10/2007 của Bộ Tư pháp hướng dẫn về thông báo việc kê biên tài sản thi hành án và cung cấp thông tin về tài sản kê biên tại các trung tâm đăng ký giao dịch, tài sản của Cục đăng ký Quốc gia về giao dịch bảo đảm thuộc Bộ Tư pháp.` },
          ] 
        },
        { title: '3. HỆ THỐNG BIỂU MẪU', subsections: [] },
      ],
    },
    {
      part: 'Phần Thứ Chín',
      title: 'TIẾP CÔNG DÂN & GIẢI QUYẾT KHIẾU NẠI, TỐ CÁO',
      sections: [
        { 
          title: '1. TIẾP CÔNG DÂN', 
          subsections: [
            { title: '1.1. Tiếp công dân', content: `- Căn cứ Điều 3 Quy chế về công tác tiếp công dân, giải quyết khiếu nại, tố cáo và kiểm sát việc giải quyết khiếu nại tố cáo thuộc thẩm quyền của Viện kiểm sát ban hành kèm theo Quyết định số 59/2006/QĐ-VKSTC-V7 ngày 06/02/2006 của Viện trưởng VKSNDTC ( Sau đây gọi tắt là Quy chế 59) thì:
  + Viện trưởng Viện kiểm sát các cấp có trách nhiệm bố trí phòng tiếp công dân tại trụ sở cơ quan ở vị trí thuận tiện. Phòng tiếp công dân phải có biển đề: “Phòng tiếp công dân”, có niêm yết nội quy và lịch tiếp công dân.
  + Việc tiếp công dân phải được tiến hành công khai tại phòng tiếp công dân và theo lịch tiếp công dân. Trường hợp công dân đến tố cáo hoặc ở xa đến khiếu nại lần đầu phải được tiếp ngay. Viện kiểm sát các cấp phải tạo điều kiện thuận lợi và hướng dẫn công dân khiếu nại, tố cáo theo quy định của pháp luật. Không được tiếp công dân ngoài nơi qui định.
  + Viện trưởng Viện kiểm sát các cấp có trách nhiệm bố trí cán bộ, Kiểm sát viên, Điều tra viên tiếp công dân. Người tiếp công dân phải mặc trang phục có phù hiệu của ngành Kiểm sát, đeo thẻ công chức và phải có thái độ đúng mực, tôn trọng công dân. Không được hứa hẹn hoặc thông báo cho công dân nội dung hoặc kết quả giải quyết khi việc giải quyết chưa được kết luận bằng văn bản; việc tiếp nhận đơn khiếu nại, tố cáo và tài liệu, chứng cứ liên quan phải có giấy biên nhận.
  + Viện trưởng Viện kiểm sát các cấp có trách nhiệm thông báo số điện thoại cơ quan và lập hòm thư “tố giác, tin báo về tội phạm và kiến nghị khởi tố” để nhân dân cung cấp thông tin về tội phạm được thuận lợi. Hòm thư “tố giác, tin báo về tội phạm và kiến nghị khởi tố” phải được đặt ở nơi thuận tiện tại trụ sở cơ quan.
  - Thời gian tiếp công dân: Căn cứ Điều 4 Quy chế 59 thì việc tiếp công dân tại Viện kiểm sát được thực hiện 24/24 giờ trong ngày. Ngoài giờ làm việc hành chính, Viện kiểm sát các cấp chỉ tiếp công dân, cơ quan, tổ chức đến tố giác, báo tin về tội phạm hoặc kiến nghị khởi tố, tiếp người phạm tội đến tự thú, đầu thú. Việc tiếp công dân trong giờ làm việc hành chính và ngoài giờ làm việc hành chính được quy định tại các điều 5, 6 Quy chế 59.
  - Tiếp công dân của Lãnh đạo Viện kiểm sát: Căn cứ Điều 7 Quy chế 59 thì khi nhận được yêu cầu của công dân và việc khiếu nại, tố cáo của họ đã được đơn vị liên quan giải quyết nhưng còn có khiếu nại, thì lãnh đạo Viện kiểm sát tiếp công dân. Lãnh đạo Viện kiểm sát nhân dân tối cao, Viện kiểm sát quân sự trung ương mỗi tháng trực tiếp tiếp công dân ít nhất 1 ngày; Lãnh đạo Viện kiểm sát nhân dân cấp tỉnh, Viện kiểm sát quân sự cấp quân khu và tương đương mỗi tháng trực tiếp tiếp công dân ít nhất 2 ngày; Lãnh đạo Viện kiểm sát nhân dân cấp huyện, Viện kiểm sát quân sự khu vực mỗi tháng trực tiếp tiếp công dân ít nhất 3 ngày. Ngoài việc tiếp theo quy định trên, lãnh đạo Viện kiểm sát còn tiếp công dân trong trường hợp cần thiết. Viện trưởng VKSND có trách nhiệm bảo đảm trật tự, an toàn trong việc tổ chức tiếp công dân theo quy định tại Điều 8 Quy chế 59.` },
            { title: '1.2. Giải quyết khiếu nại', content: `1.2.1. Khiếu nại, tố cáo thuộc thẩm quyền giải quyết của VKSND.
  a. Khiếu nại thuộc thẩm quyền giải quyết của VKSND.
  Khiếu nại thuộc thẩm quyền giải quyết của VKSND được chia thành hai loại: Khiếu nại trong quản lý hành chính và khiếu nại trong hoạt động tư pháp.
   
  - Khiếu nại trong hoạt động hành chính thuộc thẩm quyền giải quyết của VKSND.
  Căn cứ Điều 13 Quy chế 59, khiếu nại trong hoạt động hành chính thuộc thẩm quyền giải quyết của VKSND bao gồm:
  + Khiếu nại quyết định, hành vi hành chính của người có thẩm quyền trong Viện kiểm sát về tuyển dụng; phong thăng, bổ nhiệm; điều động, thuyên chuyển; nâng lương, điều chỉnh lương; hợp đồng lao động...
  + Khiếu nại quyết định kỷ luật của người có thẩm quyền trong Viện kiểm sát ban hành.
  - Khiếu nại trong hoạt động tư pháp thuộc thẩm quyền, trách nhiệm của VKSND:
  Căn cứ Điều 4 Luật tổ chức VKSND thì VKSND có trách nhiệm tiếp nhận và giải quyết kịp thời các khiếu nại, tố cáo thuộc thẩm quyền; kiểm sát việc giải quyết khiếu nại, tố cáo về các hoạt động tư pháp của các cơ quan tư pháp theo quy định của pháp luật.
  Căn cứ Điều 15 Quy chế 59 thì khiếu nại trong hoạt động tư pháp thuộc thẩm quyền, trách nhiệm của VKSND bao gồm:
  + Khiếu nại trong hoạt động thực hành quyền công tố và kiểm sát điều tra các vụ án hình sự.
  + Khiếu nại trong hoạt động thực hành quyền công tố và kiểm sát xét xử các vụ án hình sự; kiểm sát việc giải quyết các vụ án dân sự, hôn nhân và gia đình, hành chính, lao động, kinh doanh, thương mại và những việc khác theo quy định của pháp luật.
  + Khiếu nại trong hoạt động kiểm sát việc thi hành án.
  + Khiếu nại trong hoạt động kiểm sát việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù.
  + Khiếu nại trong hoạt động điều tra của Cơ quan điều tra thuộc Viện kiểm sát nhân dân tối cao, Viện kiểm sát quân sự trung ương.
  + Khiếu nại trong hoạt động kiểm sát việc giải quyết khiếu nại, tố cáo về tư pháp.
  + Khiếu nại về bồi thường thiệt hại do người có thẩm quyền trong hoạt động tố tụng hình sự gây ra.
  b. Tố cáo thuộc thẩm quyền giải quyết của VKSND
  Căn cứ Điều 18 Quy chế 59, tố cáo thuộc thẩm quyền giải quyết của VKSND gồm có:
  - Tố cáo hành vi vi phạm pháp luật trong hoạt động hành chính của cán bộ, công chức thuộc Viện kiểm sát;
  - Tố cáo hành vi vi phạm pháp luật trong hoạt động tư pháp của Kiểm tra viên, Kiểm sát viên, Phó Viện trưởng, Viện trưởng Viện kiểm sát.
  - Tố cáo hành vi vi phạm pháp luật trong việc tạm giữ, tạm giam, quản lý và giáo dục người chấp hành án phạt tù;
  - Tố cáo hành vi tố tụng của những người có thẩm quyền tiến hành một số hoạt động điều tra.
  1.2.2. Giải quyết khiếu nại, tố cáo thuộc thẩm quyền của VKSND:
  a. Tiếp nhận, phân loại và xử lý khiếu nại, tố cáo.
  Tiếp nhận, phân loại và xử lý khiếu nại, tố cáo là bước đầu tiên trong quá trình giải quyết khiếu nại, tố cáo và được quy định cụ thể tại các Điều 9, 10, 11, 12 của Quy chế 59.
  - Đơn khiếu nại, tố cáo gửi đến VKSND (kể cả đơn gửi đến lãnh đạo Viện) đều được quản lý thống nhất qua một đầu mối là đơn vị Khiếu tố. Cơ quan điều tra VKSND tối cao, Viện kiểm sát quân sự trung ương có trách nhiệm phân loại đơn được tiếp nhận qua hòm thư tố giác tội phạm và thụ lý đơn thuộc thẩm quyền đồng thời chuyển ngay những đơn không thuộc thẩm quyền cho đơn vị Khiếu tố xử lý theo quy định. Không được tiếp nhận đơn khiếu nại, tố cáo ngoài nơi quy định.
  - Đơn khiếu nại, tố cáo được gửi đến Viện kiểm sát được phân thành 04 loại: Đơn không thuộc thẩm quyền, trách nhiệm của Viện kiểm sát; đơn thuộc thẩm quyền giải quyết của Viện kiểm sát; đơn thuộc trách nhiệm kiểm sát của Viện kiểm sát và đơn không đủ điều kiện để xử lý, giải quyết.
  Căn cứ Điều 11 của Quy chế 59, việc xử lý đơn khiếu nại, tố cáo được thực hiện như sau:
  - Xử lý đơn khiếu nại
  + Đối với đơn khiếu nại không thuộc thẩm quyền giải quyết hoặc không thuộc trách nhiệm kiểm sát của Viện kiểm sát thì trả lại đơn và chỉ dẫn, trả lời cho người có đơn biết để họ gửi đơn đến đúng nơi có thẩm quyền giải quyết. Nếu người khiếu nại gửi kèm theo tài liệu là bản gốc thì phải gửi trả lại cho họ theo đường bưu điện bằng hình thức bảo đảm; trường hợp đơn khiếu nại thuộc thẩm quyền giải quyết hoặc thuộc trách nhiệm kiểm sát của Viện kiểm sát cấp khác hoặc địa phương khác thì phải chuyển đơn khiếu nại, cùng tài liệu, chứng cứ gửi kèm cho Viện kiểm sát có thẩm quyền, đồng thời có văn bản báo tin cho người khiếu nại biết;
  + Đối với đơn khiếu nại thuộc thẩm quyền, trách nhiệm của Viện kiểm sát cấp mình nhưng có nhiều nội dung khác nhau thuộc thẩm quyền giải quyết của nhiều cơ quan khác nhau, hoặc đơn có nội dung vừa khiếu nại vừa tố cáo, thì phải có văn bản chỉ dẫn cho người có đơn viết thành từng đơn có nội dung riêng để thực hiện việc khiếu nại; trường hợp đơn khiếu nại chưa đủ điều kiện để thụ lý theo quy định tại khoản 3 Điều 2 Quy chế 59, thì phải có văn bản chỉ dẫn cho người khiếu nại cung cấp bổ sung tài liệu có liên quan;
  + Đối với đơn khiếu nại, tố cáo thuộc thẩm quyền thì chuyển ngay tới lãnh đạo Viện phụ trách khối, các đơn vị có nhiệm vụ nghiên cứu, đề xuất, để có biện pháp giải quyết, đồng thời báo tin cho người có đơn biết.
  + Đối với đơn khiếu nại không đủ điều kiện thụ lý thì có văn bản chỉ dẫn, trả lời rõ lý do cho người khiếu nại biết. Việc chỉ dẫn trả lời này chỉ thực hiện một lần cho một việc khiếu nại.
  - Xử lý đơn tố cáo
  + Đối với đơn tố cáo không thuộc thẩm quyền giải quyết thì phải chuyển ngay đơn cùng các tài liệu chứng cứ gửi kèm cho cơ quan có thẩm quyền giải quyết, đồng thời có văn bản báo tin cho người có đơn biết;
  + Đối với đơn tố cáo thuộc thẩm quyền giải quyết nhưng có một phần nội dung thuộc thẩm quyền giải quyết của cơ quan khác thì thụ lý nội dung thuộc thẩm quyền của Viện kiểm sát, đồng thời có văn bản chỉ dẫn người tố cáo viết đơn riêng theo nội dung tố cáo còn lại để gửi đến đúng nơi có thẩm quyền; trường hợp đơn có nhiều nội dung tố cáo khác nhau nhưng đều thuộc thẩm quyền giải quyết của Viện kiểm sát, mà từng nội dung này lại do các đơn vị, bộ phận khác nhau xem xét thì đơn vị, bộ phận Khiếu tố báo cáo đề xuất bằng văn bản với Viện trưởng để Viện trưởng phân công trách nhiệm chủ trì và phối hợp giữa các đơn vị, bộ phận trong giải quyết đơn và trả lời người có đơn;
  + Đối với đơn tố cáo hành vi phạm tội thì xử lý theo quy định tại Điều 103 Bộ luật Tố tụng Hình sự. Trường hợp tố giác, tin báo về tội phạm và kiến nghị khởi tố thuộc thẩm quyền điều tra của Cơ quan điều tra Viện kiểm sát thì xử lý theo quy định tại Quyết định số 144 ngày 07/11/2003 của Viện trưởng Viện kiểm sát nhân dân tối cao;
  + Không xem xét đối với tố cáo giấu tên, mạo tên, không rõ địa chỉ, không có chữ ký trực tiếp mà sao chụp chữ ký hoặc những tố cáo đã được cấp có thẩm quyền xem xét, kết luận nay tố cáo lại nhưng không có thêm tài liệu, chứng cứ mới.
  + Đối với đơn khiếu nại, tố cáo do các cơ quan Đảng, Nhà nước, tổ chức có chức năng giám sát chuyển đến, nếu thuộc thẩm quyền giải quyết của Viện kiểm sát thì đơn vị có trách nhiệm giải quyết phải có văn bản thông báo việc thụ lý cho cơ quan, người chuyển đơn biết. Trường hợp không đúng thẩm quyền, thì đơn vị khiếu tố trả đơn cho người khiếu nại và thông báo bằng văn bản cho cơ quan, người chuyển đơn biết.
  b. Giải quyết khiếu nại, tố cáo:
  Giải quyết khiếu nại:
  - Giải quyết khiếu nại trong quản lý hành chính nhà nước: 
  + Căn cứ Điều 14 Quy chế 59 thì thẩm quyền, thời hạn và thủ tục giải quyết khiếu nại quyết định, hành vi hành chính, giải quyết khiếu nại quyết định kỷ luật được thực hiện theo quy định của Luật Khiếu nại 2011 và Nghị định số 75/2012/NĐ – CP ngày 03/10/2012 của Chính phủ. Theo sự phân công của Viện trưởng và trong phạm vi nhiệm vụ của mình, đơn vị Thanh tra Viện kiểm sát nhân dân tối cao, đơn vị tổ chức - cán bộ, thủ trưởng các đơn vị liên quan có trách nhiệm nghiên cứu, đề xuất hướng giải quyết khiếu nại quyết định, hành vi hành chính, quyết định kỷ luật trong hoạt động quản lý hành chính của Viện kiểm sát nhân dân.
  - Giải quyết khiếu nại trong hoạt động tư pháp.
  Thứ nhất: Thẩm quyền giải quyết khiếu nại trong hoạt động tư pháp:
  + Căn cứ Điều 16 Quy chế 59 thì thẩm quyền giải quyết khiếu nại trong tố tụng hình sự được thực hiện theo quy định tại Điều 329, 330, 332 và 333 Bộ luật Tố tụng Hình sự và Thông tư liên tịch số 02/2005/TTLT-VKSTC-TATC-BCA-BQP-BTP ngày 10/8/2005 hướng dẫn thi hành một số quy định của Bộ luật Tố tụng Hình sự về khiếu nại, tố cáo.
  + Thẩm quyền giải quyết khiếu nại trong tố tụng dân sự được áp dụng theo quy định tại các Điều 395, 396, 397 và 401 Bộ luật Tố tụng Dân sự và Thông tư liên tịch số 04/2012/TTLT-VKSTC-TATC ngày 01/8/2012 hướng dẫn thi hành một số quy định của Bộ luật Tố tụng Dân sự về kiểm sát việc tuân theo pháp luật trong tố tụng dân sự và sự tham gia của Viện kiểm sát nhân dân trong việc giải quyết các vụ, việc dân sự.
  + Thẩm quyền giải quyết khiếu nại đối với bản án, quyết định có hiệu lực pháp luật của Tòa án được thực hiện theo quy định tại các Điều 275, 293 Bộ luật Tố tụng Hình sự và các Điều 285, 307 Bộ luật Tố tụng Dân sự.
  + Thẩm quyền giải quyết khiếu nại khác của Viện kiểm sát bao gồm:
  Một là, khiếu nại quyết định, hành vi của Kiểm sát viên, Phó Viện trưởng Viện kiểm sát do Viện trưởng Viện kiểm sát giải quyết; trường hợp người khiếu nại không đồng ý với kết quả giải quyết mà khiếu nại tiếp thì Viện kiểm sát cấp trên trực tiếp giải quyết. Việc giải quyết của Viện kiểm sát cấp trên trực tiếp là giải quyết cuối cùng;
  Hai là, khiếu nại quyết định, hành vi của Viện trưởng Viện kiểm sát do Viện kiểm sát cấp trên trực tiếp giải quyết. Việc giải quyết của Viện kiểm sát cấp trên trực tiếp là giải quyết cuối cùng;
  Ba là, khiếu nại quyết định, hành vi của Kiểm sát viên Viện kiểm sát nhân dân tối cao, Thủ trưởng Cơ quan điều tra của Viện kiểm sát nhân dân tối cao, Phó Viện trưởng Viện kiểm sát nhân dân tối cao do Viện trưởng Viện kiểm sát nhân dân tối cao giải quyết. Việc giải quyết của Viện trưởng Viện kiểm sát nhân dân tối cao là giải quyết cuối cùng;
  Bốn là, khiếu nại quyết định, hành vi của Kiểm sát viên, Thủ trưởng Cơ quan điều tra, Phó Viện trưởng Viện kiểm sát quân sự trung ương do Viện trưởng Viện kiểm sát quân sự trung ương giải quyết. Việc giải quyết của Viện trưởng Viện kiểm sát quân sự trung ương là giải quyết cuối cùng.
  Thứ hai, thời hiệu, thời hạn, thủ tục, quy trình giải quyết khiếu nại trong hoạt động tư pháp.
  * Xác định thời hiệu khiếu nại trong hoạt động tư pháp
  Thời hiệu là khoảng thời gian mà các chủ thể được thực hiện những quyền mà pháp luật cho phép, khi hết thời hạn theo quy định thì mất quyền thực hiện. Thời hiệu khiếu nại trong hoạt động tư pháp quy định tại Điều 328 BLTTHS, Điều 394 BLTTDS, Điều 150 Luật thi hành án hình sự...Việc thực hiện quyền khiếu nại khi đã hết thời hiệu thuộc một trong các trường hợp khiếu nại không được thụ lý giải quyết. Tuy nhiên, để đảm bảo tính đúng đắn cho hoạt động của mình, cũng như đơn đã có văn bản giải quyết cuối cùng, đối với loại khiếu nại này cần kiểm tra lại nhằm phát hiện sai sót (nếu có) và các biện pháp khắc phục sai sót đó để hạn chế hậu quả xảy ra.
  * Thời hạn giải quyết khiếu nại trong hoạt động tư pháp
  Hoạt động tư pháp là hoạt động nghiệp vụ rất phức tạp, đa dạng, được thực hiện bởi nhiều cơ quan tư pháp và với nhiều giai đoạn, lĩnh vực, thủ tục, trình tự khác nhau. Thời hạn giải quyết khiếu nại trong mỗi hoạt động tư pháp được quy định khác nhau tùy thuộc vào tính chất, đặc điểm của mỗi hoạt động tố tụng, cụ thể:
  - BLTTHS quy định thời hạn giải quyết khiếu nại của VKS lần đầu là 7 ngày, lần tiếp theo là 15 ngày; đặc biệt đối với khiếu nại về việc bắt, tạm giữ, tạm giam thì phải giải quyết ngay.
  - Luật Thi hành án hình sự quy định: “thời hạn giải quyết khiếu nại lần đầu là 15 ngày, kể từ ngày thụ lý đơn khiếu nại; thời hạn giải quyết khiếu nại lần hai là 30 ngày, kể từ ngày thụ lý đơn khiếu nại; trường hợp cần thiết, đối với những vụ việc phức tạp thì thời hạn giải quyết khiếu nại có thể kéo dài nhưng không quá 30 ngày, kể từ ngày hết thời hạn giải quyết khiếu nại”...
  Như vậy, cho thấy, khiếu nại về tư pháp có quy định riêng thời hạn giải quyết cho từng lĩnh vực, khi giải quyết khiếu nại tư pháp thuộc thẩm quyền của Viện kiểm sát cần lưu ý áp dụng chính xác, tránh tình trạng áp dụng thời hạn giải quyết khiếu nại của Luật khiếu nại thuộc lĩnh vực hành chính hoặc các lĩnh vực tư pháp này vào lĩnh vực tư pháp khác.
  * Thủ tục giải quyết khiếu nại trong hoạt động tư pháp
  Căn cứ khoản 1 Điều 17 Quy chế 59 thì thủ tục giải quyết khiếu nại trong hoạt động tư pháp được thực hiện như sau:
  - Khiếu nại liên quan đến phạm vi trách nhiệm của đơn vị nào thì đơn vị đó phải thụ lý và nghiên cứu, đề xuất hướng giải quyết. Thủ trưởng các đơn vị, bộ phận trong Viện kiểm sát phải phân công cán bộ, Kiểm tra viên, Kiểm sát viên xác minh làm rõ nội dung khiếu nại.
  -  Cán bộ, Kiểm tra viên, Kiểm sát viên được phân công xác minh khiếu nại phải xây dựng kế hoạch xác minh và thực hiện nhiệm vụ đúng kế hoạch đã được thủ trưởng đơn vị phê duyệt. Sau khi xác minh, người được phân công phải đề xuất hướng giải quyết bằng văn bản và phải chịu trách nhiệm cá nhân về việc đề xuất của mình.
  * Quy trình giải quyết khiếu nại trong hoạt động tư pháp căn cứ khoản 3 Điều 17 Quy chế 59 thì quy trình giải quyết khiếu nại trong hoạt động tư pháp được thực hiện theo các quy chế của các lĩnh vực tương ứng, song cần đảm bảo các trình tự chủ yếu sau:
  - Xác minh, kết luận
  Viện trưởng ra Quyết định phân công nhiệm vụ xác minh việc khiếu nại, trong đó phân công cụ thể nội dung, thời gian, quyền hạn, trách nhiệm
  + Cán bộ được phân công nhiệm vụ phải thực hiện đầy đủ các thủ tục: thu thập tài liệu liên quan, lấy lời khai, giải trình của người bị khiếu nại và các cá nhân, tổ chức có liên quan;
  + Kết thúc xác minh, người được giao nhiệm vụ xác minh phải tổng hợp bằng văn bản báo cáo kết quả xác minh theo các nội dung khiếu nại;
  + Đề xuất hướng giải quyết, xác định trách nhiệm của cá nhân, tập thể bị khiếu nại.
  - Hình thức giải quyết
  Việc giải quyết khiếu nại phải được thể hiện bằng văn bản. Giải quyết khiếu nại phải ban hành Quyết định, giải quyết tố cáo cần phải ban hành kết luận (theo mẫu do VKSTC ban hành, trừ giải quyết đề nghị kháng nghị giám đốc thẩm, tái thẩm các bản án, Quyết định của Tòa án đã có hiệu lực pháp luật được giải quyết bằng văn bản trả lời, văn bản thông báo không kháng nghị hoặc ra Quyết định kháng nghị). Đồng thời, nêu các kiến nghị, quyết định xử lý nếu có. Văn bản giải quyết  khiếu nại phải được gửi đến người khiếu nại, người bị khiếu nại và người có quyền, lợi ích liên quan.
  - Giải quyết khiếu nại phải lập hồ sơ riêng, được đánh số trang theo quy định
   Việc giải quyết khiếu nại phải được lập thành hồ sơ. Hồ sơ giải quyết khiếu nại gồm các tài liệu chủ yếu sau đây: Đơn khiếu nại; văn bản phân công người giải quyết khiếu nại; kế hoạch xác minh; các tài liệu có liên quan đến việc khiếu nại; kết quả xác minh; văn bản giải quyết khiếu nại. Hồ sơ giải quyết khiếu nại phải được đánh số trang theo thứ tự tài liệu và được lưu giữ theo qui định của pháp luật.
   Giải quyết tố cáo
  - Giải quyết tố cáo trong hoạt động quản lý hành chính:
  + Căn cứ khoản 1 Điều 19 Quy chế 59 thì Thẩm quyền giải quyết tố cáo trong hoạt động hành chính của Viện kiểm sát được thực hiện theo quy định của Luật tố cáo năm 2011 và Nghị định số 76/2012/NĐ - CP ngày 03/10/2012 của Chính phủ.
  + Căn cứ khoản 1 Điều 20 Quy chế 59 thì thời hạn và thủ tục giải quyết tố cáo trong hoạt động hành chính của Viện kiểm sát được thực hiện theo quy định của Luật tố cáo. 
  - Giải quyết tố cáo trong hoạt động tư pháp:
  Thứ nhất, về thẩm quyền giải quyết tố cáo: Căn cứ khoản 2 Điều 19 Quy chế 59 thì thẩm quyền giải quyết tố cáo trong hoạt động tư pháp của Viện kiểm sát được thực hiện như sau:
  + Thẩm quyền giải quyết tố cáo hành vi vi phạm pháp luật trong hoạt động tố tụng của những người có thẩm quyền tiến hành tố tụng thuộc Viện kiểm sát, của người có thẩm quyền tiến hành một số hoạt động điều tra và giải quyết tố cáo liên quan đến việc áp dụng biện pháp bắt, tạm giữ, tạm giam, được thực hiện theo quy định của Bộ luật Tố tụng Hình sự, Bộ luật Tố tụng Dân sự và các thông tư hướng dẫn liên quan;
  + Thẩm quyền giải quyết các tố cáo khác được thực hiện theo quy định của Luật tố cáo. Riêng giải quyết tố cáo hành vi vi phạm pháp luật trong việc quản lý và giáo dục người chấp hành án phạt tù thuộc thẩm quyền của Viện kiểm sát có trách nhiệm kiểm sát nơi quản lý người chấp hành án phạt tù.
  Thứ hai, về thời hạn, thủ tục giải quyết tố cáo trong hoạt động tư pháp:
  + Căn cứ khoản 2 Điều 20 Quy chế 59 thì thời hạn giải quyết tố cáo hành vi vi phạm pháp luật của Kiểm sát viên, Phó Viện trưởng, Viện trưởng Viện kiểm sát trong tố tụng hình sự, tố tụng dân sự và thời hạn giải quyết tố cáo liên quan đến việc bắt, tạm giữ, tạm giam được thực hiện theo quy định của Bộ luật Tố tụng Hình sự, Bộ luật Tố tụng Dân sự. Thời hạn giải quyết tố cáo khác trong hoạt động tư pháp của Viện kiểm sát được thực hiện theo quy định của Luật tố cáo.
  Thứ ba, quy trình giải quyết tố cáo trong hoạt động tư pháp:
  Căn cứ Điều 21 Quy chế 59 thì quy trình giải quyết tố cáo trong hoạt động tư pháp của Viện kiểm sát được thực hiện theo các quy chế công tác liên quan, song phải đảm bảo các thủ tục chủ yếu sau:
  Một là, xác minh, kết luận:
  + Viện trưởng Viện kiểm sát phải ra quyết định về việc tiến hành xác minh nội dung tố cáo; trong quyết định phải phân công người được giao nhiệm vụ xác minh, nội dung cần xác minh, thời gian xác minh, quyền hạn và trách nhiệm của người được giao nhiệm vụ xác minh.
  + Kết thúc việc xác minh, người được phân công xác minh phải có văn bản báo cáo về những nội dung tố cáo, xác định trách nhiệm của người có hành vi vi phạm pháp luật và đề xuất hướng giải quyết để Viện trưởng quyết định biện pháp xử lý. Người được phân công xác minh phải chịu trách nhiệm về nội dung xác minh và đề xuất của mình.
  + Trong quá trình xác minh, giải quyết tố cáo, nếu thấy có dấu hiệu tội phạm thì phải chuyển đơn tố cáo và tài liệu, chứng cứ liên quan cho Cơ quan điều tra có thẩm quyền.
  Hai là, việc giải quyết tố cáo phải được lập thành hồ sơ. Hồ sơ giải quyết tố cáo gồm các tài liệu chính sau đây: Đơn tố cáo; quyết định về việc tiến hành xác minh; kế hoạch, nội dung xác minh; các tài liệu có liên quan đến việc tố cáo; kết quả xác minh; kết luận nội dung tố cáo, các kiến nghị, quyết định xử lý (nếu có); thông báo kết quả giải quyết tố cáo cho người tố cáo. Hồ sơ giải quyết tố cáo phải được đánh số trang theo thứ tự tài liệu và được lưu giữ theo qui định của pháp luật.` }
          ] 
        },
        { 
          title: '2. KIỂM SÁT GIẢI QUYẾT', 
          subsections: [
            { title: '2.1. Nhiệm vụ', content: `Căn cứ Điều 22, Quy chế 59 thì:
  - Viện kiểm sát các cấp có trách nhiệm kiểm sát việc giải quyết khiếu nại, tố cáo về các hoạt động tư pháp của các cơ quan tư pháp cùng cấp và cấp dưới (Cơ quan điều tra, Tòa án, cơ quan Thi hành án, cơ quan khác được giao tiến hành một số hoạt động điều tra) theo quy định của pháp luật tố tụng hình sự, tố tụng dân sự, tố tụng hành chính và thi hành án.
  - Viện trưởng Viện kiểm sát các cấp, trong phạm vi nhiệm vụ của mình và căn cứ vào tình hình thực tế, phân công đơn vị Khiếu tố và các đơn vị nghiệp vụ khác thực hiện kiểm sát việc giải quyết khiếu nại, tố cáo về tư pháp theo quy định tại Quy chế 59.
  - Để thực hiện kiểm sát, các đơn vị được phân công có trách nhiệm:
  + Tham mưu, giúp Viện trưởng Viện kiểm sát về công tác kiểm sát việc giải quyết khiếu nại, tố cáo về tư pháp của các cơ quan tư pháp;
  + Yêu cầu các cơ quan tư pháp cùng cấp và cấp dưới giải quyết khiếu nại, tố cáo về tư pháp và thông báo kết quả cho Viện kiểm sát;
  + Xác minh, thu thập tài liệu, chứng cứ liên quan đến việc giải quyết khiếu nại, tố cáo của các cơ quan tư pháp để xác định vi phạm pháp luật trong việc giải quyết khiếu nại, tố cáo về tư pháp của cơ quan tư pháp;
  + Nghiên cứu hồ sơ tài liệu liên quan đến việc giải quyết khiếu nại do các cơ quan tư pháp cung cấp để phát hiện, tổng hợp vi phạm pháp luật (về cả hai mặt thủ tục giải quyết và nội dung giải quyết) của các cơ quan này trong việc giải quyết khiếu nại, tố cáo về các hoạt động tư pháp, để tham mưu với Viện trưởng Viện kiểm sát ban hành kháng nghị, kiến nghị về các biện pháp khắc phục.` },
            { title: '2.2. Trình tự', content: `- Căn cứ khoản 1 Điều 23 Quy chế 59 thì các biện pháp được áp dụng trong việc kiểm sát việc giải quyết khiếu nại, tố cáo về tư pháp gồm có:
  + Yêu cầu cơ quan tư pháp ra văn bản giải quyết khiếu nại, tố cáo;
  + Yêu cầu cơ quan tư pháp kiểm tra việc giải quyết khiếu nại, tố cáo của cấp mình, cấp dưới và thông báo kết quả cho Viện kiểm sát;
  + Yêu cầu cơ quan tư pháp cung cấp hồ sơ, tài liệu liên quan đến giải quyết khiếu nại, tố cáo cho Viện kiểm sát;
  + Trực tiếp kiểm sát việc giải quyết khiếu nại, tố cáo của cơ quan tư pháp (chỉ áp dụng trong kiểm sát việc giải quyết khiếu nại, tố cáo trong tố tụng hình sự).
  - Căn cứ khoản 2 Điều 23 Quy chế 59 thì điều kiện áp dụng và trình tự thực hiện các biện pháp kiểm sát được quy định như sau:
  + Việc yêu cầu cơ quan tư pháp ra văn bản giải quyết khiếu nại, tố cáo được thực hiện thuộc một trong các trường hợp sau: Viện kiểm sát nhận được khiếu nại, tố cáo việc cơ quan tư pháp không ra văn bản giải quyết khiếu nại, tố cáo trong thời hạn quy định hoặc đã giải quyết nhưng không ban hành văn bản giải quyết; Viện kiểm sát có cơ sở xác định cơ quan tư pháp không ra văn bản giải quyết khiếu nại, tố cáo trong thời hạn quy định hoặc đã giải quyết nhưng không ban hành văn bản giải quyết.
  + Việc yêu cầu cơ quan tư pháp kiểm tra việc giải quyết khiếu nại, tố cáo của cấp mình và cấp dưới, thông báo kết quả cho Viện kiểm sát được thực hiện khi Viện kiểm sát có cơ sở xác định cơ quan tư pháp không thực hiện yêu cầu ra văn bản giải quyết khiếu nại, tố cáo thuộc một trong các trường hợp sau: Viện kiểm sát nhận được yêu cầu của cơ quan có thẩm quyền; Viện kiểm sát nhận được đơn khiếu nại, tố cáo về vi phạm pháp luật của cơ quan tư pháp trong việc giải quyết khiếu nại, tố cáo; Viện kiểm sát có cơ sở xác định cơ quan tư pháp có vi phạm pháp luật trong giải quyết khiếu nại, tố cáo;
  + Việc yêu cầu cơ quan tư pháp cung cấp hồ sơ, tài liệu liên quan đến việc giải quyết khiếu nại, tố cáo được thực hiện trong các trường hợp cơ quan tư pháp không thực hiện hoặc thực hiện không đầy đủ các yêu cầu của Viện kiểm sát được quy định tại điểm a và điểm b khoản 1 Điều 23 Quy chế 59.
  + Việc trực tiếp kiểm sát việc giải quyết khiếu nại, tố cáo của cơ quan tư pháp chỉ tiến hành trong tố tụng hình sự và chỉ thực hiện khi qua nghiên cứu hồ sơ, tài liệu liên quan đến việc giải quyết khiếu nại, tố cáo được cung cấp theo quy định tại điểm c khoản 1 Điều 23 Quy chế 59 thấy việc giải quyết chưa thực hiện đúng theo quy định của pháp luật.` },
            { title: '2.3. Các bước', content: `Căn cứ Điều 24 Quy chế 59 thì các bước cụ thể trong thực hiện kiểm sát việc giải quyết khiếu nại, tố cáo như sau:
  - Nghiên cứu đơn khiếu nại, tố cáo hoặc xác minh thông tin liên quan đến việc vi phạm của cơ quan tư pháp trong việc giải quyết khiếu nại, tố cáo để xác định chính xác việc tuân theo pháp luật trong giải quyết khiếu nại, tố cáo của cơ quan tư pháp.
  - Thực hiện lần lượt các yêu cầu theo đúng các điều kiện tương ứng với mỗi biện pháp được quy định tại Điều 23 Quy chế 59. Việc thực hiện yêu cầu phải bằng văn bản.
  - Trong trường hợp cơ quan tư pháp không đáp ứng hoặc đáp ứng không đầy đủ yêu cầu của Viện kiểm sát, thì có văn bản kiến nghị lên cơ quan quản lý cấp trên để có biện pháp quản lý, đôn đốc việc thực hiện của cơ quan tư pháp.
  - Nếu xét thấy cần thiết có thể trực tiếp gặp gỡ, đối thoại với người khiếu nại, người bị khiếu nại, người tố cáo, người bị tố cáo và những người có liên quan để xác minh những vấn đề cần làm rõ nhằm kết luận việc tuân theo pháp luật trong giải quyết khiếu nại, tố cáo của cơ quan tư pháp.
  - Sau khi kết thúc việc nghiên cứu hồ sơ, tài liệu và xác minh những vấn đề liên quan đến giải quyết khiếu nại, tố cáo của cơ quan tư pháp hoặc khi kết thúc cuộc kiểm sát trực tiếp trong tố tụng hình sự, thì tùy tính chất mức độ vi phạm pháp luật trong việc giải quyết khiếu nại, tố cáo của cơ quan tư pháp, ban hành kháng nghị, kiến nghị để yêu cầu cơ quan được kiểm sát khắc phục vi phạm pháp luật. Đồng thời, nếu xét thấy cần thiết, Viện kiểm sát có văn bản kiến nghị cơ quan cấp trên trực tiếp của cơ quan được kiểm sát để yêu cầu thực hiện các biện pháp quản lý liên quan.` }
          ] 
        },
        { title: '3. QUẢN LÝ NHÀ NƯỚC', subsections: [] },
        { title: 'BIỂU MẪU TỐ TỤNG DÂN SỰ', subsections: [] },
        { title: 'BIỂU MẪU TỐ TỤNG HÌNH SỰ', subsections: [] },
      ],
    },
  ];

export default DATA;